// console.log("Hello can you see me!")

const allProducts = document.querySelector(".all-products"); // Selecting the container to put the new products.

// const herbName = document.getElementById("name").value

const submitButton = document.querySelector("#submit"); // Selecting the submit input
submitButton.addEventListener("click", () => {

    addHerb();



    // const createNewElement = document.createElement("span"); // Creates the new element
    // createNewElement.innerText = "Something"; // Gives the element something, in this case, text
    // allProducts.appendChild(createNewElement); // Puts that new element onto the ".all-products" div container 

    // allProducts.appendChild(herbName)
});

// const herbName = document.getElementById("name").value
const addHerb = () => {
    const name = document.querySelector("#name").value
    const price = document.querySelector("#price").value
    const origin = document.querySelector("#origin").value

    // const deleteButton = document.querySelector("#delete")
    // deleteButton.addEventListener("click", () => {
    //     deleteButton.removeChild(allProducts)
    // });

    const createNewElement = document.createElement("div");
    createNewElement.classList.add("Product3")
    createNewElement.innerHTML = `
        <h2>${name}</h2>
        <p>Price: $${price}</p>
        <p>Origin: ${origin}</p>
    `;
    allProducts.appendChild(createNewElement);
}

const newEle = document.createElement("h2")
newEle


//// The Reset Button
const resetForm = document.querySelector(".new-herb")

const resetButton = document.querySelector("#reset")

resetButton.addEventListener("click", () => {
    resetForm.addEventListener("reset")
})


