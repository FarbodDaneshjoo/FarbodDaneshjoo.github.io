import os
import json
import requests


USERNAME = "FarbodDaneshjoo"


TOKEN = os.environ["GITHUB_TOKEN"]


query = """
query($login:String!) {

  user(login:$login) {

    contributionsCollection {

      totalCommitContributions

      totalPullRequestContributions

      totalIssueContributions

      totalPullRequestReviewContributions

    }

  }

}
"""


response = requests.post(

    "https://api.github.com/graphql",

    headers={

        "Authorization": f"Bearer {TOKEN}"

    },

    json={

        "query": query,

        "variables": {

            "login": USERNAME

        }

    }

)



data = response.json()



stats = data["data"]["user"]["contributionsCollection"]



result = {


    "commits":
    stats["totalCommitContributions"],


    "pullRequests":
    stats["totalPullRequestContributions"],


    "issues":
    stats["totalIssueContributions"],


    "reviews":
    stats["totalPullRequestReviewContributions"]


}



with open(

    "data/github-stats.json",

    "w",

    encoding="utf-8"

) as file:


    json.dump(

        result,

        file,

        indent=2

    )



print("GitHub statistics updated")
