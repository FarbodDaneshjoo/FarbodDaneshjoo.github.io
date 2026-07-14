import json
import os


stats_file = "data/github-stats.json"


with open(
    stats_file,
    "r",
    encoding="utf-8"
) as file:

    stats = json.load(file)



summary = f"""
Farbod Daneshjoo is a software developer focused on
Python, Artificial Intelligence, ROS2 and Open Source.


He has contributed to software projects with
{stats['commits']} commits, 
{stats['pullRequests']} pull requests,
{stats['issues']} issues and
{stats['reviews']} code reviews.


His work includes building projects, exploring
modern development tools and improving software
engineering skills through practical experience.
"""



with open(
    "data/ai-summary.json",
    "w",
    encoding="utf-8"
) as file:


    json.dump(

        {
            "summary": summary.strip()
        },

        file,

        indent=2,

        ensure_ascii=False

    )


print("Free AI-style summary updated!")
