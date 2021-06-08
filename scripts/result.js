const bike = document.querySelector('.bike')
const comment = document.querySelector('.comment')

const billingFirstName = document.querySelector('.billing-address__first-name')
const billingLastName = document.querySelector('.billing-address__last-name')
const billingStreetAddress = document.querySelector('.billing-address__street-address')
const billingRegion = document.querySelector('.billing-address__region')
const billingZip = document.querySelector('.billing-address__zip')
const billingPhone = document.querySelector('.billing-address__phone')

const deliveryFirstName = document.querySelector('.delivery-address__first-name')
const deliveryLastName = document.querySelector('.delivery-address__last-name')
const deliveryStreetAddress = document.querySelector('.delivery-address__street-address')
const deliveryRegion = document.querySelector('.delivery-address__region')
const deliveryZip = document.querySelector('.delivery-address__zip')
const deliveryPhone = document.querySelector('.delivery-address__phone')

const year = document.querySelector('.year')
const month = document.querySelector('.month')
const day = document.querySelector('.day')

const typeOfCard = document.querySelector('.type-of-card')
const cardNumber = document.querySelector('.card-number')
const expiration = document.querySelector('.expiration')

const userName= document.querySelector('.user-name')



bike.textContent = localStorage.getItem('bike');
comment.textContent = localStorage.getItem('comment')

billingFirstName.textContent = localStorage.getItem('billingFirstName')
billingLastName.textContent = localStorage.getItem('billingLastName')
billingStreetAddress.textContent = localStorage.getItem('billingStreetAddress')
billingRegion.textContent = localStorage.getItem('billingRegion')
billingZip.textContent = localStorage.getItem('billingZip')
billingPhone.textContent = localStorage.getItem('billingPhone')

deliveryFirstName.textContent = localStorage.getItem('deliveryFirstName')
deliveryLastName.textContent = localStorage.getItem('deliveryLastName')
deliveryStreetAddress.textContent = localStorage.getItem('deliveryStreetAddress')
deliveryRegion.textContent = localStorage.getItem('deliveryRegion')
deliveryZip.textContent = localStorage.getItem('deliveryZip')
deliveryPhone.textContent = localStorage.getItem('deliveryPhone')

year.textContent = localStorage.getItem('year')
month.textContent = localStorage.getItem('month')
day.textContent = localStorage.getItem('day')

typeOfCard.textContent = localStorage.getItem('typeOfCard')
cardNumber.textContent = localStorage.getItem('cardNumber')
expiration.textContent = localStorage.getItem('expiration')

userName.textContent = localStorage.getItem('userName')
