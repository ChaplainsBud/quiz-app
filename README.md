# quiz-app

Outline:

0. UI for viewing questions:

a. START card
b. DISPLAY card

1. UI for answering questions: radio, name, value
2. Business Logic: fetch() questions

https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean

a. const qList = fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean");
b. qList object traversal: first key to 10th key

3. Business Logic: validate correct answers

a. let answer = document.querySelector('INPUT').value

b.

let num = 0;
answer.results[num]
num++

c. compare answer with object["correct_answer"]

4. Score Variable State

if(INPUT == "correct_answer") -> increment score
else -> do not increment score

BUG:

0. The API repeats itself.

a. Copy the entire set of 10 questions into a variable

b. Create an array that holds every finished question;

then array.includes(current_question)
