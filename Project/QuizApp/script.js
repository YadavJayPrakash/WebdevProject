const questions = [
    {
        'que': 'Which of the following is the markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JS',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was JavaScript launched?',
        'a': '1995',
        'b': '1997',
        'c': '1999',
        'd': 'None of these',
        'correct': 'a'
    },
    {
        'que': 'What is the capital of France?',
        'a': 'Berlin',
        'b': 'Madrid',
        'c': 'Paris',
        'd': 'Lisbon',
        'correct': 'c'
    }
];

let index = 0;
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');
const form = document.getElementById('quizForm');

const loadQuestions = () => {
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;

    optionInputs[0].nextElementSibling.innerText = `A) ${data.a}`;
    optionInputs[1].nextElementSibling.innerText = `B) ${data.b}`;
    optionInputs[2].nextElementSibling.innerText = `C) ${data.c}`;
    optionInputs[3].nextElementSibling.innerText = `D) ${data.d}`;
};

// Initial call
loadQuestions();

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === questions[index].correct) {
            alert('Correct Answer!');
        } else {
            alert('Wrong Answer!');
        }

        index++;
        if (index < questions.length) {
            loadQuestions();
        } else {
            alert('Quiz finished');
            form.reset();
            index = 0; // Reset index to start over
            loadQuestions();
        }
    } else {
        alert('Please select an option');
    }
});
