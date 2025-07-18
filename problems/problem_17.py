from base_client import BaseProblemClient


class Problem17Client(BaseProblemClient):
    DECODE_MAP = {
        "ꙮ": "0",
        "ઊ": "1",
        "સ": "2",
        "ત": "3",
        "ধ": "4",
        "ન": "5",
        "પ": "6",
        "ફ": "7",
        "બ": "8",
        "ભ": "9",
    }

    def __init__(self):
        super().__init__(17)

    def get_page_sum(self, page):
        data = self.make_request(page=page)
        total = 0
        for enc in data["current_array"]:
            decoded_num = "".join(self.DECODE_MAP.get(ch, "") for ch in enc)
            if decoded_num:
                total += int(decoded_num)
        return total

    def calculate_total(self):
        total = 0
        for page in range(1, 21):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem17Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
