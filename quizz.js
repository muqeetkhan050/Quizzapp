const quizdata=[{
    question:"which languagae runs in web browser",
    a: "html",
    b: "java",
    c: "pyhton",
    d: "javascript",
    correct: "d"
},{
    question:"what is the capital of pakistan",
    a:"lahore",
    b:"islamabad",
    c:"karaci",
    d:"dera ghazi khan",
    correct: "b" 
},{
    question:"which political party is biggest in pakistan",
    a:"TLP",
    b:"PPPP",
    c:"PTI",
    d:"none",
    correct:"c"
},{
    question:"UET stands for",
    a:"unity executes tolerance",
    b:"us exercise tom",
    c:"university of engineering and technology",
    d:"none",
    correct:"c"
},

];
const question1=document.querySelector('.question');
const a_answer=document.querySelector('#a_answer');
const b_answer=document.querySelector('#b_answer');
const c_answer=document.querySelector('#c_answer');
const d_answer=document.querySelector('#d_answer');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');

let questionCount=0; 
let score=0;

const loadquestion=()=>{

    const questionlist=quizdata[questionCount]; 
    
     question1.innerHTML = questionlist.question;

     a_answer.innerHTML=quizdata[questionCount].a;
     b_answer.innerHTML=quizdata[questionCount].b;
     c_answer.innerHTML=quizdata[questionCount].c;
     d_answer.innerHTML=quizdata[questionCount].d;
     
}; 

loadquestion();

const getcheckanswer =()=>{
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
        
    });

    return answer;
};


submit.addEventListener('click',()=>{

    const checkedanswer=getcheckanswer();
    console.log(checkedanswer);

    if(checkedanswer==quizdata[questionCount].correct){
        score++;
    };

     questionCount++;

     if(questionCount < quizdata.length){
         loadquestion();
     }else{
        
        showscore.innerHTML=`<h3>you scored ${score}/${quizdata.length}</h3>`;
     }

})
