const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const rows = document.querySelectorAll('tr');
let totalPrice = 0;

const getSum = () => {
//Add your code here
 const rows = document.querySelectorAll('tr'); // Get all table rows
    let totalPrice = 0; // Initialize total price

    // Loop through the rows (excluding the header)
    rows.forEach(row => {
        const priceCell = row.querySelector('.price'); // Get the price cell
        if (priceCell) { // Check if the price cell exists
            totalPrice += parseFloat(priceCell.innerText); // Add price to total
        }
    });

    // Create a new row for the total
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Make the total cell span both columns
    totalCell.innerText = `Total Price: Rs ${totalPrice}`; // Set the total text

    totalRow.appendChild(totalCell); // Append the total cell to the new row
    document.querySelector('table').appendChild(totalRow); 
};

getSumBtn.addEventListener("click", getSum);

