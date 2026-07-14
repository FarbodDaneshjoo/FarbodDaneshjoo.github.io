// =================================
// Advanced Loader
// =================================

window.addEventListener(
"load",
()=>{


const loader =
document.getElementById("loader");


const text =
document.querySelector(".loader-text");


if(loader && text){


const messages=[

"Initializing Farbod.dev",

"Loading projects",

"Connecting GitHub",

"Preparing AI systems",

"Welcome Farbod.dev"

];


let index=0;



const interval=setInterval(()=>{


text.textContent =
messages[index];


index++;



if(index===messages.length){


clearInterval(interval);



setTimeout(()=>{


loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},800);


},800);


}


},700);


}


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

threshold:.15

}

);



document
.querySelectorAll(".reveal")
.forEach(item=>{


observer.observe(item);


});









// =================================
// Dark Mode
// =================================


const themeButton =
document.getElementById("theme-toggle");



if(themeButton){


themeButton.onclick=()=>{


document.body.classList.toggle("dark");



themeButton.textContent =

document.body.classList.contains("dark")

?

"☀️"

:

"🌙";


};


}









// =================================
// GitHub Projects
// =================================


fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)


.then(res=>res.json())


.then(repos=>{


const box =
document.getElementById("projects");


if(!box)
return;



box.innerHTML="";



repos


.filter(repo=>!repo.fork)


.sort(
(a,b)=>

(
b.stargazers_count+
b.forks_count

)

-

(
a.stargazers_count+
a.forks_count

)

)


.slice(0,6)


.forEach(repo=>{


box.innerHTML+=`

<div class="repo">


<h3>

${repo.name}

</h3>


<p>

${repo.description || "Open Source Project"}

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

class="button"

href="${repo.html_url}"

target="_blank">

View Repository →

</a>


</div>

`;

});


});









// =================================
// GitHub Stats
// =================================


fetch(
"data/github-stats.json"
)


.then(res=>res.json())


.then(data=>{


if(document.getElementById("commits"))

document.getElementById("commits").textContent =
data.commits || 0;



if(document.getElementById("prs"))

document.getElementById("prs").textContent =
data.pullRequests || 0;



if(document.getElementById("issues"))

document.getElementById("issues").textContent =
data.issues || 0;



if(document.getElementById("reviews"))

document.getElementById("reviews").textContent =
data.reviews || 0;


});









// =================================
// AI Summary
// =================================


fetch(
"data/ai-summary.json"
)


.then(res=>res.json())


.then(data=>{


const summary =
document.getElementById("ai-summary");



if(summary)

summary.textContent=data.summary;


});









// =================================
// Learning Section
// =================================


fetch(
"data/learning.json"
)


.then(res=>res.json())


.then(data=>{


const learning =
document.getElementById("learning");



if(!learning)
return;



learning.innerHTML="";



data.learning.forEach(item=>{


learning.innerHTML+=`

<div class="card">


<h3>

${item.title}

</h3>


<p>

${item.description}

</p>


</div>

`;


});


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


aiButton.onclick=()=>{


if(!aiInput.value){


aiAnswer.textContent=
"Ask something first.";


return;


}



aiAnswer.textContent=

"Farbod AI: I build Python projects, explore AI and contribute to Open Source.";


};


}









// =================================
// Visitor Counter
// =================================


const visitor =
document.getElementById(
"visitor-count"
);



if(visitor){


fetch(
"https://api.countapi.xyz/hit/farboddaneshjoo.github.io/visits"
)


.then(res=>res.json())


.then(data=>{


visitor.textContent =
data.value;


})


.catch(()=>{


visitor.textContent =
"";


});


}









// =================================
// Easter Egg
// =================================


let clicks=0;


const logo =
document.querySelector("nav h3");



if(logo){


logo.onclick=()=>{


clicks++;


if(clicks===5){


alert(
"🚀 Secret mode activated"
);


clicks=0;


}


};


}









// =================================
// Footer Year
// =================================


const footer =
document.querySelector("footer p");



if(footer){


footer.textContent =
`© ${new Date().getFullYear()} Farbod Daneshjoo`;


}
