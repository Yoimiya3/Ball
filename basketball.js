let count = 0; // Initial number displayed
const itemCost = 15.97; // Cost per item
const shipping = 4.99; // Shipping and Handling Fee

function increment() {
  count++;
  document.getElementById("number-display").textContent = count;
  updateOrderSummary();
}

function decrement() {
  if (count > 0) {
    count--;
    document.getElementById("number-display").textContent = count;
    updateOrderSummary();
  }
}

function updateOrderSummary() {
  // Update item count in order summary
  document.getElementById("item-count").textContent = count;

  // Calculate total cost before tax
  const totalCost = count * itemCost;
  document.getElementById("item-cost").textContent = totalCost.toFixed(2);

  // Calculate total cost with shipping
  const totalCostWithShipping = totalCost + shipping;
  document.getElementById("total-cost").textContent = totalCostWithShipping.toFixed(2);

  // Calculate tax amount
  const taxAmount = totalCostWithShipping * 0.1;
  document.getElementById("tax-amount").textContent = taxAmount.toFixed(2);

  // Calculate order total
  const orderTotal = totalCostWithShipping + taxAmount;
  document.getElementById("order-total").textContent = orderTotal.toFixed(2);
}

// Set initial display of shipping box
document.getElementById("shipping-box").textContent = "$4.99";

// Add event listeners to increment and decrement buttons
document.getElementById("increment-btn").addEventListener("click", increment);
document.getElementById("decrement-btn").addEventListener("click", decrement);
