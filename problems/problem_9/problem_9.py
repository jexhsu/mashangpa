import subprocess, json

from problems.base_client import BaseProblemClient


# https://deobfuscate.relative.im
class Problem9Client(BaseProblemClient):
    def __init__(self):
        super().__init__(9)

    def get_page_sum(self, page):
        result = subprocess.check_output(
            [
                "node",
                "problems/problem_9/generate_params.js",
            ],
            text=True,
        )
        params = json.loads(result)
        playload = {"page": page, "tt": str(params["tt"]), "m": str(params["m"])}
        response = self.session.post(
            f"{self.BASE_URL}/{self.problem_id}/data/",
            json=playload,
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
    client = Problem9Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
