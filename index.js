const questionp = document.querySelector('.question');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const rateDiv = document.querySelector('.rate');
const currentQuestionSpan = document.querySelector('.current-question');

const questions = [
    {
      question: "How satisfied are you with our products?",
      buttons: 5,
    },
    {
      question: "How fair are the prices compared to similar retailers?",
      buttons: 5,
    },
    {
      question:
        "How satisfied are you with the value for money of your purchase?",
      buttons: 5,
    },
    {
      question: "On a scale of 1-10 how would you recommend us to your friends and family?",
      buttons: 10,
    },
    {
      question: "What could we do to improve our service?",
      input: true,
    },
  ];

  let currentQuestion = 0;

  function updateQuestion() {
    questionp.innerText = questions[currentQuestion].question;
    currentQuestionSpan.innerText = currentQuestion + 1;
    rateDiv.innerHTML = "";
  }
    if(questions[currentQuestion].input) {
        const input = document.createElement("input");
        input.type = "text";
        input.name = "answer";
        input.required = true;
        rateDiv.appendChild(input);
    } else {
        for (let i = 1; i <= questions[currentQuestion].buttons; i++) {
            const button = document.createElement("button");
            button.innerText = i;
            rateDiv.appendChild(button);
          
        }
    }

    nextBtn.addEventListener("click", () => {
        if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          updateQuestion();
        }
      });
      
      prevBtn.addEventListener("click", () => {
        if (currentQuestion > 0) {
          currentQuestion--;
          updateQuestion();
        }
      });
      
      updateQuestion();