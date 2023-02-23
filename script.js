// INDEX PAGE
var nameValidate = document.getElementById("user_name");
var registerButton = document.getElementById("registerButton");
function nameCheck(){
    if(nameValidate.value.length<3)
    {
        registerButton.disabled = true;
    }
    else{
        registerButton.disabled = false;
    }
}
function sendName(){
    var name =nameValidate.value;
    sessionStorage.setItem("name",name);
}
document.getElementById("testName").innerHTML = sessionStorage.getItem("name");
var username;

// WELCOME PAGE
function valid_email(){
    var email=document.getElementById("email").value;
    var email_syntax=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if(email.match(email_syntax)){
        document.getElementsByClassName("email_error").innerHTML="";
        return true;
    }
    else {
        document.getElementsByClassName("email_error").innerHTML="** Valid email are allowed";
        return false;
    }
}
function validateAge(form) {
    console.log(form)
    let dob = document.getElementById('dob').value;
    var today = new Date();
    let birthdate = new Date(dob);
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    if (age <= 18) {
        alert("Age must be greater than 18");
        return false;
    }
}
function validate(form){
    return validateAge(form);
}

// QUESTIONNAIRE SCREEN
const questions = [
    {
        question: "1+1=?",
        answers: [
        { text: "2", correct: true },
        { text: "1", correct: false },
        { text: "11", correct: false },
        { text: "1.1", correct: false }
        ]
    },
    {
        question: "1=1?",
        answers: [
        { text: "Yes", correct: true },
        { text: "No", correct: false },
        { text: "May be", correct: false },
        { text: "Big Nooooooooo", correct: false }
        ]
    },
    {
        question: "2-1=?",
        answers: [
        { text: "1", correct: true },
        { text: "2", correct: false },
        { text: "0", correct: false },
        { text: "1.8", correct: false }
        ]
    },
    {
        question: "1-1=?",
        answers: [
    
        { text: "0", correct: true },
        { text: "1", correct: false },
        { text: "11", correct: false },
        { text: "2", correct: false }
        ]
    },
    {
        question: "2*1=?",
        answers: [
        { text: "2", correct: true },
        { text: "1", correct: false },
        { text: "21", correct: false },
        { text: "12", correct: false }
        ]
    },
    {
        question: "2*2=?",
        answers: [
        { text: "4", correct: true},
        { text: "22", correct: false },
        { text: "2", correct: false },
        { text: "12", correct: false }
        ]
    },
    {
        question: "2*3=?",
        answers: [
        { text: "6", correct: true },
        { text: "32", correct: false },
        { text: "2", correct: false },
        { text: "23", correct: false }
        ]
    },
    {
        question: "Hello=",
        answers: [
        { text: "Hii", correct: true },
        { text: "Bye", correct: false },
        { text: "See You", correct: false },
        { text: "None of the above", correct: false }
        ]
    },
    {
        question: "3+3=",
        answers: [
        { text: "6", correct: true },
        { text: "33", correct: false },
        { text: "9", correct: false },
        { text: "3", correct: false }
        ]
    },
    {
        question: "0+10=",
        answers: [
        { text: "10", correct: true },
        { text: "0", correct: false },
        { text: "1", correct: false },
        { text: "01", correct: false }
        ]
    },
    {
        question: "0*0=",
        answers: [
        { text: "0", correct: true },
        { text: "10", correct: false },
        { text: "1", correct: false },
        { text: "1.9", correct: false }
        ]
    },
    {
        question: "10,11,12...",
        answers: [
        { text: "13,14", correct: true },
        { text: "11,12", correct: false },
        { text: "10", correct: false },
        { text: "20", correct: false }
        ]
    },
    {
        question: "10*10=",
        answers: [
        { text: "100", correct: true },
        { text: "20", correct: false },
        { text: "0", correct: false },
        { text: "10", correct: false }
        ]
    },
    {
        question: "9-9=",
        answers: [
        { text: "0", correct: true },
        { text: "9", correct: false },
        { text: "1", correct: false },
        { text: "8", correct: false }
        ]
    },
    {
        question: "1,11,111...",
        answers: [
        { text: "1111", correct: true },
        { text: "1", correct: false },
        { text: "10", correct: false },
        { text: "101", correct: false }
        ]
    },
    {
        question: "A,B,C...",
        answers: [
        { text: "D", correct: true },
        { text: "N", correct: false },
        { text: "K", correct: false },
        { text: "C", correct: false }
        ]
    },
    {
        question: "past,present,.?",
        answers: [
        { text: "future", correct: true },
        { text: "past", correct: false },
        { text: "fortune", correct: false },
        { text: "Port", correct: false },
        ]
    },
    {
        question: "RGB=?",
        answers: [
        { text: "All of the below", correct: true },
        { text: "Green", correct: false },
        { text: "Blue", correct: false },
        { text: "Red", correct: false }
        ]
    },
    {
        question: "11+11=?",
        answers: [
        { text: "22", correct: true },
        { text: "2", correct: false },
        { text: "0", correct: false },
        { text: "11", correct: false }
        ]
    },
    {
        question: "0,00,000...",
        answers: [
        { text: "0000", correct: true },
        { text: "1000", correct: false },
        { text: "0101", correct: false },
        { text: "1111", correct: false }
        ]
    },
];

