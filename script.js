const items=[

["name",
"Welcome, I'm Farbod Daneshjoo"],

["role",
"Software Developer | Open Source Contributor"],

["description",
"Building projects with Python, C++, ROS2 and AI"]

];



async function writeText(id,text){


let element=document.getElementById(id);


for(let char of text){


element.innerHTML += char;


await new Promise(
r=>setTimeout(r,40)
);


}


}



async function start(){


for(let item of items){


await writeText(
item[0],
item[1]
);


await new Promise(
r=>setTimeout(r,500)
);


}


}


start();







// گرفتن پروژه های Github


fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)


.then(response=>response.json())


.then(repos=>{


let box=
document.getElementById("projects");


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


⭐ ${repo.stars}


<br>


<a href="${repo.html_url}" target="_blank">

Open

</a>


</div>

`;


});


})

.catch(()=>{

document.getElementById("projects")
.innerHTML=
"Could not load GitHub projects";


});









// Scroll animation


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


}
);



document
.querySelectorAll(".animate")
.forEach(
el=>observer.observe(el)
);
