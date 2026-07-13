fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)


.then(response=>response.json())


.then(repos=>{


const box=document.getElementById("projects");


box.innerHTML="";


repos
.sort(
(a,b)=>b.stargazers_count-a.stargazers_count
)


.slice(0,6)


.forEach(repo=>{


box.innerHTML += `


<div class="repo">


<h3>

${repo.name}

</h3>


<p>

${repo.description || "No description"}

</p>


<a href="${repo.html_url}" target="_blank">

View Project

</a>


</div>


`;


});


})

.catch(()=>{


document.getElementById("projects").innerHTML =
"Could not load projects";


});
