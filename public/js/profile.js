
const newPost = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#post_title').value.trim();
    const post_text = document.querySelector('#post_text').value.trim();
  

    if (post_title && post_text) {
      const response = await fetch(`/api/history`, {
        method: 'POST',
        body: JSON.stringify({ post_title, post_text,}),
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


  const replyPost = async (event) => {
    event.preventDefault();
  
    const reply_text = document.querySelector('#reply_text').value.trim();
    
  

    if (reply_text) {
      const response = await fetch(`/api/reply`, {
        method: 'POST',
        body: JSON.stringify({ reply_text,}),
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





  document
  .querySelector('#post')
  .addEventListener('click', newPost);

document
  .querySelector('#reply')
  .addEventListener('click', replyPost);

// const replyBtn = document.querySelector('#reply')

// replyBtn.addEventListener('click', replyPost)
  
  // const button = document.querySelector('#post')
  //   button.addEventListener('click', newPost);
  



