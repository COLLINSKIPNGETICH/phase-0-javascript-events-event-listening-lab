function addingEventListener() {
  const input = document.getElementById('input');

  // Option 1: Using an anonymous function as the callback
  input.addEventListener('click', function() {
    alert('I was clicked!');
  });

  // Option 2: Using a named function as the callback
  // Uncomment the lines below if you choose this option
  // input.addEventListener('click', clickAlert);
}

// Option 2: Named function for callback
function clickAlert() {
  alert('I was clicked!');
}

// Call the outer function to execute the event listener setup
addingEventListener();
