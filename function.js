     function saveForm() {
         const name = document.getElementById('name').value;
         const email = document.getElementById('email').value;
         const message = document.getElementById('message').value; 
         const date = document.getElementById('date').value; 
         
         
         if (name.length !== 0 && email.includes("@") && message.length !== 0) {
            fetch('http://localhost:9000/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message ,date})
            })
         }
         else {
             alert('Complete the form')
         }
    }
        