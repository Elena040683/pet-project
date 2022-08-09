const data = [
    {
      "name": "Jennifer",
      "img": "./assets/images/pets-jennifer.png",
    },
    {
      "name": "Sophia",
      "img": "./assets/images/pets-sophia.png",
    },
    {
      "name": "Woody",
      "img": "./assets/images/pets-woody.png",
    },
    {
      "name": "Scarlett",
      "img": "./assets/images/pets-scarlet.png",
    },
    {
      "name": "Katrine",
      "img": "./assets/images/pets-katrine.png",
    },
    {
      "name": "Timmy",
      "img": "./assets/images/pets-timmy.png",
    },
    {
      "name": "Freddie",
      "img": "./assets/images/pets-freddie.png",
    },
    {
      "name": "Charly",
      "img": "./assets/images/pets-charly.png",
    },
  ];

const refs = {
    btnLeft: document.querySelector('#btn-left'),
    btnRight: document.querySelector('#btn-right'),
    carousel: document.querySelector('#carousel'),
    itemLeft: document.querySelector('#items-left'),
    itemRight: document.querySelector('#items-right'),
    itemActive: document.querySelector('#items-active'),

    container: document.querySelector('#cardContainer'),
} 

const createCardTemplate = ({name, img}) => {
   return `<li class="friends__item">
      <img src=${img} alt=${name}/>
      <h3 class="subheading">${name}</h3>
      <button type="button" class="button--friends"  data-action=${name}>Learn more</button>
   </li>`
    // const card = document.createElement('div');
 // titleEl.textContent = name;

    // const btnEl  = document.createElement('button');
    // btnEl.classList.add('button--friends');
    // btnEl.type = 'button';
    // btnEl.textContent = 'Learn more';
    // btnEl.dataset.action = name;
    
    // card.append(imgEl, titleEl, btnEl);

    // return card;   // card.classList.add('friends__item');
    // card.dataset.name = name;

    // const imgEl = document.createElement('img');
    // imgEl.src = img;
    // imgEl.alt = name;

    // const titleEl = document.createElement('h3');
    // titleEl.classList.add('subheading')
    
}

refs.btnRight.addEventListener('click', onBtnRightClick);
refs.btnLeft.addEventListener('click', onBtnLeftClick);

const elements = data.map((el) => createCardTemplate(el));
console.log(elements);
let state = [elements[3], elements[4], elements[5]];
let n = 3;

// if (width < 1279 && width > 768) {
//   n = 2;
 
// }

// if((window.matchMedia('(max-width: 1279px)').matches) && (window.matchMedia('(min-width: 768px)').matches)) {
//   n = 2;
//   state = [elements[3], elements[4]];
// } else if((window.matchMedia('(max-width: 767px)').matches)) {
//   n = 1;
//   state = [elements[2]];
// }

function randomArr () {
  let newArr = [];
  while (newArr.length < n) {
    let item = elements[Math.floor(Math.random()*8)];
    if ((!state.includes(item)) && (!newArr.includes(item))) {
      newArr.push(item);
    }
  }
  state = newArr;
}

refs.carousel.addEventListener('animationend', (animationEvent) => {
    console.log(animationEvent);
    
    if (animationEvent.animationName === 'move-right') {
        refs.carousel.classList.remove('transition-right');
        refs.itemActive.innerHTML = refs.itemRight.innerHTML;
    } else {
        refs.carousel.classList.remove('transition-left');
        refs.itemActive.innerHTML = refs.itemLeft.innerHTML;
    }

    refs.btnRight.addEventListener('click', onBtnRightClick);
    refs.btnLeft.addEventListener('click', onBtnLeftClick);
})

function onBtnRightClick () {
    refs.carousel.classList.add('transition-right');
    refs.btnRight.removeEventListener('click', onBtnRightClick);
    refs.btnLeft.removeEventListener('click', onBtnLeftClick);
    refs.itemRight.innerHTML = '';
        randomArr();
        refs.itemRight.insertAdjacentHTML('beforeend', state.join(''));
}

function onBtnLeftClick () {
    refs.carousel.classList.add('transition-left');
    refs.btnLeft.removeEventListener('click', onBtnLeftClick);
    refs.btnRight.removeEventListener('click', onBtnRightClick);
    refs.itemLeft.innerHTML = '';
    randomArr();
    refs.itemLeft.insertAdjacentHTML('beforeend', state.join(''));

}





