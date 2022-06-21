
console.log('hello');







const storeInputValue = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const post_name = document.querySelector('#test').value.trim();
    console.log(post_name)
  
    if (post_name) {
      // Send a POST request to the API endpoint
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ post_name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  const button = document.querySelector('#submit');

  button.addEventListener('click', storeInputValue)




