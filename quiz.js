const quizData = {
    javascript: [
        {
            question: "1.Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "2.Which of the following keywords is used to define a variable in Javascript?",
            a: "Var",
            b: "Let",
            c: "Both A and B",
            d: "None of the Above",
            correct: "c",
        },
        {
            question: "3.When interpreter encounters an empty statements, what it will do:",
            a: "Shows a warning",
            b: "Prompts to complete the statement",
            c: "Throws an error",
            d: "Ignores the statements",
            correct: "d",
        },
        {
            question: "4. Arrays in JavaScript are defined by which of the following statements?",
            a: "It is an ordered list of values",
            b: "It is an ordered list of objects",
            c: "It is an ordered list of string",
            d: "It is an ordered list of functions",
            correct: "a",
        },
        {
            question: "5.Which of the following is not javascript data types?",
            a: "Null type",
            b: "Undefined type",
            c: "Number type",
            d: "All of the mentioned",
            correct: "d",
        },
        {
            question: "6.Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
            a: "Position",
            b: "Window",
            c: "Standard",
            d: "Location",
            correct: "b",
        },
        {
            question: "7.Which of the following can be used to call a JavaScript Code Snippet?",
            a: "Function/Method",
            b: "Preprocessor", 
            c: "Triggering Event",
            d: "RMI,",
            correct: "a",
        },
        // Add more JavaScript questions here
    ],
    python: [
        {
            question: "1. Which keyword is used for function in Python language?",
            a: "Function",
            b: "def",
            c: "Fun",
            d: "Define",
            correct: "b",
        },
        {
            question: "2. Which of the following character is used to give single-line comments in Python?",
            a: "//",
            b: "#",
            c: "!",
            d: "/*",
            correct: "b",
        },
        {
            question: "3. Python supports the creation of anonymous functions at runtime, using a construct called __________",
            a: "pi",
            b: "anynomous",
            c: "lambda",
            d: "None of the above",
            correct: "c",
        },
        {
            question: "4. What will be the output of the following Python code snippet if x=1?x<<2",
            a: "4",
            b: "2",
            c: "1",
            d: "8",
            correct: "a",
        },
        {
            question: "5. Which of the following is true for variable names in Python?",
            a: " underscore and ampersand are the only two special characters allowed",
            b: "unlimited length",
            c: "all private members must have leading and trailing underscores",
            d: "none of the mentioned",
            correct: "b",
        },
        // Add more Python questions here
    ],
    java: [
        {
            question: "Who developed Java programming language?",
            a: "James Gosling",
            b: "Brendan Eich",
            c: "Guido van Rossum",
            d: "Larry Page",
            correct: "a",
        },
        // Add more Java questions here
    ]
    // Add more programming languages and their quiz data as needed
};

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;
let selectedLanguage = '';

function startQuiz() {
    // Hide language selection form
    document.getElementById('selectoptions').style.display = 'none';
    // Show quiz container
    quiz.style.display = 'block';
    // Load the quiz based on the selected language
    const languageSelect = document.getElementById('language');
    selectedLanguage = languageSelect.value;
    loadQuiz();
}

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[selectedLanguage][currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // const hd1=document.getElementById("heading_program_quiz");
    // hd1.style.display='none';
    // Show question text and list of answers
    questionEl.style.display = 'block';
    document.getElementById('answers').style.display = 'block';
    // Show submit button
    submitBtn.style.display = 'block';
}

// Function to get the selected answer
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer !== undefined) { // Check if an answer is selected
        if (answer === quizData[selectedLanguage][currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData[selectedLanguage].length) {
            loadQuiz();
        } else {
            questionEl.style.display = 'none';
            document.getElementById('answers').style.display = 'none';
            // Show submit button
            submitBtn.style.display = 'none';
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData[selectedLanguage].length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}
