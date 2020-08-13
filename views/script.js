function openForm() {
    document.getElementById("myform").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myform").style.display = "none";
  }

  openbutton = document.getElementById('open-button')
  document.getElementById('open-button').addEventListener('click', function(){
      openbutton.style.display = 'none';
  })

  closebutton = document.getElementById('close-button')
  document.getElementById('close-button').addEventListener('click', function(){
      openbutton.style.display = 'block';
  })

