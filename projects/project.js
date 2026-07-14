fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)

.then(res=>res.json())

.then(repos=>{

const box=document.getElementById("projects");

box.innerHTML="";

repos

.filter(repo=>!repo.fork)

.sort(
(a,b)=>
(b.stargazers_count+b.forks_count)
-
(a.stargazers_count+a.forks_count)
)

.forEach(repo=>{

box.innerHTML+=`

<div class="repo">

<h2>

${repo.name}

</h2>

<p>

${repo.description||"No description"}

</p>

<div class="badges">

<span>

${repo.language||"Unknown"}

</span>

<span>

⭐ ${repo.stargazers_count}

</span>

<span>

🍴 ${repo.forks_count}

</span>

</div>

<br>

<a

class="button"

href="${repo.html_url}"

target="_blank">

GitHub →

</a>

</div>

`;

});

});
