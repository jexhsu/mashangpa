from datetime import datetime
import json
from problems.base_client import BaseProblemClient


class Problem19Client(BaseProblemClient):
    iv = datetime.now().strftime("%Y%m%d")

    def __init__(self):
        super().__init__(19)

    def get_page_sum(self, page):
        data = self.make_request(page=page)
        decrypted = self.des3_decrypt(data["r"], data["k"], self.iv)
        return sum(json.loads(decrypted).get("current_array", []))

    def calculate_total(self):
        total = 0
        for page in range(1, 21):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem19Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
