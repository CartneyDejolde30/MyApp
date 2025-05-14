let quiz = [
    {
        question: "What is the capital of France?",
        a: "Rome",
        b: "Madrid",
        c: "Paris",
        d: "Berlin",
        correct: "c"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Mark Twain",
        d: "Jane Austen",
        correct: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Venus",
        b: "Earth",
        c: "Jupiter",
        d: "Mars",
        correct: "d"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Pacific Ocean",
        d: "Arctic Ocean",
        correct: "c"
    },
    {
        question: "How many legs does a spider have?",
        a: "6",
        b: "8",
        c: "10",
        d: "12",
        correct: "b"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Michelangelo",
        correct: "c"
    },
    {
        question: "What is the smallest prime number?",
        a: "1",
        b: "2",
        c: "3",
        d: "5",
        correct: "b"
    },
    {
        question: "Which language has the most native speakers?",
        a: "English",
        b: "Spanish",
        c: "Hindi",
        d: "Mandarin Chinese",
        correct: "d"
    },
    {
        question: "What is the chemical symbol for water?",
        a: "O2",
        b: "H2O",
        c: "CO2",
        d: "NaCl",
        correct: "b"
    },
    {
        question: "Who was the first person to walk on the moon?",
        a: "Buzz Aldrin",
        b: "Yuri Gagarin",
        c: "Neil Armstrong",
        d: "Michael Collins",
        correct: "c"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        a: "China",
        b: "Japan",
        c: "Thailand",
        d: "South Korea",
        correct: "b"
    },
    {
        question: "How many continents are there on Earth?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Carbon Dioxide",
        d: "Helium",
        correct: "c"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        a: "Tiger",
        b: "Elephant",
        c: "Lion",
        d: "Bear",
        correct: "c"
    },
    {
        question: "Which instrument has keys, pedals, and strings?",
        a: "Guitar",
        b: "Drum",
        c: "Violin",
        d: "Piano",
        correct: "d"
    },
    {
        question: "In what year did World War II end?",
        a: "1942",
        b: "1945",
        c: "1948",
        d: "1950",
        correct: "b"
    },
    {
        question: "What do you call an animal that eats both plants and meat?",
        a: "Herbivore",
        b: "Carnivore",
        c: "Omnivore",
        d: "Insectivore",
        correct: "c"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Iron",
        c: "Diamond",
        d: "Quartz",
        correct: "c"
    },
    {
        question: "Which bird is known for mimicking sounds?",
        a: "Parrot",
        b: "Eagle",
        c: "Owl",
        d: "Penguin",
        correct: "a"
    },
    {
        question: "Which planet is closest to the Sun?",
        a: "Earth",
        b: "Venus",
        c: "Mercury",
        d: "Mars",
        correct: "c"
    }
];


let currentQuiz = 0;
let score = 0;
let number = 1;
let quest = document.getElementById('question');
let nextbtn =  document.getElementById('btn');
let ans = document.querySelectorAll('input[name = "answer"]');
let optionA = document.getElementById('option-a');
let optionB = document.getElementById('option-b');
let optionC = document.getElementById('option-c');
let optionD = document.getElementById('option-d');
let result = document.getElementById('result');
let txt = document.getElementById('text');
let reset = document.getElementById('reset');
let correctAnswer = document.getElementById('correct-answer');
let userAnswers = [];


function yourAnswer() {
    correctAnswer.style.display = 'block';

    for (let i = 0; i < quiz.length; i++) {
        let span = document.createElement('p');

        let questionText = `<b>Q${i + 1}:</b> ${quiz[i].question}<br>`;
        let correctText = `<b>Correct Answer:</b> ${quiz[i][quiz[i].correct]}<br>`;

        let userAnswerText = '';
        if (userAnswers[i] === quiz[i].correct) {
            userAnswerText = `<b>✅ Your Answer:</b> ${quiz[i][userAnswers[i]] || 'No answer'}`;
        } else {
            userAnswerText = `<b>❌ Your Answer:</b> ${quiz[i][userAnswers[i]] || 'No answer'}`;
        }

        span.innerHTML = questionText + correctText + userAnswerText + `<hr>`;
        correctAnswer.appendChild(span);
    }
}
function load(){
    deselect();
    quest.innerHTML = `${number}. ${quiz[currentQuiz].question}`;
    optionA.innerHTML = quiz[currentQuiz].a;
    optionB.innerHTML = quiz[currentQuiz].b;
    optionC.innerHTML = quiz[currentQuiz].c;
    optionD.innerHTML = quiz[currentQuiz].d;
    
}

function select(){
    let myans = undefined;

    ans.forEach((e)=>{
        if (e.checked){
            myans = e.value;
        }
    });
    return myans;
};

function deselect(){
    ans.forEach((e)=>{e.checked = false});
}


nextbtn.addEventListener('click',()=>{
    let theAnswer = select();
    

    if(theAnswer){
        userAnswers.push(theAnswer);
        if(theAnswer === quiz[currentQuiz].correct){
        score++;
    }
        currentQuiz++;
        number++;
        if(currentQuiz < quiz.length){  
            load();
        }else{
            yourAnswer();
            result.style.display = "inline";
            txt.innerHTML = "Your Total Score"
            result.innerHTML = `${score}/${quiz.length}`;
            reset.style.display = 'inline';
            nextbtn.style.display = 'none';
            reset.addEventListener('click',()=>{
                currentQuiz = 0;
                score = 0;
                number = 1;
                result.style.display = "none";
                txt.innerHTML = ""
                reset.style.display = "none";
                nextbtn.style.display = 'inline';
                correctAnswer.style.display = 'none';
                load();
            })
        }
    }else{
        alert("Please Select an Answer First");
    }
    
});

 load();
