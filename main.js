var randomNumber1 = Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

document.getElementsByClassName("img1")[0].src = "./images/dice"+randomNumber1+".png";