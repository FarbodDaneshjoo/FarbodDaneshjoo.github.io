
// typing welcome


let text="Welcome, I'm Farbod Daneshjoo";

let i=0;


function welcome(){


if(i<text.length){

document.getElementById("welcome")
.innerHTML += text[i];


i++;


setTimeout(welcome,80);


}

}


welcome();





// title typing


let title=
"Software Developer | Open Source Contributor";


let j=0;



function typeTitle(){


if(j<title.length){


document.querySelector("#typing")
.innerHTML += title[j];


j++;


setTimeout(typeTitle,60);


}


}



typeTitle();







// GitHub projects


fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)


.then(res=>res.json())


.then(data=>{


let box=document.getElementById("projects");


box.innerHTML="";



data.slice(0,6)
.forEach(repo=>{


box.innerHTML += `

<div class="repo">

<h3>

${repo.name}

</h3>


<p>

${repo.description || "No description"}

</p>


<a href="${repo.html_url}"
target="_blank">

View Project

</a>


</div>

`;



});



});








// Scroll animation


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


});



document.querySelectorAll(".hidden")
.forEach(el=>observer.observe(el));
