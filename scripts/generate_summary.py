import os
import json
import requests


USERNAME = "FarbodDaneshjoo"


GITHUB_TOKEN = os.environ["GITHUB_TOKEN"]

OPENAI_KEY = os.environ["OPENAI_API_KEY"]



headers = {

    "Authorization": f"Bearer {GITHUB_TOKEN}"

}



# گرفتن Repository ها

repos = requests.get(
    f"https://api.github.com/users/{USERNAME}/repos",
    headers=headers
).json()



projects = []


languages = set()



for repo in repos:

    projects.append(
        {
            "name": repo["name"],
            "description": repo["description"],
            "stars": repo["stargazers_count"]
        }
    )


    if repo["language"]:
        languages.add(repo["language"])





github_data = {

    "username": USERNAME,

    "repositories": len(repos),

    "languages": list(languages),

    "projects": projects[:10]

}





# درخواست به OpenAI


prompt = f"""

Create a professional developer portfolio summary.

Developer:
{USERNAME}


GitHub information:

{json.dumps(github_data, indent=2)}


Write a short 3 sentence summary.

Mention:
- programming interests
- open source activity
- technologies


Do not use first person.

"""



response = requests.post(

"https://api.openai.com/v1/chat/completions",

headers={

"Authorization":
f"Bearer {OPENAI_KEY}",

"Content-Type":
"application/json"

},


json={

"model":"gpt-4.1-mini",

"messages":[

{

"role":"user",

"content":prompt

}

]

}

)




result = response.json()


print("OpenAI Response:")
print(json.dumps(result, indent=2))


if "error" in result:
    raise Exception(
        result["error"]["message"]
    )


summary = result["choices"][0]["message"]["content"]





# ذخیره نتیجه


with open(
"data/ai-summary.json",
"w",
encoding="utf-8"
) as file:


    json.dump(

        {
            "summary":summary
        },

        file,

        ensure_ascii=False,

        indent=2

    )


print("Summary updated!")
