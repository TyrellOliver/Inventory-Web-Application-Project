const allProducts = document.querySelector(".all-products"); // Selecting the container to put the new products.

const submitButton = document.querySelector("#submit"); // Selecting the submit input
submitButton.addEventListener("click", () => {
    addHerb();
});

// const herbName = document.getElementById("name").value
const addHerb = () => {
    const name = document.querySelector("#name").value
    const price = document.querySelector("#price").value
    const origin = document.querySelector("#origin").value
    const description = document.querySelector("#description").value
    const image = document.querySelector("#img").value

    const createNewElement = document.createElement("div");
    createNewElement.classList.add("herb-product");
    createNewElement.innerHTML = `
    <img id="pic3" src="${image}" />
    <div class="product-info3"
        <h2>${name}</h2>
        <p>$${price}</p>
        <p>Origin: ${origin}</p>
        <p id="product3-p">${description}</p>
        <input id="delete" type="button" value="Delete" />
        <input id="in-Stock" type="button" value="InStock" />

    `;

    const deleteButton = createNewElement.querySelector("#delete");
    deleteButton.addEventListener("click", () => {
        createNewElement.remove();
    });

    allProducts.appendChild(createNewElement);
};


//// The Reset Button
const resetForm = document.querySelector(".new-herb");

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    resetForm.addEventListener("reset")
});

//// The Delete Button
const herbProduct = document.querySelector(".herb-product")

const deleteButton = document.querySelector("#delete");
    deleteButton.addEventListener("click", () => {
        herbProduct.remove();
    });


const inStock = document.querySelector("#in-Stock");
console.log(inStock);
inStock.addEventListener("click", () => {})
