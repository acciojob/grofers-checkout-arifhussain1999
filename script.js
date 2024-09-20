const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const rows = document.querySelectorAll('tr');
let totalPrice = 0;

const getSum = () => {
//Add your code here
const prices = document.querySelectorAll('.price'); // Get all price cells
    let totalPrice = 0; // Initialize total price

    // Loop through the price cells and sum the values
    prices.forEach(priceCell => {
        totalPrice += parseFloat(priceCell.innerText); // Convert to number and add to total
    });

    // Create a new row for the total
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Span both columns
    totalCell.innerText = `Total Price: Rs ${totalPrice}`; // Set total price text

    totalRow.appendChild(totalCell); // Append total cell to the row
    document.querySelector('table').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

