import json
import time
from base_client import BaseProblemClient


class Problem6Client(BaseProblemClient):
    KEY = b"xxxxxxxxoooooooo"
    IV = b"0123456789ABCDEF"
    SECRET_PREFIX = "sssssbbbbb"

    def __init__(self):
        super().__init__(6)

    def get_page_sum(self, page):
        ts, token = self._generate_token()
        data = self.make_request(page=page, extra_headers={"s": token, "tt": ts})
        decrypted = self.aes_decrypt(data["t"], self.KEY, self.IV)
        return sum(json.loads(decrypted).get("current_array", []))

    def _generate_token(self):
        ts = str(int(time.time() * 1000))
        token = self.generate_md5_signature(self.SECRET_PREFIX + ts)
        return ts, token

    def calculate_total(self):
        total = 0
        for page in range(1, 21):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem6Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
