// const registerBtn = document.querySelector('[type=submit]');

const otherJobRole = document.querySelector('#other-job-role');
const jobSelection = document.querySelector('#title')
const colorSelection = document.querySelector('#color')
const designSelection = document.querySelector('#design')

const activitiesFieldSet = document.querySelector('#activities');
const totalActCost = document.querySelector('#activities-cost')
console.log(totalActCost);

const activityCheckBox = document.querySelectorAll('div label [type=checkbox]')
console.log(activityCheckBox)

const paymentFieldSet = document.querySelector('payment-methods')
const paymentMethod = document.querySelector('#payment')

const form = document.querySelector('form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const cardNumInput = document.querySelector('#cc-num');
console.log(cardNumInput)
const zipInput = document.querySelector('#zip')
console.log(zipInput)
const cvvInput = document.querySelector('#cvv')
console.log(cvvInput)


nameInput.focus()

otherJobRole.style.display = 'none';

jobSelection.addEventListener('change', () => {

    console.log(jobSelection.value)

    if (jobSelection.value === 'other') {

        otherJobRole.style.display = ''

    } else {

        otherJobRole.style.display = 'none';

    }

})

colorSelection.disabled = true

designSelection.addEventListener('change', () => {

    console.log(designSelection.value)

    if (designSelection.value === 'js puns' || designSelection.value === 'heart js') {

        colorSelection.disabled = false;

        if (designSelection.value === 'js puns') {

            colorSelection.innerHTML = ''

            let colorContent = `
                                <option selected hidden>Select a design theme above</option>
                                <option data-theme="js puns" value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
                                <option data-theme="js puns" value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
                                <option data-theme="js puns" value="gold">Gold (JS Puns shirt only)</option>
                                `;

            colorSelection.innerHTML = colorContent;

        }

        if (designSelection.value === 'heart js') {

            colorSelection.innerHTML = ''

            let colorContent = `
                                <option selected hidden>Select a design theme above</option>
                                <option data-theme="heart js" value="tomato">Tomato (I &#9829; JS shirt only)</option>
                                <option data-theme="heart js" value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
                                <option data-theme="heart js" value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
                                `;

            colorSelection.innerHTML = colorContent;

        }

    } else {

        colorSelection.disabled = true

    }

})

activitiesFieldSet.addEventListener('change', (e) => {

        let total = 0;

        const clickedActivityPrice = e.target.getAttribute('data-cost')
        const clickedActivityName = e.target.getAttribute('name')

        console.log(clickedActivityPrice)
        console.log(clickedActivityName)

        if (e.target.checked) {

            total += parseInt(clickedActivityPrice);

        } else {

            total -= parseInt(clickedActivityPrice);

        }
        totalActCost.innerHTML = `Total: $${total}`;
        console.log(total)
            // for (let i = 0; i < activityCheckBox.length; i++) {

        //     const checkBoxName = activityCheckBox[i].getAttribute('name');
        //     console.log(checkBoxName)




    }

    // }

)

const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');
const creditCardDiv = document.querySelector('#credit-card');

paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

paymentMethod.addEventListener('change', (event) => {




    if (paymentMethod.value === 'paypal' || paymentMethod.value === 'bitcoin') {

        if (paymentMethod.value === 'paypal') {
            bitcoin.style.display = 'none';
            creditCardDiv.style.display = 'none';
            paypalDiv.style.display = '';

        }
        if (paymentMethod.value === 'bitcoin') {

            paypalDiv.style.display = 'none';
            creditCardDiv.style.display = 'none';
            bitcoinDiv.style.display = '';

        }

    } else {

        creditCardDiv.style.display = '';
        paypalDiv.style.display = 'none';
        bitcoin.style.display = 'none';

    }

})

const validationPass = (element) => {

    const parent = element.parentElement;
    parent.className = 'valid';
    parent.classList.remove('not-valid');
    parent.lastElementChild.style.display = 'none';

}

const validationFail = (element) => {

    const parent = element.parentElement;
    parent.classList.add('not-valid');
    parent.classList.remove('valid');
    parent.lastElementChild.style.display = '';

}

const nameValidation = () => {

    const nameValue = nameInput.value;
    const isNameValid = /^[A_Za-z]+ ?[A-Za-z]*? ?[A-Za-z]*?$/.test(nameValue);
    console.log(`The name input is ${nameValue} it\'s valid state is ${isNameValid}`);
    if (isNameValid === true) {

        validationPass(nameInput);

    } else {

        validationFail(nameInput);

    }

}

const emailValidation = () => {

    const emailValue = emailInput.value;
    const isEmailValid = /^[^@]\w+@\w+[.](com|co[.]za|net|org|gov)$/.test(emailValue);
    console.log(`The email input is ${emailValue} it\'s valid state is ${isEmailValid}`);

    if (isEmailValid === true) {

        validationPass(emailInput);

    } else {

        validationFail(emailInput);

    }

}

const register4ActValidation = () => {

    const isRegisterValid = activityCheckBox.check > 0;
    console.log(isRegisterValid);

    if (isRegisterValid === true) {

        validationPass(activityCheckBox);

    } else {

        validationFail(activityCheckBox);

    }


}

const cardNumberValidation = () => {

    const cardNumValue = cardNumInput.value;
    const isCardNumValid = /^\d{13,16}$/.test(cardNumValue);
    console.log(`The card input is ${cardNumValue} it\'s valid state is ${isCardNumValid}`);

    if (isCardNumValid === true) {

        validationPass(cardNumInput);

    } else {

        validationFail(cardNumInput);

    }
}

const zipCodeValidation = () => {

    const zipCodeValue = zipInput.value;
    const isZipValid = /^\d{5}$/.test(zipCodeValue);
    console.log(`The card input is ${zipCodeValue} it\'s valid state is ${isZipValid}`);
    if (isZipValid === true) {

        validationPass(zipInput)

    } else {

        validation(zipInput)

    }

}

const cvvValidation = () => {

    const cvvValue = cvvInput.value;
    const isCvvValid = /^\d{3}$/.test(cvvValue);
    console.log(`The card input is ${cvvValue} it\'s valid state is ${isCvvValid}`);

    if (isCvvValid === true) {

        validationPass(cvvInput);

    } else {

        validationFail(cvvInput);

    }

}

form.addEventListener('submit', (e) => {

    if (!nameValidation()) {


        e.preventDefault();
        console.log('the name field prevented submission')

    };

    if (!emailValidation()) {


        e.preventDefault();
        console.log('the email field prevented submission')

    };

    if (!register4ActValidation()) {


        e.preventDefault();
        console.log('the register field prevented submission')

    };


    if (!cardNumberValidation()) {

        e.preventDefault();
        console.log('the card number field prevented submission')

    };

    if (!zipCodeValidation()) {

        e.preventDefault();
        console.log('the zip field prevented submission')

    };

    if (!cvvValidation()) {

        e.preventDefault();
        console.log('the cvv field prevented submission')

    }

    console.log('Register button clicked');

})