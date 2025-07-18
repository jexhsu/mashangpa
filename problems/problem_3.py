from base_client import BaseProblemClient


class Problem3Client(BaseProblemClient):
    def __init__(self):
        super().__init__(3)

    def get_page_sum(self, page):
        data = self.make_request(page=page)
        return sum(data.get("current_array", []))

    def calculate_total(self, pages=20):
        total = 0
        for page in range(1, pages + 1):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem3Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
