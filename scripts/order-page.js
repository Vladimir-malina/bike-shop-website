const form = document.querySelector('form')

let validationFields = [] // --------------- ARRAY OF OBJECTS FOR VALIDATION

// --------------------------------ERROR FUNCTION------------------------------

function showError(element, elementError, patternMismatchAnswer, typeMismatchAnswer) {
  if(element.validity.valueMissing) {
    elementError.textContent = 'required';
  } else if(element.validity.patternMismatch) {
    elementError.textContent = patternMismatchAnswer
  } else if(element.validity.typeMismatch){
    elementError.textContent = typeMismatchAnswer
  } else if (element.validity.tooShort) {
    elementError.textContent = `not less then ${element.getAttribute('minlength')} symbols`
  } else if (element.validity.tooShort) {
    elementError.textContent = `not more then ${element.getAttribute('maxlength')} symbols`  
  } else if (element.validity.rangeOverflow) {
    elementError.textContent = `max value is ${element.getAttribute('max')}`
  } else if (element.validity.rangeUnderflow) {
    elementError.textContent = `min value is ${element.getAttribute('min')}`
  }
}

//! ====================Bike models =================================================

const modelsSet = document.getElementById('models-set');

const modelOfBike =document.getElementById('model-of-bike');
const modelComment = document.getElementById('model-comment');

const modelOfBikeError = document.querySelector('.model-of-bike__error');
const modelCommentError = document.querySelector('.model-comment__error');

// -----------------Bike models auto fill----------------
modelOfBike.setAttribute('pattern', `${localStorage.getItem('mainItemName')}|${localStorage.getItem('sideItemName1')}|${localStorage.getItem('sideItemName2')}|${localStorage.getItem('sideItemName3')}|${localStorage.getItem('sideItemName4')}` )

modelsSet.innerHTML = `<option>${localStorage.getItem('mainItemName')}</option>
<option>${localStorage.getItem('sideItemName1')}</option>
<option>${localStorage.getItem('sideItemName2')}</option>
<option>${localStorage.getItem('sideItemName3')}</option>
<option>${localStorage.getItem('sideItemName4')}</option>`

// -------------------Bike models validation----------
const modelOfBikeObj = {
  name: modelOfBike,
  errorMessage: modelOfBikeError,
  patternMismatch: 'enter valid model',
}

const modelCommentObj = {
  name: modelComment,
  errorMessage: modelCommentError,
  patternMismatch: 'enter valid model',
}

validationFields.push(modelOfBikeObj, modelCommentObj);


// !================ BILLING ADDRESS =============================================

const billingFirstName = document.getElementById('billing-first-name');
const billingLastName = document.getElementById('billing-last-name');
const billingStreetAddress = document.getElementById('billing-street-address');
const billingRegion = document.getElementById('billing-region');
const billingZip = document.getElementById('billing-zip');
const billingPhone = document.getElementById('billing-phone');

const billingFirstNameError = document.querySelector('.billing-first-name__error');
const billingLastNameError = document.querySelector('.billing-last-name__error');
const billingStreetAddressError = document.querySelector('.billing-street-address__error');
const billingRegionError = document.querySelector('.billing-region__error');
const billingZipError = document.querySelector('.billing-zip__error');
const billingPhoneError = document.querySelector('.billing-phone__error');

const billingFirstNameObj = {
  name: billingFirstName,
  errorMessage: billingFirstNameError,
  patternMismatch: 'letters or/and numbers only'
}

const billingLastNameObj = {
  name: billingLastName,
  errorMessage: billingLastNameError,
  patternMismatch: 'letters or/and numbers only'
}

const billingStreetAddressObj = {
  name: billingStreetAddress,
  errorMessage: billingStreetAddressError,
}

const billingRegionObj = {
  name: billingRegion,
  errorMessage: billingRegionError,
  patternMismatch: 'invalid name'
}

const billingZipObj = {
  name: billingZip,
  errorMessage: billingZipError,
  typeMismatch: 'numbers only'
}

const billingPhoneObj = {
  name: billingPhone,
  errorMessage: billingPhoneError,
}

validationFields.push(billingFirstNameObj, billingLastNameObj, billingStreetAddressObj, billingRegionObj, billingZipObj, billingPhoneObj)


// !======================Delivery address=============================================

const deliveryFirstName = document.getElementById('delivery-first-name');
const deliveryLastName = document.getElementById('delivery-last-name');
const deliveryStreetAddress = document.getElementById('delivery-street-address');
const deliveryRegion = document.getElementById('delivery-region');
const deliveryZip = document.getElementById('delivery-zip');
const deliveryPhone = document.getElementById('delivery-phone');

