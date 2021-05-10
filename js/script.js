/* Create all your necessary variables and log them to the console
 *  check to ensure you're selecting the correct elements
 */

const otherJobRole = document.querySelector('#other-job-role');
const jobSelection = document.querySelector('#title');
const colorSelection = document.querySelector('#color');
const designSelection = document.querySelector('#design');

const activitiesFieldSet = document.querySelector('#activities');
const activitiesBox = document.querySelector('#activities-box');
const totalActCost = document.querySelector('#activities-cost');

const activityCheckBox = document.querySelectorAll('div label [type=checkbox]');

const paymentFieldSet = document.querySelector('payment-methods');
const paymentMethod = document.querySelector('#payment');

const form = document.querySelector('form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const cardNumInput = document.querySelector('#cc-num');
const zipInput = document.querySelector('#zip');
const cvvInput = document.querySelector('#cvv');

//use .focus() method on the nameInput so that the page loads and opens the name field automatically

nameInput.focus()

//Hide the other job role element by equating its display value to 'none'
otherJobRole.style.display = 'none';

/*  Create a event listener on the parent element of the job selection field 
 *      add the listener on the change event 
 *      log the job selection values 
 * 
 *  create a if/else statement 
 *  in the if statement use a conditional that checks if the value of the job Selection is 'other'
 *      if the value is other set the other job roles display value to '' or inherit
 *  else  
 *      other job roles display value should be set to 'none'/ hidden
 */

jobSelection.addEventListener('change', () => {

    console.log(jobSelection.value)

    if (jobSelection.value === 'other') {

        otherJobRole.style.display = ''

    } else {

        otherJobRole.style.display = 'none';

    }

})

//Disable the color Selection input field
colorSelection.disabled = true;

/*  Create a event listener for a change event  
 *      log your design Selection value to see if you are targeting the correct information
 */

designSelection.addEventListener('change', () => {

    console.log(designSelection.value);

    /*  create a
     *  if statement to check
     *  if design Selection value is === to 'js puns' 
     *  || (or) 
     *  design Selection value is === to 'heart js' 
     */

    if (designSelection.value === 'js puns' || designSelection.value === 'heart js') {

        /*  if this condition is met
         *  set color Selection.disable property to false so that people can use / set the color of the shirt if they select a design theme
         */

        colorSelection.disabled = false;

        /*  within the if statement create another if statement 
         *       if design Selection value === 'js puns' 
         *           set the innerHTML property to colorSelection.innerHTML = '' to reset the displayed items in the color Selection menu
         *           set the innerHTML property of the select menu to a HTML string containing a template literal with the created shirt colour elements present
         *           that are specific to the 'js puns' design selection value
         */

        if (designSelection.value === 'js puns') {

            colorSelection.innerHTML = '';

            let colorContent = `
                                <option selected hidden>Select a Shirt Colour</option>
                                <option data-theme="js puns" value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
                                <option data-theme="js puns" value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
                                <option data-theme="js puns" value="gold">Gold (JS Puns shirt only)</option>
                                `;

            colorSelection.innerHTML = colorContent;

        }

        /*  Create a second if statement to check if
         *      if design Selection value === 'heart js'
         *          set the innerHTML property to colorSelection.innerHTML = '' to reset the displayed items in the color Selection menu
         *          set the innerHTML property to the select menu to a HTML string containing a template literal with the created shirt colour elements present
         *          that are specific to the 'heart js' design selection value 
         */

        if (designSelection.value === 'heart js') {

            colorSelection.innerHTML = '';

            let colorContent = `
                                <option selected hidden>Select a Shirt Colour</option>
                                <option data-theme="heart js" value="tomato">Tomato (I &#9829; JS shirt only)</option>
                                <option data-theme="heart js" value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
                                <option data-theme="heart js" value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
                                `;

            colorSelection.innerHTML = colorContent;

        }

    } else {

        //else if the initial condition isn't met set the .disabled property of the color selection menu to true to disable it again

        colorSelection.disabled = true;

    }

})

// Create A variable for total and equate it to 0
let total = 0;


//Create A event listener on the change event and place the listener on the activitiesFieldSet container 
activitiesFieldSet.addEventListener('change', (e) => {

    //log your event.target to ensure you are targeting the correct data
    const clickedActivityPrice = e.target.getAttribute('data-cost');

    /* Create a if statement to check if the event target is checked in the activitiesFieldSet
     *      if the condition is met add the price of the activity/item to the total variable
     *      else
     *      subtract the price of the clicked/unclicked activity/item from the total variable
     */

    if (e.target.checked) {

        //add a unary plus to change the str( string )value in clickedActivityPrice to a int( integer )
        //Add value to the total

        total += +clickedActivityPrice;

    } else {

        //add parseInt to the clickedActivityPrice to change the value to a int ( works the same as unary (+) )
        //subtract value to the total

        total -= parseInt(clickedActivityPrice);

    }

    //equate the innerHTML property of the totalActCost to a template literal that contains the new ${total} amount
    totalActCost.innerHTML = `Total: $${total}`;

})


// Create a event listener on the change event and place the listener on the activitiesBox
activitiesBox.addEventListener('change', (e) => {

    //Create necessary variables
    //clicked activity/events data day and time value
    const clickedActTime = e.target.getAttribute('data-day-and-time');

    // console.log(clickedActTime);


    //clicked event/activity
    const clicked = e.target;

    /*  Create a for loop to iterate over all of the check box activities/items for the length of i < check boxes length (number of checkboxes)
     *  Create necessary variables and log them to the console to ensure you are targeting the correct information 
     */

    for (let i = 0; i < activityCheckBox.length; i++) {

        //variable holding the parent element of each check box iterated over in the for loop
        const parentElement = activityCheckBox[i].parentElement;

        //variable holding the data day and time of each check box iterated over in the for loop
        const ActivityDataTime = activityCheckBox[i].getAttribute('data-day-and-time');
        // console.log(ActivityDataTime);

        /* Create a if statement that checks if 
         *  the clicked targets data day and time is === the data day and time of iterated check box element form the for loop
         *  AND (&&)
         *  check if the clicked event is not !== to the activityCheckBox[i] ( the current iterated check box element )
         *  so that the check box you select/click on does not get disabled along with the iterations data day and time checkbox that matches the check box
         *  tha has been clicked
         */
        if (clickedActTime === ActivityDataTime && clicked !== activityCheckBox[i]) {

            //log there is conflict if the condition is met so you can see if clicking on one activity Interferes with other activity in the activity's check box
            //list of check boxes created by the for loop
            console.log('there\'s conflict');

            /*  Create another if/else 
             *  to check if the item has been clicked
             *      if true add a class = disabled to the parentElement of the clicked element
             *      and disable the check box that has the same data day and time value 
             * else
             * 
             */

            /*********************************************************************************************************/

            if (clicked.checked) {

                parentElement.classList.add('disabled');
                activityCheckBox[i].disabled = true;

            } else {

                parentElement.classList.remove('disabled');
                activityCheckBox[i].disabled = false;

            }

        }

    }

})

/*  Activities Accessibility
 *  create a for loop where i < length of the activities check boxes and create an event listener on all the checkboxes
 *  to listen for a focus event in which when that occur/or a item in the activities container is in focus it adds a class 
 *  of focus to the current item/activity that is in focus
 * 
 *  create another event listener to listen for blur events/ when a item/activity is tabbed off of 
 *  and when this occurs the element needs to be added a class of blur and have it's class of focus removed 
 */

for (let i = 0; i < activityCheckBox.length; i++) {

    const allBoxes = activityCheckBox[i];
    const parentElement = allBoxes.parentElement;

    allBoxes.addEventListener('focus', () => {

        parentElement.classList.add('focus');

    })

    allBoxes.addEventListener('blur', () => {

        parentElement.classList.remove('focus');
        parentElement.classList.add('blur');

    })

}

/*  Select the correct elements 
 *  store those elements in a variable 
 */

const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');
const creditCardDiv = document.querySelector('#credit-card');

//set the display property of the paypalDiv to none so that the paypalDiv isn't visible on page load 
paypalDiv.style.display = 'none';

//set the display property of the bitcoinDiv to none so that the bitcoinDiv isn't visible on page load 
bitcoinDiv.style.display = 'none';

/*  Create a event listener to listen for the change event on the paymentMethod field set 
 *      which contains the payment information and decide which payment method should be displayed based on what the value in the
 *      select menu is === to
 */

paymentMethod.innerHTML = `
                        <option value="credit-card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bitcoin">Bitcoin</option>
                        `

paymentMethod.addEventListener('change', (event) => {

    /*  Create a if/else statement to check if 
     *      if statement    
     *          the value of the paymentMethod === 'paypal' 
     *          || (or)
     *          if the value of the paymentMethod === 'bitcoin'
     * 
     *      else
     *          set the display property of the bitcoin div to none as it hasn't been selected 
     *          set the display property of the paylpal div to none as it hasn't been selected
     *          set the display property of the credit card div to '' so it displays the credit card div if the paypal or bitcoin payment method hasn't been selected in the selection menu
     */

    if (paymentMethod.value === 'paypal' || paymentMethod.value === 'bitcoin' || paymentMethod.value === 'credit-card') {

        /*  if the condition is met create 2 new if statements within the created if statement 
         *  first if statement
         *      paymentMethod.value === 'paypal' if this condition is met 
         *          set the display property of the bitcoin div to none as it hasn't been selected 
         *          set the display property of the credit card div to none as it hasn't been selected
         *          set the display property of the paypal div to '' so it can be displayed on the page since it's been selected
         */

        if (paymentMethod.value === 'paypal') {

            bitcoinDiv.style.display = 'none';
            creditCardDiv.style.display = 'none';
            paypalDiv.style.display = '';

        }

        /*  Second if statement
         *      paymentMethod.value === 'bitcoin' if this condition is met
         *          set the display property of the bitcoin div to '' so it can be displayed on the page as it has been selected
         *          set the display property of the paypal div to none as it hasn't been selected
         *          set the display property of the credit card div to none as it hasn't been selected
         */

        if (paymentMethod.value === 'bitcoin') {

            paypalDiv.style.display = 'none';
            creditCardDiv.style.display = 'none';
            bitcoinDiv.style.display = '';

        }

        if (paymentMethod.value === 'credit-card') {

            bitcoinDiv.style.display = 'none';
            paypalDiv.style.display = 'none';
            creditCardDiv.style.display = '';

        }

    } else {

        creditCardDiv.style.display = 'none';
        paypalDiv.style.display = 'none';
        bitcoin.style.display = 'none';

    }

})

/*  Create a validation pass function for the input fields and give it the parameter (element) 
 *  (so function can be dynamic and be used multiple times for all the input fields)
 *  so that the fields that pass the validation can have the pass validation class/ ( valid ) themes applied to the specific input element
 *  and hide the validation hint since validation was passed 
 */

const validationPass = (element) => {

    const parent = element.parentElement;
    parent.classList.add('valid');
    parent.classList.remove('not-valid');
    parent.lastElementChild.style.display = 'none';

}

/*  Create a validation fail function for the input fields and give it the parameter (element) 
 *  (so function can be dynamic and be used multiple times for all the input fields)
 *  so that the fields that fail the validation can have the fail validation class/ ( not-vail ) themes applied to the specific input element 
 *  and show the validation hint since it failed validation by setting the display property of the parents last child element to 
 *  an empty string ( '' ) or by setting it to 'inherit'
 */

const validationFail = (element) => {

    const parent = element.parentElement;
    parent.classList.add('not-valid');
    parent.classList.remove('valid');
    parent.lastElementChild.style.display = 'inherit';

}

//Create a function for validating the name input field for if the field has been left blank
const nameValidation = () => {

    //Store user input in the nameInput field to a variable
    const nameValue = nameInput.value;

    const nameHint = document.querySelector('#name-hint');

    //Create a validation regex for the name input field and .test it on the value/ user inputs in the name field 
    const isNameValid = /^\d*?\s*?\w+?\s*?\d*?\w*?\s?\d*?\w*?$/.test(nameValue);

    //log your result to check if you are receiving the correct boolean value from your test
    // console.log(`The name input is ${nameValue} it\'s valid state is ${isNameValid}`);

    //Create a if statement 
    if (isNameValid === true) {

        //call the validation if the input passes the regex ( === true )/ if the conditional is passed and pass it the name input element
        validationPass(nameInput);

    } else {

        //call the validation if the input fails/ if the conditional isn't pass and pass it the name input element  
        validationFail(nameInput);

    }

    //return boolean test value
    return isNameValid;

}


//Create a function for validating the email input field 
const emailValidation = () => {

    //Store user input in the emailInput field to a variable
    const emailValue = emailInput.value;

    //Create a validation regex for the email input field and .test it on the value/ user input in the emails field 
    const isEmailValid = /^[^@]\w+@\w+[.](com|co[.]za|net|org|gov)\*?$/.test(emailValue);

    //log result to error test regex
    // console.log(`The email input is ${emailValue} it\'s valid state is ${isEmailValid}`);

    if (isEmailValid === true) {

        validationPass(emailInput);

    } else {

        validationFail(emailInput);

    }

    //return boolean test value
    return isEmailValid;

}

//Create a function for validating the register for activities field
const register4ActValidation = () => {

    //Store the boolean for the total number of check boxes checked > greater then 0 ( total > 0 ) in a variable 
    const isRegisterValid = total > 0;

    //log result to check if your result 
    console.log(isRegisterValid);

    if (isRegisterValid === true) {

        /*************************************************************************************************************/

        validationPass(activitiesBox);

    } else {

        validationFail(activitiesBox);

    }

    //return boolean test value
    return isRegisterValid;

}

//Create necessary function variables
const cardNumHint = document.querySelector('#cc-hint');

//Create a function for validating the card number input field
const cardNumberValidation = () => {

    //Store user input in the cardNumInput field to a variable
    const cardNumValue = cardNumInput.value;

    //Create a validation regex for the card number input field and .test it on the value/ user inputs in the card number field 
    const isCardNumValid = /^\d{13,16}$/.test(cardNumValue);

    //log result to check if your result
    // console.log(`The card input is ${cardNumValue} it\'s valid state is ${isCardNumValid}`);

    //return boolean test value
    return isCardNumValid;

}

//Create a function for validating the card number input field
const letterInCardNumb = () => {

    //Store user input in the cardNumInput field to a variable
    const cardNumValue = cardNumInput.value;

    //Create a validation regex to find letters in the card number field and store the .test boolean in a variable
    const isLetterInCardNum = /[A-Za-z]+/.test(cardNumValue)

    //return boolean test value
    return isLetterInCardNum;

}

/*  Create a function for complete validation of the card number field
 *      call both letterInCardNumb() and cardNumberValidation()
 *      and store it in a variable
 */

const cardNumCompleteValidation = () => {

    const letterInCardNum = letterInCardNumb();
    const cardNumValidation = cardNumberValidation();

    //Create a variable to store the boolean str to return after a specific if statements condition is met and assign a empty string 
    let valid = '';

    /*  Create 3 if statements
     *  first if statement
     *      conditional 
     *      if letterInCardNum is false (letterInCardNum === false)(no letter in the card input field) and if cardNumValidation is true (cardNumValidation === true)
     *      (the cardNumValidation is returns true)
     *          if condition is met then call validation Pass and set the valid variable to true
     */

    if (letterInCardNum === false && cardNumValidation === true) {

        validationPass(cardNumInput)
        valid = true
    }

    /*  Second if statement
     *      conditional
     *      if cardNumValidation is false (cardNumValidation === false)
     *          if condition is met then call validation Fail and set the cardNumHints .innerHTML property to 'credit card number must be between 13 - 16 digits'
     *          and set the valid variable value to false 
     */

    if (cardNumValidation === false) {

        cardNumHint.innerHTML = `Credit card number must be between 13 - 16 digits`;
        validationFail(cardNumInput)
        valid = false

    }

    /*  Third if statement 
     *      conditional
     *      if cardNumValidation === false and letterInCardNum === true
     *          if conditional is met the set the innerHTML property of the credit card number cannot contain letters 
     *          and call the validation Fail as well as set the valid variable value to false 
     */

    if (cardNumValidation === false && letterInCardNum === true) {

        cardNumHint.innerHTML = `Credit card number cannot contain letters`;
        validationFail(cardNumInput);
        valid = false

    }

    //return boolean test value
    return valid

}

//Create a function for validating the zip code input field
const zipCodeValidation = () => {

    //Store user input in the zipInput field to a variable
    const zipCodeValue = zipInput.value;

    //Create a validation regex for the zip input field and .test it on the value/ user input in the zip field 
    const isZipValid = /^\d{5}$/.test(zipCodeValue);

    //log results to error test regex
    // console.log(`The card input is ${zipCodeValue} it\'s valid state is ${isZipValid}`);

    if (isZipValid === true) {

        validationPass(zipInput);

    } else {

        validationFail(zipInput);

    }

    //return boolean test value
    return isZipValid;
}

//Create a function for validating the cvv input field 
const cvvValidation = () => {

    //Store user input in the cvvInput field to a variable
    const cvvValue = cvvInput.value;

    //Create a validation regex for the cvv input field and .test it on the value/ user input in the cvv field 
    const isCvvValid = /^\d{3}$/.test(cvvValue);

    //log results to error test regex
    // console.log(`The card input is ${cvvValue} it\'s valid state is ${isCvvValid}`);

    if (isCvvValid === true) {

        validationPass(cvvInput);

    } else {

        validationFail(cvvInput);

    }

    //return boolean test value
    return isCvvValid;

}

/*  Create in real time validation for the name and email field
 *  target both the name and email fields parent elements and log your selection to ensure you are selecting the correct elements
 */

const nameParentElement = nameInput.parentElement;
// console.log(nameParentElement);

const emailParentElement = emailInput.parentElement;
// console.log(emailParentElement);

const cardNumParentElement = cardNumInput.parentElement
    //console.log(cardNumParentElement)

/*  Create a event listener on the key up event and place the listener on the parent element of the name element
 *      call the nameValidation() function within the listener and log your results to check the accuracy of you name regular expression
 */

nameParentElement.addEventListener('keyup', (e) => {

    // nameCompleteValidation();
    nameValidation();

    // console.log(e.target.value);

})

/*  Create a event listener on the key up event and place the listener on the parent element of the email element input field
 *      call the emailValidation() function within the listener and log your results to check the accuracy of your email regular expression 
 */

emailParentElement.addEventListener('keyup', (e) => {

    emailValidation();
    // console.log(e.target.value);

})

/*  Create a event listener on the key up event and place the listener on the parent element of the card Number element input field
 *      call the cardNumCompleteValidation() function within the listener and log your results to check the accuracy of your card Number regular expression
 */

cardNumParentElement.addEventListener('keyup', (e) => {

    cardNumCompleteValidation();

})

/*  Create a add event listener on the submit event and place it on the form element 
 *      within the event listener create if statements for checking if the specific condition in this case the validation of
 *      each input field 
 *      if the validation is failed then it needs to prevent the browser from submitting the form by using event.preventDefault() method
 *      create log statements within the if statements to know which specific input field failed validation and prevented the form submission
 */

form.addEventListener('submit', (e) => {

    if (!nameValidation()) {

        e.preventDefault();
        console.log('the name field prevented submission');

    };

    if (!emailValidation()) {

        e.preventDefault();
        console.log('the email field prevented submission');

    };

    if (!register4ActValidation()) {

        e.preventDefault();
        console.log('the register activities field prevented submission');

    };

    if (creditCardDiv.style.display === '') {

        if (!cardNumCompleteValidation()) {

            e.preventDefault();
            console.log('the card number field prevented submission')

        };

        if (!zipCodeValidation()) {

            e.preventDefault();
            console.log('the zip field prevented submission');

        };

        if (!cvvValidation()) {

            e.preventDefault();
            console.log('the cvv field prevented submission');

        }

    }

    //log button clicked so you can see if the form event listener works as intended
    console.log('Register button clicked');

})