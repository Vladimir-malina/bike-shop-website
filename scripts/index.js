let mainItemName = document.querySelector('.main-item__name').innerText;
let sideItemName1 = document.querySelector('.side-item__name_1').innerText;
let sideItemName2 = document.querySelector('.side-item__name_2').innerText;
let sideItemName3 = document.querySelector('.side-item__name_3').innerText;
let sideItemName4 = document.querySelector('.side-item__name_4').innerText;

localStorage.setItem('mainItemName', mainItemName);
localStorage.setItem('sideItemName1', sideItemName1);
localStorage.setItem('sideItemName2', sideItemName2);
localStorage.setItem('sideItemName3', sideItemName3);
localStorage.setItem('sideItemName4', sideItemName4);
