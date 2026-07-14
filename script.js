// Scroll animation


const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("active");


}


});


});



document
.querySelectorAll(".reveal")
.forEach(
item=>observer.observe(item)
);







// GitHub Projects


fetch(
"https://api.github.com/users/FarbodDaneshjoo/repos"
)


.then(res=>res.json())


.then(repos=>{


let box=document.getElementById("projects");


box.innerHTML="";


repos
.slice(0,6)
.forEach(repo=>{


box.innerHTML +=`


<div class="repo">


<h3>

${repo.name}

</h3>


<p>

${repo.description || "No description"}

</p>


<a href="${repo.html_url}">

View Project

</a>


</div>


`;


});


});
