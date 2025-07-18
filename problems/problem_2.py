from base_client import BaseProblemClient


class Problem2Client(BaseProblemClient):
    def __init__(self):
        super().__init__(2)

    def get_page_sum(self, page):
        data = self.make_request(page=page)
        return sum(data.get("current_array", []))

    def calculate_total(self):
        total = 0
        for page in range(1, 21):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem2Client()
    total = client.calculate_total()
    print("======================")
    print("TOTAL SUM =", total)
