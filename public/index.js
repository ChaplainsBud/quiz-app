
// 0. push start
// 1. display first question 
// 2. push 'answer' -> next question
let num = 0;

const btn = document.querySelector('BUTTON');
btn.addEventListener('click', (e) => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean")
                .then(data => data.json())
                .then(data => console.log(data.results[num].question));
                num++;
                console.log(num);
                document.querySelector('BUTTON:nth-of-type(1)').style.display = "none";
                document.querySelector('SECTION').style.visibility = "visible";
});




// let answer = document.querySelector('INPUT').value