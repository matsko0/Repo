let title = document.getElementById("myTitle");
title.innerText = "Very, very good page!";

let allParagraphs = document.querySelectorAll("p");
for (let i = 0; i < allParagraphs.length; i++){
    allParagraphs[i].innerText = `Updated all text paragraphs with iterator for all paragraphs ${i + 1}`;
}

let secondDiv = document.querySelector('.anotherDiv');
let textChange = secondDiv.querySelector('text');

textChange.textContent = "something selected and changed"

let lastDiv = document.querySelector('body > div:last-of-type');
let lastDiv1 = lastDiv.querySelector('h1');
let lastDiv2 =lastDiv.querySelector('h3');

lastDiv1.textContent = "This is changed"
lastDiv2.textContent = "And also this is changed :D"


