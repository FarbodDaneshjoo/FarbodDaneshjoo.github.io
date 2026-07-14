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
.forEach(item=>{

observer.observe(item);

});







// =================================
// Dark Mode
// =================================


const themeButton =
document.getElementById("theme-toggle");


if(themeButton){


themeButton.addEventListener(
"click",
()=>{


document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){

themeButton.textContent="☀️";

}

else{

themeButton.textContent="🌙";

}


});


}









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


container.innerHTML += `


<div class="repo">


<h3>

${repo.name}

</h3>



<p>

${repo.description || "Open Source Project"}

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


<a

href="${repo.html_url}"

target="_blank"

class="button">

View Repository →

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


document.getElementById("commits").textContent =
data.commits || 0;


document.getElementById("prs").textContent =
data.pullRequests || 0;


document.getElementById("issues").textContent =
data.issues || 0;


document.getElementById("reviews").textContent =
data.reviews || 0;


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
.textContent=data.summary;


})

.catch(()=>{


document
.getElementById("ai-summary")
.textContent=
"Software developer focused on Python, AI and Open Source.";


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


let question =
aiInput.value.trim();



if(!question){

aiAnswer.textContent=
"Please enter a question.";

return;

}



aiAnswer.textContent=

"Farbod AI: I build Python projects, explore AI technologies and contribute to Open Source.";

});


}









// =================================
// Currently Learning JSON
// =================================


fetch(
"data/learning.json"
)


.then(response=>response.json())


.then(data=>{


const learning =
document.getElementById("learning");



if(!learning)
return;



learning.innerHTML="";



data.learning.forEach(item=>{


learning.innerHTML += `


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
// Easter Egg
// =================================


let clicks=0;


const logo =
document.querySelector("nav h3");


if(logo){


logo.addEventListener(
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


}









// =================================
// Footer
// =================================


const footer =
document.querySelector("footer p");


if(footer){


footer.textContent =
`© ${new Date().getFullYear()} Farbod Daneshjoo`;

}
