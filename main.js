// console.log("Hello can you see me!")

const allProducts = document.querySelector(".all-products");

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
    
    const createNewElement = document.createElement("span");
    createNewElement.innerText = "Something";
    allProducts.appendChild(createNewElement);
});
// submitButton.appendChild(createNewElement);