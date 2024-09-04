let addColor = {
    car: "red",
    house: "green",
    game: "blue",
    videoGame: "yellow",
    show: "purple",
};

// for (let i=0; i<jsonDatas.length; i++) {
//     jsonDatas[i].color=addColor[i];
// }

for (let product of jsonDatas) {
    product.color = addColor[product.type];
}

// for (let key in jsonDatas) {
//     console.log(jsonDatas[key]);
// }

// Function to populate table
function displayProducts(products) {
    const tableBody = document.querySelector('#data-table');

    products.forEach(item => {
        let row = document.createElement('tr');
        // Create table cells
        let nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        let typeCell = document.createElement('td');
        typeCell.textContent = item.type;
        row.appendChild(typeCell);

        let descriptionCell = document.createElement('td');
        descriptionCell.textContent = item.description;
        row.appendChild(descriptionCell);

        let priceCell = document.createElement('td');
        priceCell.textContent = `$${item.price}`;
        row.appendChild(priceCell);

        let quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        let colorCell = document.createElement('td');
        colorCell.textContent = item.color || 'N/A';  // If color is not defined
        row.appendChild(colorCell);

        // Append row to table body
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table when the page loads
displayProducts(jsonDatas);


document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector('#filter-button');
    const typeInput = document.querySelector('#type-input');

    function filterProducts() {
        const type = typeInput.value.trim().toLowerCase();
        const filteredProducts = jsonDatas.filter(item => item.type.toLowerCase() === type);
        document.getElementById("data-table").innerHTML = "";
        document.getElementById("data-table").innerHTML = "<tr>\n" +
            "            <th>Name</th>\n" +
            "            <th>Type</th>\n" +
            "            <th>Description</th>\n" +
            "            <th>Price</th>\n" +
            "            <th>Quantity</th>\n" +
            "            <th>Color</th>\n" +
            "        </tr>";
        displayProducts(filteredProducts);
    }

    filterButton.addEventListener('click', filterProducts)
    typeInput.addEventListener('input', filterProducts);
});

const input = document.getElementById('type-input');
input.addEventListener('input', e => {
    console.log('event', e.target.value);
});