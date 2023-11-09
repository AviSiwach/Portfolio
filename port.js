function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    // Display success message
    alert('Thank you, ' + name + '! Your message has been sent successfully.');
  }