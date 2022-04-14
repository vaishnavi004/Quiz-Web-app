const quizData=[
    {
        question: 'What is the full form of SQL?',
        a: 'standard query language',
        b: 'structured query language',
        c:'Stay query Language',
        d: 'Silent Query Language',
        correct:'b' 
    },{
        question: 'what is the most used programming language in 2019 ?',
        a: 'java',
        b: 'python' ,
        c: 'C++',
        correct: 'a'
    },{
        question: 'what is the worst case complexity of quick sort?',
        a: 'O(n)',
        b: 'n^2',
        c: 'log(n)',
        correct: 'b'
    },{
        question: 'what is the full form of DBMS ?',
        a:'database management system',
        b: 'data managing system',
        c:'database system',
        correct: 'a'

    },{
        question: 'what does HTML stands for?',
        a: 'Hypertext Markup Language',
        b: ' Cascading Style Sheets',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },{
        question: 'What year was Javascript launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct: 'b'

    }
];
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

 
let currentQuiz =0;
let score =0;

loadQuiz();

function loadQuiz(){
    deSelect();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText= currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
function getSelected(){

    //const answersEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answersEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    
    return answer;
}
function deSelect(){
    answersEls.forEach((answerEl) =>{
        answerEl.checked=false;
    });
}

submitBtn.addEventListener("click",() =>{
    //check to see the ans
    const answer = getSelected();
    console.log(answer);
    
        if(answer){
            if(answer==quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
        }
    }     
        

});

