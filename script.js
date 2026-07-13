const texts=[

[
"name",
"Welcome, I'm Farbod Daneshjoo"
],

[
"title",
"Software Developer | Open Source Contributor"
],

[
"desc",
"Building projects with Python, C++, ROS2 and AI."

]

];



function typeText(id,text,index=0){


if(index < text.length){


document.getElementById(id)
.innerHTML += text[index];


setTimeout(()=>{

typeText(id,text,index+1)

},50);


}


}




async function start(){


for(let t of texts){


await new Promise(resolve=>{


typeText(t[0],t[1]);


setTimeout(resolve,t[1].length*50+500);


});


}


}



start();







// گرفتن پروژه های GitHub


fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)


.then(r=>r.json())


.then(repos=>{


let box=document.getElementById("projects");


box.innerHTML="";



repos
.sort((a,b)=>
b.stargazers_count-a.stargazers_count
)


.slice(0,9)

.forEach(repo=>{


box.innerHTML += `


<div class="repo">


<h3>

${repo.name}

</h3>


<p>

${repo.description || "No description"}

</p>


⭐ ${repo.stargazers_count}


<br><br>


<a href="${repo.html_url}">

Open Repository

</a>


</div>


`;


});


});








// animation scroll


const observer=
new IntersectionObserver(entries=>{


entries.forEach(e=>{


if(e.isIntersecting){

e.target.classList.add("show");

}


});


});



document.querySelectorAll(".hidden")
.forEach(x=>observer.observe(x));
