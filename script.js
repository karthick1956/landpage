document.getElementById('transferForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const sender = document.getElementById('sender').value.trim();
  const recipient = document.getElementById('recipient').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);
  const message = document.getElementById('message');

  if (sender && recipient && amount > 0) {
    message.textContent = `₹${amount} transferred from ${sender} to ${recipient}.`;
    message.style.color = 'green';
  } else {
    message.textContent = 'Please fill in all fields correctly.';
    message.style.color = 'red';
  }
});
