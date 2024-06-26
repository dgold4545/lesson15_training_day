// ******* Додавання прослуховувача подій на кожен елемент ******* \\
// const constainer = document.querySelector(".js-container");

// [...constainer.children].forEach((box) => {
//   box.addEventListener("click", handlerClick);
// });

// function handlerClick(event) {
//   const color = event.currentTarget.dataset.color;
//   console.log(color);
// }
// ************** Делегування подій ************** \\
// const constainer = document.querySelector(".js-container");

// constainer.addEventListener("click", handlerClick);

// function handlerClick(event) {
//   // if (event.target === event.currentTarget) {
//   //   return;
//   // }

//   if (!event.target.classList.contains("js-box")) {
//     return;
//   }
//   const color = event.target.dataset.color;
//   console.log(color);
//   // console.log(event.target.dataset.color);
//   // console.log(event.currentTarget);
// }
// **************** stopPropagation **************** \\
// const red = document.querySelector(".js-box-red");
// const black = document.querySelector(".js-box-black");
// const green = document.querySelector(".js-box-green");

// red.addEventListener("click", handlerClick);
// black.addEventListener("click", handlerClick);
// green.addEventListener("click", handlerClick);

// function handlerClick(event) {
//   const isConfirm = confirm(
//     `click on element ${event.currentTarget.id}, will stopPropagation need to call?`
//   );

//   if (isConfirm) {
//     event.stopPropagation();
//   }
// }
// **************** stopImmediatePropagation **************** \\
// const red = document.querySelector(".js-box-red");

// red.addEventListener("click", firstHandlerClick);
// red.addEventListener("click", secondHandlerClick);
// red.addEventListener("click", thirdHandlerClick);

// function firstHandlerClick(event) {
//   alert("First handler");

//   const isConfirm = confirm(
//     "Will the method stopImmediatePropagation need to call"
//   );

//   if (isConfirm) {
//     event.stopImmediatePropagation();
//   }
// }
// function secondHandlerClick(event) {
//   alert("Second handler");

//   const isConfirm = confirm(
//     "Will the method stopImmediatePropagation need to call"
//   );

//   if (isConfirm) {
//     event.stopImmediatePropagation();
//   }
// }
// function thirdHandlerClick(event) {
//   alert("third handler");

//   const isConfirm = confirm(
//     "Will the method stopImmediatePropagation need to call"
//   );

//   if (isConfirm) {
//     event.stopImmediatePropagation();
//   }
// }
// **************** Практика **************** \\
// Створи картки з товарами на основі масиву products, приклад картки https://prnt.sc/KmgDlzqOIA3M
// Реалізуй делегування подій на колекції карток
// Після кліку на картку повинно з'являтись модальне вікно з детальною інформацією про продукт, приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
// Для реалізації модального вікна використай бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)

const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Монітор",
    price: 3000,
    description: "23-дюймовий монітор з Full HD роздільною здатністю.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Ноутбук",
    price: 20000,
    description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Смартфон",
    price: 8000,
    description: "Оснащений потрійною камерою та багатоядерним процесором.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Планшет",
    price: 12000,
    description:
      "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
  },
];

const list = document.querySelector(".js-products");

list.insertAdjacentHTML("afterbegin", createMarkup(products));
list.addEventListener("click", handlerGetProduct);

function handlerGetProduct(event) {
  if (event.currentTarget === event.target) {
    return;
  }

  const parent = event.target.closest(".js-item");
  const currentId = Number(parent.dataset.productId);
  const currentProduct = products.find(({ id }) => id === currentId);

  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${currentProduct.img}" alt="${currentProduct.name}">
      <h2>${currentProduct.name}</h2>
      <h3>${currentProduct.price}</h3>
      <p>${currentProduct.description}</p>
    </div>
    `);

  instance.show();
}

function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, price, id }) => `
    <li class="item js-item" data-product-id="${id}">
        <img src="${img}" alt="${name}">
        <h2>${name}</h2>
        <p>Ціна: ${price} грн</p>
      </li>
  `
    )
    .join("");
}

// list.append()
// list.appendChild()

// const fragment = document.createDocumentFragment();

// fragment.appendChild(document.createElement("li"));

// console.log(fragment)

// list.appendChild(fragment)`