const deliveryFirstNameError = document.querySelector('.delivery-first-name__error');
const deliveryLastNameError = document.querySelector('.delivery-last-name__error');
const deliveryStreetAddressError = document.querySelector('.delivery-street-address__error');
const deliveryRegionError = document.querySelector('.delivery-region__error');
const deliveryZipError = document.querySelector('.delivery-zip__error');
const deliveryPhoneError = document.querySelector('.delivery-phone__error');

// --------------Delivery address checkbox autocomplete--------------

const checkbox = document.getElementById('same-as-delivery');
checkbox.addEventListener('input', checkFunc);

function checkFunc() {
  if (checkbox.checked == true)  {
    deliveryFirstName.value = billingFirstName.value;
    deliveryLastName.value = billingLastName.value;
    deliveryPhone.value = billingPhone.value;
    deliveryRegion.value = billingRegion.value;
    deliveryZip.value = billingZip.value;
    deliveryStreetAddress.value = billingStreetAddress.value;

    deliveryFirstNameError.textContent = billingFirstNameError.textContent;
    deliveryLastNameError.textContent = billingLastNameError.textContent;
    deliveryPhoneError.textContent = billingPhoneError.textContent;
    deliveryRegionError.textContent = billingRegionError.textContent;
    deliveryZipError.textContent = billingZipError.textContent;
    deliveryStreetAddressError.textContent = billingStreetAddressError.textContent;

  } else {
    deliveryFirstName.value = '';
    deliveryLastName.value = '';
    deliveryPhone.value = '';
    deliveryRegion.value = '';
    deliveryZip.value = '';
    deliveryStreetAddress.value = '';
    
    deliveryFirstNameError.textContent = '';
    deliveryLastNameError.textContent = '';
    deliveryPhoneError.textContent = '';
    deliveryRegionError.textContent = '';
    deliveryZipError.textContent = '';
    deliveryStreetAddressError.textContent = '';
  }
} 

// --------------Delivery address validation--------------


const deliveryFirstNameObj = {
  name: deliveryFirstName,
  errorMessage: deliveryFirstNameError,
  patternMismatch: 'letters or/and numbers only'
}

const deliveryLastNameObj = {
  name: deliveryLastName,
  errorMessage: deliveryLastNameError,
  patternMismatch: 'letters or/and numbers only'
}

const deliveryStreetAddressObj = {
  name: deliveryStreetAddress,
  errorMessage: deliveryStreetAddressError,
}

const deliveryRegionObj = {
  name: deliveryRegion,
  errorMessage: deliveryRegionError,
  patternMismatch: 'invalid name'
}

const deliveryZipObj = {
  name: deliveryZip,
  errorMessage: deliveryZipError,
  typeMismatch: 'numbers only'
}

const deliveryPhoneObj = {
  name: deliveryPhone,
  errorMessage: deliveryPhoneError,
}

validationFields.push(deliveryFirstNameObj, deliveryLastNameObj, deliveryStreetAddressObj, deliveryRegionObj, deliveryZipObj, deliveryPhoneObj)

//! =======================Delivery Date=======================

const month = document.getElementById('month');
const year = document.getElementById('year');
const day = document.getElementById('day');

const monthError = document.querySelector('.month__error');
const yearError = document.querySelector('.year__error');
const dayError = document.querySelector('.day__error');

let daysSet = document.getElementById('days-set');

// -----------------Delivery Date Days/Months/Years relation-----------------

month.addEventListener('change', daysSetFunc);
year.addEventListener('change', daysSetFunc);

function daysSetFunc () {
  daysSet.innerHTML = '';
  day.value = '';
  if((year.value != '') && (month.value != '')) {
    for(i = 1; i < 29; i++) {
    daysSet.innerHTML += `<option>${i}</option>`
    }
    if((month.value === 'January') ||
    (month.value === 'May') ||
    (month.value === 'March') ||
    (month.value === 'July') ||
    (month.value === 'August') ||
    (month.value === 'October') ||
    (month.value === 'December')) {
      daysSet.innerHTML += `<option>29</option>
      <option>30</option>
      <option>31</option>`
    }  
    else if ((month.value === 'April') ||
    (month.value === 'June') ||
    (month.value === 'September') ||
    (month.value === 'November')) {
      daysSet.innerHTML += `<option>29</option>
      <option>30</option>`
    } else if ((month.value === 'February') && 
    ((year.value === '2024') || (year.value ==='2028')) ) {
      daysSet.innerHTML += `<option>29</option>`
    } 
  } 
} 

