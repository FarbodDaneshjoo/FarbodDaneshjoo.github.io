// ==========================
// Scroll Animation
// ==========================


const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("active");

}


});


}
);



document
.querySelectorAll(".reveal")
.forEach(
item=>observer.observe(item)
);






// ==========================
// GitHub Projects
// ==========================


fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)


.then(response=>response.json())


.then(repos=>{


const box=document.getElementById("projects");


box.innerHTML="";



repos

.sort(
(a,b)=>
b.stargazers_count -
a.stargazers_count
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



<p>

⭐ ${repo.stargazers_count}

</p>



<a href="${repo.html_url}"
target="_blank">

View Project

</a>


</div>


`;



});


})

.catch(()=>{


document.getElementById("projects")
.innerHTML="Could not load projects";


});










// ==========================
// GitHub Statistics
// ==========================


fetch(
"data/github-stats.json"
)


.then(response=>response.json())


.then(data=>{


document.getElementById("commits")
.innerHTML=data.commits;



document.getElementById("prs")
.innerHTML=data.pullRequests;



document.getElementById("issues")
.innerHTML=data.issues;



document.getElementById("reviews")
.innerHTML=data.reviews;


})

.catch(()=>{


console.log(
"Stats file not found"
);


});









// ==========================
// AI Summary
// ==========================


fetch(
"data/ai-summary.json"
)


.then(response=>response.json())


.then(data=>{


document.getElementById(
"ai-summary"
)
.innerHTML=data.summary;


})

.catch(()=>{


document.getElementById(
"ai-summary"
)
.innerHTML=
"AI summary is not available yet.";


});
