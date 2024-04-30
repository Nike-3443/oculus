'use strict';

const tabItem = document.querySelectorAll('.features__button');
const tabContent = document.querySelectorAll('.features__content-item');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;
    tabItem.forEach(function(item){
        item.classList.remove('features__button--active');
    });
    tabContent.forEach(function(item){
        item.classList.remove('features__content-item--active');
    });
    tabTarget.classList.add('features__button--active');
    document.querySelector(`#${button}`).classList.add('features__content-item--active');
}