import requests
import hashlib
import json
from Crypto.Cipher import AES, DES3
from Crypto.Util.Padding import pad, unpad
from binascii import unhexlify
import urllib3
import base64

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


class BaseProblemClient:
    BASE_URL = "https://www.mashangpa.com/api/problem-detail"
    SESSION_ID = "tldwwuxakwfx6pqvgxksm4c172h4b5t5"
    USER_AGEN = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"

    def __init__(self, problem_id):
        self.problem_id = problem_id
        self.session = requests.Session()
        self.session.cookies.set("sessionid", self.SESSION_ID)
        referer_url = f"{self.BASE_URL}/{self.problem_id}/"
        self.session.headers.update(
            {
                "Referer": referer_url,
                "User-Agent": self.USER_AGEN,
            }
        )
        self.session.verify = False

    def make_request(self, method="GET", page=1, extra_params=None, extra_headers=None):
        url = f"{self.BASE_URL}/{self.problem_id}/data/"

        headers = {}
        if extra_headers:
            headers.update(extra_headers)

        payload = {"page": f"{page}"}
        if extra_params:
            payload.update(extra_params)

        if method.upper() == "GET":
            response = self.session.request(
                method, url, params=payload, headers=headers
            )
        else:
            response = self.session.request(method, url, json=payload, headers=headers)

        response.raise_for_status()
        return response.json()

    @staticmethod
    def generate_md5_signature(raw_string):
        return hashlib.md5(raw_string.encode()).hexdigest()

    @staticmethod
    def aes_encrypt(data, key, iv):
        cipher = AES.new(key, AES.MODE_CBC, iv)
        padded_data = pad(json.dumps(data).encode(), AES.block_size)
        return cipher.encrypt(padded_data).hex()

    @staticmethod
    def aes_decrypt(encrypted_data, key, iv):
        cipher = AES.new(key, AES.MODE_CBC, iv)
        decrypted = cipher.decrypt(unhexlify(encrypted_data))
        return unpad(decrypted, AES.block_size).decode()

    @staticmethod
    def des3_decrypt(cipher_text_base64: str, key: str, iv: str) -> str:
        key_bytes = key.encode("utf-8")
        iv_bytes = iv.encode("utf-8")
        cipher_bytes = base64.b64decode(cipher_text_base64)
        cipher = DES3.new(key_bytes, DES3.MODE_CBC, iv_bytes)
        decrypted = cipher.decrypt(cipher_bytes)
        plaintext = unpad(decrypted, DES3.block_size)
        return plaintext.decode("utf-8")
