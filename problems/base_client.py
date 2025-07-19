import requests
import hashlib
import json
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from binascii import unhexlify
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


class BaseProblemClient:
    BASE_URL = "https://www.mashangpa.com/api/problem-detail"
    SESSION_ID = "8ef7dlbp3dklennrrlml3iw160k3lpti"

    def __init__(self, problem_id):
        self.problem_id = problem_id
        self.session = requests.Session()
        self.session.cookies.set("sessionid", self.SESSION_ID)
        referer_url = f"{self.BASE_URL}/{self.problem_id}/"
        self.session.headers.update(
            {
                "Referer": referer_url,
            }
        )
        self.session.verify = False

    def make_request(self, method="GET", page=1, extra_params=None, extra_headers=None):
        url = f"{self.BASE_URL}/{self.problem_id}/data"
        params = {"page": page}
        headers = {}

        if extra_params:
            params.update(extra_params)
        if extra_headers:
            headers.update(extra_headers)

        response = self.session.request(method, url, params=params, headers=headers)
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
