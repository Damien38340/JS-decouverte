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
    for (let item of product.items) {
        item.color = addColor[product.type];
    }
}

for (let key in jsonDatas) {
    console.log(jsonDatas[key]);
}
//
// for (let item of jsonDatas){
//     console.log(item);
// }

let isInitialLoad = true;

// Flatten the nested structure using nested loops
// function getFlattenedItems(products) {
//     let flattenedItems = [];
//     products.forEach(category => {
//         category.items.forEach(item => {
//             flattenedItems.push({
//                 ...item,
//                 type: category.type
//             });
//         });
//     });
//     return flattenedItems;
// }
// Function to populate table
function displayProducts(products) {
    const tableBody = document.querySelector('#data-table');

    if (!isInitialLoad) {
        // Clear existing table rows if not the initial load
        tableBody.innerHTML = '';
    }

    products.forEach(item => {
        let itemsType = item.items;
        itemsType.forEach(property => {
            let row = document.createElement('tr');
            // Create table cells
            let nameCell = document.createElement('td');
            nameCell.textContent = property.name;
            row.appendChild(nameCell);

            let typeCell = document.createElement('td');
            typeCell.textContent = item.type;
            row.appendChild(typeCell);

            let descriptionCell = document.createElement('td');
            descriptionCell.textContent = property.description;
            row.appendChild(descriptionCell);

            let priceCell = document.createElement('td');
            priceCell.textContent = `$${property.price}`;
            row.appendChild(priceCell);

            let quantityCell = document.createElement('td');
            quantityCell.textContent = property.quantity;
            row.appendChild(quantityCell);

            let colorCell = document.createElement('td');
            colorCell.textContent = property.color || 'N/A';  // If color is not defined
            row.appendChild(colorCell);

            // color the out-of-stock items
            if (property.quantity === 0) {
                row.classList.add('out-of-stock');
            }
            // Append row to table body
            tableBody.appendChild(row);

        })

    });
    isInitialLoad = false;
}

// Initial call to display all products
displayProducts(jsonDatas);

document.addEventListener('DOMContentLoaded', () => {
    const typeInput = document.querySelector('#type-input');
    let showOutOfStock = document.querySelector('#stock');
    let sortByNameAsc = document.querySelector('#sortByNameAsc');
    let sortByNameDesc = document.querySelector('#sortByNameDesc');
    let sortByPriceAsc = document.querySelector('#sortByPriceAsc');
    let sortByPriceDesc = document.querySelector('#sortByPriceDesc');

    let currentSortOrder = "";


    function filterProducts() {
        const type = typeInput.value.trim().toLowerCase();
        let filteredProducts = jsonDatas;

        if (type !== "") {
            filteredProducts = filteredProducts.filter(item => item.type.toLowerCase() === type);
        }

        if (!showOutOfStock.checked) {
            filteredProducts.forEach(item => {
                item.items = item.items.filter(property => property.quantity > 0);
            }
            )
        }

        if (currentSortOrder === 'name asc') {
            filteredProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        }

        if (currentSortOrder === 'name desc') {
            filteredProducts = filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        }
        if (currentSortOrder === 'price asc') {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        }
        if (currentSortOrder === 'price desc') {
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        }
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

    typeInput.addEventListener('input', filterProducts);
    showOutOfStock.addEventListener('change', filterProducts);
    sortByNameAsc.addEventListener('click', () => {
        currentSortOrder = 'name asc';
        filterProducts()
    });
    sortByNameDesc.addEventListener('click', () => {
        currentSortOrder = 'name desc';
        filterProducts()
    });
    sortByPriceAsc.addEventListener('click', () => {
        currentSortOrder = 'price asc';
        filterProducts()
    });
    sortByPriceDesc.addEventListener('click', () => {
        currentSortOrder = 'price desc';
        filterProducts()
    });
});

function storeInput() {

    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
    const color = document.getElementById("color").value;

    const newItem = {
        name: name,
        type: type,
        description: description,
        price: price,
        quantity: quantity,
        color: color
    };

    jsonDatas.push(newItem);
    displayProducts(jsonDatas);
    document.getElementById("Add item").reset();

}

const input = document.getElementById('type-input');
input.addEventListener('input', e => {
    console.log('event', e.target.value);
});