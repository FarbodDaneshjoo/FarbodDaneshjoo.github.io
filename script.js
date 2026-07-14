// =================================
// Loader
// =================================


window.addEventListener("load",()=>{

const loader =
document.getElementById("loader");


setTimeout(()=>{

loader.style.opacity="0";


setTimeout(()=>{

loader.style.display="none";

},500);


},1200);


});







// =================================
// Scroll Reveal
// =================================


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
.forEach(section=>{

observer.observe(section);

});








// =================================
// Dark Mode
// =================================


const themeButton =
document.getElementById("theme-toggle");



themeButton.addEventListener(
"click",
()=>{


document.body.classList.toggle("dark");



if(
document.body.classList.contains("dark")
){

themeButton.textContent="☀️";

}

else{

themeButton.textContent="🌙";

}


});








// =================================
// GitHub Projects
// =================================



fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)


.then(response=>response.json())


.then(repos=>{


const container =
document.getElementById("projects");


container.innerHTML="";



repos

.filter(repo=>!repo.fork)


.sort(

(a,b)=>

(
b.stargazers_count +
b.forks_count

)

-

(
a.stargazers_count +
a.forks_count

)

)


.slice(0,6)


.forEach(repo=>{


container.innerHTML += `


<div class="repo">


<h3>

${repo.name}

</h3>



<p>

${repo.description || 
"Open Source Project"}

</p>




<div class="badges">


<span>

💻 ${repo.language || "Code"}

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
href="${repo.html_url}"
target="_blank"
class="button">

View Project

</a>



</div>


`;


});


})


.catch(()=>{


document.getElementById("projects")
.innerHTML=
"Unable to load projects";


});









// =================================
// GitHub Statistics
// =================================



fetch(
"data/github-stats.json"
)


.then(response=>response.json())


.then(data=>{


document.getElementById("commits")
.textContent =
data.commits || 0;



document.getElementById("prs")
.textContent =
data.pullRequests || 0;



document.getElementById("issues")
.textContent =
data.issues || 0;



document.getElementById("reviews")
.textContent =
data.reviews || 0;


})

.catch(()=>{

console.log(
"Statistics unavailable"
);

});









// =================================
// AI Summary
// =================================



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

"Farbod Daneshjoo is a software developer focused on Python, Artificial Intelligence and Open Source development.";


});









// =================================
// Ask Farbod AI
// =================================



const aiButton =
document.getElementById("ai-button");



const aiInput =
document.getElementById("ai-input");



const aiAnswer =
document.getElementById("ai-answer");



if(aiButton){


aiButton.addEventListener(
"click",
()=>{


const question =
aiInput.value.trim();



if(!question){

aiAnswer.textContent=
"Ask something first.";

return;

}




// نسخه اولیه بدون API

aiAnswer.textContent=

"Farbod AI: I'm currently building projects with Python, AI and Open Source. This assistant will become smarter soon.";



});


}









// =================================
// Currently Learning
// =================================



const learning =
document.getElementById("learning");



if(learning){


learning.innerHTML=`

<div class="card">

<p>

→ Advanced Python

</p>


<p>

→ AI Development

</p>


<p>

→ Open Source Collaboration

</p>


<p>

→ Developer Automation

</p>


</div>

`;

}









// =================================
// Easter Egg
// =================================



let clicks=0;



document
.querySelector("nav h3")
.addEventListener(
"click",
()=>{


clicks++;



if(clicks===5){


alert(
"🚀 Secret mode activated. Welcome to Farbod.dev"
);



clicks=0;


}



});









// =================================
// Footer Year
// =================================


const footer =
document.querySelector("footer p");



if(footer){


footer.textContent =
`© ${new Date().getFullYear()} Farbod Daneshjoo`;

}
