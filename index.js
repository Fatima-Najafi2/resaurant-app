const menus = [
  {
    name: 'Kabuli Palau',
    ingredients: ['lamb ', 'carrot', 'raisins'],
    id: 0,
    price: 14,
    emoji: './first.jpeg',
  },
  {
    name: 'Bolani',
    ingredients: ['Potato ', 'gandana'],
    price: 50,
    emoji: './third.jpeg',
    id: 1,
  },
  {
    name: 'Ashak',
    ingredients: ['gandana', 'yeast'],
    price: 60,
    emoji: './second.jpeg',
    id: 2,
  },
  {
    name: 'Rice',
    ingredients: ['rice', 'Chicken', 'water'],
    price: 30,
    emoji: './five.jpeg',
    id: 3,
  },
  {
    name: 'Kabab',
    ingredients: ['Chicken', 'Ginger'],
    price: 50,
    emoji: './fourth.jpeg',
    id: 4,
  },
];

let totalCost = 0;

// Render menus.....

const container = document.getElementById('container');

menus.forEach((menu, index) => {
  const myMenu = document.createElement('div');
  myMenu.classList.add('menu');
  myMenu.innerHTML = `
    <div class="menu-img">
      <img  class="image" src="${menu.emoji}" alt="" />
    </div>
    <div class="menu-info">
      <h2>${menu.name}</h2>
      <p>${menu.ingredients.join(', ')}</p>
      <h3>$${menu.price}</h3>
    </div>
    <div class="menu-btn">
      <button class="add-btn" data-name="${menu.name}" data-price="${
    menu.price
  }">
        <img src="./Text.png" alt="" />
      </button>
    </div>
  `;

  container.appendChild(myMenu);
  if (index < menus.length) {
    const hr = document.createElement('hr');
    container.appendChild(hr);
  }
});

//   Order the foods............................

const addBtn = document.querySelectorAll('.add-btn');
const order = document.getElementById('order');
const totalCostElement = document.querySelector('.total-price p');

addBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    order.style.display = 'block';
    const name = btn.getAttribute('data-name');
    const price = parseFloat(btn.getAttribute('data-price'));
    totalCost += price;
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
    addToOrder(name, price);
  });
});

function addToOrder(name, price) {
  const foodOrder = document.querySelector('.food-order');
  const orderInfo = document.createElement('div');
  orderInfo.classList.add('order-info');
  orderInfo.innerHTML = `
    <h4>${name}</h4>
  <p class="remove-btn" onclick="removeFood(this)">remove</p>
    <p>$${price.toFixed(2)}</p>
  `;
  foodOrder.appendChild(orderInfo);
}

// Remove the food.................
function removeFood(element) {
  element.parentElement.remove(); // Removes the parent element containing the remove button
}

// Pay section ...................
const card = document.querySelector('.card');
const pay = document.querySelector('.order-btn');
const background = document.querySelector('.background');

pay.addEventListener('click', () => {
  background.classList.add('blur-background');
  card.style.display = 'block';
});
