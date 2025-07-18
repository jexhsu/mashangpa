import subprocess, json

import json

from problems.base_client import BaseProblemClient


# https://deobfuscate.relative.im
class Problem7Client(BaseProblemClient):
    KEY = b"xxxxxxxxoooooooo"
    IV = b"0123456789ABCDEF"

    def __init__(self):
        super().__init__(7)

    def get_page_sum(self, page):
        result = subprocess.check_output(
            ["node", "problems/problem_7/generate_params.js"]
        )
        params = json.loads(result)
        data = self.make_request(
            page=page,
            extra_headers={"ts": str(params["ts"]), "m": str(params["m"])},
            extra_params={"x": params["x"]},
        )
        decrypted = self.aes_decrypt(data["r"], self.KEY, self.IV)
        return sum(json.loads(decrypted).get("current_array", []))

    def calculate_total(self):
        total = 0
        for page in range(1, 21):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem7Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
