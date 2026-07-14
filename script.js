// ===============================
// Scroll Animation
// ===============================


const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{
threshold:0.15
}

);



document
.querySelectorAll(".reveal")
.forEach(item=>{

observer.observe(item);

});







// ===============================
// Terminal Animation
// ===============================


const messages=[

"Building Python projects...",

"Exploring Artificial Intelligence...",

"Contributing to Open Source...",

"Improving software engineering skills..."

];


let messageIndex=0;


const terminalStatus =
document.querySelector(
".terminal p:last-child"
);



setInterval(()=>{


if(terminalStatus){

terminalStatus.textContent =
messages[messageIndex];

messageIndex++;


if(messageIndex >= messages.length){

messageIndex=0;

}

}


},2500);








// ===============================
// GitHub Projects
// ===============================


fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)


.then(res=>res.json())


.then(repos=>{


const box =
document.getElementById("projects");


box.innerHTML="";



repos

.filter(repo=>!repo.fork)


.sort(

(a,b)=>

(b.stargazers_count+b.forks_count)

-

(a.stargazers_count+a.forks_count)

)


.slice(0,6)


.forEach(repo=>{


box.innerHTML += `


<div class="repo">


<h3>${repo.name}</h3>


<p>

${repo.description || 
"Open source project"}

</p>


<div class="repo-meta">


<span class="badge">

💻 ${repo.language || "Code"}

</span>


<span class="badge">

⭐ ${repo.stargazers_count}

</span>


<span class="badge">

🍴 ${repo.forks_count}

</span>


</div>



<br>


<a href="${repo.html_url}" target="_blank">

View Repository →

</a>


</div>


`;



});


})


.catch(()=>{


document.getElementById("projects")
.innerHTML=
"Projects unavailable";

});









// ===============================
// GitHub Stats
// ===============================


fetch(
"data/github-stats.json"
)


.then(res=>res.json())


.then(data=>{


commits.textContent =
data.commits || 0;


prs.textContent =
data.pullRequests || 0;


issues.textContent =
data.issues || 0;


reviews.textContent =
data.reviews || 0;


});








// ===============================
// AI Summary
// ===============================


fetch(
"data/ai-summary.json"
)


.then(res=>res.json())


.then(data=>{


document
.getElementById("ai-summary")
.textContent =
data.summary;


})


.catch(()=>{


document
.getElementById("ai-summary")
.textContent =
"Software developer focused on Python, AI and Open Source development.";

});








// ===============================
// Footer Year
// ===============================


document.querySelector("footer p")
.textContent =
`© ${new Date().getFullYear()} Farbod Daneshjoo`;
