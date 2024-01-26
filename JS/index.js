function sendMail() {
  if (document.getElementById('username').value != '' && document.getElementById('email').value != '' && document.getElementById('message').value != '') {
    var params = {
      name: document.getElementById('username').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    const serviceID = "service_u6cznmg";
    const templateID = "template_e7bjdzm";
    
    emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById('username').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
      console.log(res);
      alert('Your message sent successfully');
    })
    .catch(err => console.log(err));
  } else {
    alert('Please fill all the fields');
  }
}