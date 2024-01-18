const list = document.querySelector(".list-products");

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => showAll(products));

function formartCurr(value) {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function showAll(productsArray) {
  let newList = ``;
  productsArray.forEach((product) => {
    newList += `
      <li class="list-product">
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="price">${formartCurr(product.price)}</p>
      </li>
    `;
  });

  list.innerHTML = newList;
}

function mapAll() {
  const newPrices = products.map((product) => ({
    //Spread Operator
    ...product,
    price: formartCurr(product.price * 0.9),
  }));

  showAll(newPrices);
}

function sumAll() {
  const TotalValue = products.reduce((acc, curr) => acc + curr.price, 0);
  const desc = TotalValue * 0.9;
  list.innerHTML = `
    <li class="list-product">
      <br>
      <p>O valor total dos itens</p>
      <br>
      <p>Sem Desconto:<br> ${formartCurr(TotalValue)}</p>
      <br>
      <p>Com 10% de Desconto:<br> ${formartCurr(desc)}</p>
      <br>
    </li>
  `;
}

function filterAll() {
  const filterVegan = products.filter((product) => product.vegan === true);
  showAll(filterVegan);
}
