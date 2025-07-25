import subprocess, json

from problems.base_client import BaseProblemClient


class Problem16Client(BaseProblemClient):
    def __init__(self):
        super().__init__(16)

    def get_page_sum(self, page):
        url = f"{self.BASE_URL}/{self.problem_id}/data/"
        result = subprocess.check_output(
            [
                "node",
                "problems/problem_16/generate_params.js", 
                str(page)
            ],
            text=True,
        )
        params = json.loads(result)
        extra_params = {
            "t": str(params["t"]),
            "h5": str(params["h5st"]),
            "page": str(page),
        }
        response = self.session.request("POST", url, json=extra_params)
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
    client = Problem16Client()
    total = client.calculate_total()
    print("\n=== FINAL RESULT ===")
    print(f"Total sum = {total}")