const timerDisplay = document.querySelector('.timer');
let timeLeft = 5 * 60;
setInterval(function() {
let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;
if (seconds < 10) {
    seconds = '0' + seconds;
}
if (minutes < 10) {
    minutes = '0' + minutes;
}
timerDisplay.textContent ='Time : ' + minutes + ':' + seconds;
timeLeft--;
if (timeLeft < 0) {
    alert('Time is up!');
}
}, 1000);

console.log(questions);
let numberOfPages = questions.length % 4 == 0? questions.length / 4 : Math.floor(questions.length / 4) + 1;
const next = document.getElementsByClassName("next")[0];
const previous = document.getElementsByClassName("previous")[0];
const submit = document.getElementsByClassName("submit")[0];
const quiz = document.querySelector('#quiz');
const score = document.querySelector('#score');
const headid = document.getElementById('head-id');
let state = {
page : 0,
}
showQuestion(state.page);
function showQuestion(page) {
    // Display questions
        const pageQuestions = questions.slice(page * 4, page* 4 + 4);
        let currentQuestion = page*4;
        const pageHTML = `
        <div class="question-container">
            ${pageQuestions.map((question,idx) =>{ 
                currentQuestion++;
            let html = `
            <div class="question ">
                ${currentQuestion} - ${question.question}
            </div>
            <div class="answers ques_container">
                ${question.answers.map((answer,idx) => `
                <div class="answer"> 
                    <input type="radio" ${idx==0?"checked":""} name="question${currentQuestion}" 
                        id="q${currentQuestion}a" value="${currentQuestion}" 
                        data-question="${currentQuestion-1}" data-answer="${idx}" >
                    <label for="q${currentQuestion}a">${answer.text}</label>
                </div>
                `).join('')}
            </div>
            `
            return html;
        }).join('')}
        </div>
        `;
        quiz.innerHTML = pageHTML;
        const questionContainers = document.querySelectorAll('.question-container');
        questionContainers[0].style.display = 'block';
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        for (const radioButton of radioButtons) {
            radioButton.addEventListener('click', function(e) {
                let answerIdx = e.target.dataset.answer;
                let questionIdx = e.target.dataset.question;
                questions[questionIdx].selectedAnswerId = answerIdx;
                console.log(questions);
            });
        }
        if (page ==  0) {
            previous.style.display = "none";
        } else {
            previous.style.display = "inline";
        }

        if (page == numberOfPages-1 ) {
            next.style.display = "none";
            submit.style.display = "inline";
        } else {
            submit.style.display = "none";
            next.style.display = "block";
            previous.style.display = "inline";
        }
}
    submit.style.display = "none";
    next.addEventListener("click", () => {
        if (state.page < questions.length/4) {
            state.page++;
            console.log(state.page);
            showQuestion(state.page);
        }
    });

    previous.addEventListener("click", () => {
        if (state.page > 0) {
            state.page--;
            showQuestion(state.page);
        }
    });

    submit.addEventListener('click',()=>{
        let scoreCount = 0;
        for (const question of questions) {
            if (question.answers[question.selectedAnswerId].correct) {
                scoreCount++;
            }
        }
        timer.style.display='none';
        quiz.style.display = 'none';
        previous.style.display = 'none';
        next.style.display = 'none';
        submit.style.display = 'none';
        score.style.display = 'block';
        score.innerHTML = `<h2>Your score is ${scoreCount} out of ${questions.length}</h2>`;
    });