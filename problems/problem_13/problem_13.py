import subprocess, json

from problems.base_client import BaseProblemClient


class Problem13Client(BaseProblemClient):
    def __init__(self):
        super().__init__(13)

    def get_page_sum(self, page):
        result = subprocess.check_output(
            ["node", "problems/problem_13/generate_params.js", str(page)],
            text=True,
        )
        params = json.loads(result)
        extra_headers = {
            "t": str(params["t"]),
            "r": str(params["r"]),
            "s": str(params["s"]),
        }
        data = self.make_request(
            method="POST",
            page=page,
            extra_headers=extra_headers,
        )
        print(data)
        breakpoint()
        return sum(data.get("current_array", []))

    def calculate_total(self):
        total = 0
        for page in range(1, 21):
            page_sum = self.get_page_sum(page)
            print(f"Page {page} sum = {page_sum}")
            total += page_sum
        return total


if __name__ == "__main__":
    client = Problem13Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
