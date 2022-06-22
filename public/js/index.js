
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

  const delButtonHandler = async (event) => {
   if(event.target.hasAttribute('data-id')){
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete project');
    }


   }
  
    }
  







//   const deleteButton = document.querySelector('.delete')
//   const button = document.querySelector('#submit');


//   deleteButton.addEventListener('click',delButtonHandler)
//   button.addEventListener('click', storeInputValue)




