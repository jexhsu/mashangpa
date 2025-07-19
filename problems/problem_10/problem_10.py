import subprocess, json

from problems.base_client import BaseProblemClient


# https://deobfuscate.relative.im
class Problem10Client(BaseProblemClient):
    def __init__(self):
        super().__init__(10)

    def get_page_sum(self, page):
        url = f"/api/problem-detail/10/data/?page={page}"
        result = subprocess.check_output(
            [
                "node",
                "problems/problem_10/generate_params.js",
                url,
            ],
            text=True,
        )
        params = json.loads(result)
        extra_params = {"page": page, "t": str(params["t"])}
        data = self.make_request(extra_params=extra_params)
        return sum(data.get("current_array", []))

    def calculate_total(self):
        total = 0
        for page in range(1, 21):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem10Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