// ------------------------Delivery Date Validation------------------------

const dayObj = {
  name: day,
  errorMessage: dayError,
  typeMismatch: 'only numbers'
}

const monthObj = {
  name: month,
  errorMessage: monthError,
  patternMismatch: 'invalid name'
}

const yearObj = {
  name: year,
  errorMessage: yearError,
  typeMismatch: 'only numbers'
}

validationFields.push(dayObj, monthObj, yearObj);


//! ========================== Payment validation ======================
const typeOfCard = document.getElementById('mastercard');
const cardNumber = document.getElementById('card-number');
const expiration = document.getElementById('expiration');
const cvv = document.getElementById('cvv');

const cardNumberError = document.querySelector('.card-number__error');
const expirationError = document.querySelector('.expiration__error');
const cvvError = document.querySelector('.cvv__error')

const cardNumberObj = {
  name: cardNumber,
  errorMessage: cardNumberError,
}

const expirationObj = {
  name: expiration,
  errorMessage: expirationError,
  patternMismatch: 'not valid value',
}

const cvvObj = {
  name: cvv,
  errorMessage: cvvError,
  patternMismatch: 'not valid value',
}

validationFields.push(cardNumberObj, expirationObj, cvvObj)


// ================================= Create account ================================


const accountUsername = document.getElementById('account-username');
const accountPassword = document.getElementById('account-password');
const accountPasswordConfirm = document.getElementById('account-password-confirm');

const accountUsernameError = document.querySelector('.account-username__error');
const accountPasswordError = document.querySelector('.account-password__error');
const accountPasswordConfirmError = document.querySelector('.account-password-confirm__error');

const accountUsernameObj = {
  name: accountUsername,
  errorMessage: accountUsernameError,
  patternMismatch: 'letters or/and numbers only',
}

const accountPasswordObj = {
  name: accountPassword,
  errorMessage: accountPasswordError,
}

accountPasswordConfirm.addEventListener('input', () => {
  if (accountPasswordConfirm.value !== accountPassword.value) {
    accountPasswordConfirmError.textContent = 'passwords do not match'; 
  } else{
    accountPasswordConfirmError.textContent = ''
  }
});

form.addEventListener('submit', (event) => {
  if (accountPasswordConfirm.value !== accountPassword.value) {
    event.preventDefault();
    accountPasswordConfirmError.textContent = 'passwords do not match'; 
  } else{
    accountPasswordConfirmError.textContent = ''
  }
})

validationFields.push(accountUsernameObj, accountPasswordObj);

// ========================== Validation Algorithm ======================

validationFields.forEach((item) => {
  item.name.addEventListener('input', () => {
    if(item.name.validity.valid) {
      item.errorMessage.textContent = '';
      setLocalStorage();
    } else {
      showError(item.name, item.errorMessage, item.patternMismatch, item.typeMismatch);
    }
  }); 
  form.addEventListener('submit', function(event) {
    if(!item.name.validity.valid) {
      showError(item.name, item.errorMessage, item.patternMismatch, item.typeMismatch);
      event.preventDefault();
    }
  }); 
});


function setLocalStorage () {
  localStorage.setItem('bike', modelOfBike.value);
  localStorage.setItem('comment', modelComment.value);

  localStorage.setItem('billingFirstName', billingFirstName.value);
  localStorage.setItem('billingLastName', billingLastName.value);
  localStorage.setItem('billingStreetAddress', billingStreetAddress.value);
  localStorage.setItem('billingRegion', billingRegion.value);
  localStorage.setItem('billingZip', billingZip.value);
  localStorage.setItem('billingPhone', billingPhone.value);

  localStorage.setItem('deliveryFirstName', deliveryFirstName.value);
  localStorage.setItem('deliveryLastName', deliveryLastName.value);
  localStorage.setItem('deliveryStreetAddress', deliveryStreetAddress.value);
  localStorage.setItem('deliveryRegion', deliveryRegion.value);
  localStorage.setItem('deliveryZip', deliveryZip.value);
  localStorage.setItem('deliveryPhone', deliveryPhone.value);

  localStorage.setItem('month', month.value);
  localStorage.setItem('year', year.value);
  localStorage.setItem('day', day.value);

  localStorage.setItem('typeOfCard', document.querySelector('input[name="card"]:checked').value);
  localStorage.setItem('cardNumber', cardNumber.value);
  localStorage.setItem('expiration', expiration.value);

  localStorage.setItem('userName', accountUsername.value);
}





