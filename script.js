const welcome =
"Welcome, I'm Farbod Daneshjoo";


let i = 0;


function typeWelcome(){


if(i < welcome.length){


document.getElementById("welcome").innerHTML += welcome[i];

i++;


setTimeout(typeWelcome,70);


}


}



typeWelcome();





const text =
"Software Developer | Open Source Contributor";


let j = 0;



function typing(){


if(j < text.length){


document.getElementById("typing").innerHTML += text[j];


j++;


setTimeout(typing,60);


}


}



typing();console.log(
"Welcome to Farbod Daneshjoo Portfolio 🚀"
);
