    let userInput = document.getElementById("userEnter");
        let checkButton = document.getElementById("button");
        let resultOddEven = document.getElementById("oddEvenResult");
        let resultPositiveNegative = document.getElementById("signResult");

        checkButton.addEventListener('click', function click() {
            if (userInput.value === "") {
                resultOddEven.textContent = "Please enter a number.";
                resultPositiveNegative.textContent = "";
                return;
            }

            let num = Number(userInput.value);

            if (num < 0) {
                resultPositiveNegative.textContent = 'The number is Negative';
            } else if (num > 0) {
                resultPositiveNegative.textContent = 'The number is Positive';
            } else {
                resultPositiveNegative.textContent = 'The number is 0 ';
            }


            if (num % 2 === 0) {
                resultOddEven.textContent = 'The number is Even';
            } else if (num % 2 !== 0) {
                resultOddEven.textContent = 'The number is Odd';
            }


        })
