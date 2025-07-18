import time
from base_client import BaseProblemClient


class Problem4Client(BaseProblemClient):
    def __init__(self):
        super().__init__(4)

    def get_page_sum(self, page):
        ts = int(time.time() * 1000)
        raw = f"tuling{ts}{page}"
        sign = self.generate_md5_signature(raw)

        data = self.make_request(page=page, extra_params={"sign": sign, "_ts": ts})
        return sum(data.get("current_array", []))

    def calculate_total(self):
        total = 0
        for page in range(1, 21):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem4Client()
    total = client.calculate_total()
    print("==== TOTAL SUM ====")
    print(total)
