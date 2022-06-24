
const newPost = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#post_title').value.trim();
    const post_text = document.querySelector('#post_text').value.trim();
    if (post_title && post_text) {
      const response = await fetch(`/api/history`, {
        method: 'POST',
        body: JSON.stringify({ post_title, post_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/history/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  const button = document.querySelector('#post')
    button.addEventListener('click', newPost);
  



