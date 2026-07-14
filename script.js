// ===============================
// Scroll Reveal Animation
// ===============================


const observer = new IntersectionObserver(

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
.forEach(element=>{

observer.observe(element);

});







// ===============================
// Terminal Typing Effect
// ===============================


const terminalLines = [

"Building software projects...",

"Exploring Artificial Intelligence...",

"Contributing to Open Source...",

"Learning something new every day..."

];


let terminalIndex = 0;



const statusText = document.querySelector(
".terminal p:last-child"
);



function updateTerminal(){


if(!statusText)
return;



statusText.textContent =
terminalLines[terminalIndex];



terminalIndex++;


if(terminalIndex >= terminalLines.length){

terminalIndex = 0;

}



}



setInterval(updateTerminal,2500);








// ===============================
// GitHub Projects
// ===============================



fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)


.then(response=>response.json())


.then(repos=>{


const box =
document.getElementById("projects");



box.innerHTML="";



repos

.filter(repo=>!repo.fork)


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

${repo.description || "Open source project"}

</p>



<p>

💻 ${repo.language || "Code"}

</p>



<p>

⭐ ${repo.stars || repo.stargazers_count}

&nbsp;

🍴 ${repo.forks_count}

</p>




<a

href="${repo.html_url}"

target="_blank">

View Repository →

</a>



</div>


`;



});


})


.catch(()=>{


document.getElementById("projects")
.innerHTML =
"Unable to load projects.";


});









// ===============================
// GitHub Statistics
// ===============================



fetch(
"data/github-stats.json"
)


.then(response=>response.json())


.then(data=>{


document
.getElementById("commits")
.textContent =
data.commits ?? 0;



document
.getElementById("prs")
.textContent =
data.pullRequests ?? 0;



document
.getElementById("issues")
.textContent =
data.issues ?? 0;



document
.getElementById("reviews")
.textContent =
data.reviews ?? 0;



})


.catch(()=>{


console.log(
"GitHub stats unavailable"
);


});









// ===============================
// GitHub AI Summary
// ===============================



fetch(
"data/ai-summary.json"
)


.then(response=>response.json())


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

"Farbod Daneshjoo is a software developer focused on Python, AI, ROS2 and Open Source development.";


});









// ===============================
// Current Year
// ===============================



const year =
new Date().getFullYear();



const footer =
document.querySelector("footer p");



if(footer){

footer.textContent =
`© ${year} Farbod Daneshjoo`;

}
