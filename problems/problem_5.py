import time
from base_client import BaseProblemClient


class Problem5Client(BaseProblemClient):
    KEY = b"jo8j9wGw%6HbxfFn"
    IV = b"0123456789ABCDEF"

    def __init__(self):
        super().__init__(5)

    def get_page_sum(self, page):
        ts = int(time.time() * 1000)
        payload = {"page": page, "_ts": ts}
        xl = self.aes_encrypt(payload, self.KEY, self.IV)

        response = self.session.post(
            f"{self.BASE_URL}/{self.problem_id}/data/", json={"xl": xl}
        )
        data = response.json()
        return sum(data.get("current_array", []))

    def calculate_total(self):
        total = 0
        for page in range(1, 21):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem5Client()
    total = client.calculate_total()
    print("==== TOTAL SUM ====")
    print(total)
