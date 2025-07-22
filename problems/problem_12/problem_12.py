import subprocess, json

from problems.base_client import BaseProblemClient


# https://deobfuscate.relative.im
class Problem12Client(BaseProblemClient):
    def __init__(self):
        super().__init__(12)

    def get_page_sum(self, page):
        result = subprocess.check_output(
            ["node", "problems/problem_12/generate_params.js", str(page)],
            text=True,
        )
        params = json.loads(result)
        data = self.make_request(
            page=page,
            extra_params={"m": str(params["m"]), "t": str(params["t"])},
        )
        return sum(data.get("current_array", []))

    def calculate_total(self):
        total = 0
        for page in range(1, 21):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem12Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
