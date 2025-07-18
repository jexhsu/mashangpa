import subprocess, json

import json

from problems.base_client import BaseProblemClient


# https://deobfuscate.relative.im
class Problem8Client(BaseProblemClient):
    def __init__(self):
        super().__init__(8)

    def get_page_sum(self, page):
        result = subprocess.check_output(
            [
                "node",
                "problems/problem_8/generate_params.js",
                str(page),
            ],
            text=True,
        )
        params = json.loads(result)
        headers = {"t": str(params["t"]), "m": str(params["m"])}
        self.session.cookies.set("s", str(params["s"]))
        response = self.session.post(
            f"{self.BASE_URL}/{self.problem_id}/data/",
            headers=headers,
            json={"page": page},
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
    client = Problem8Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
