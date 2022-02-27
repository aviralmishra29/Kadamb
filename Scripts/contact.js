var success_msg = document.querySelector('.u-form-send-success')
var error_msg = document.querySelector('.u-form-send-error')
var contact_us_form = document.forms.contact_us_form;

async function postData(url, data = {}) {
  const response = await fetch(url, {
    method: 'POST',
  //   mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

function showMsg(event){
  // event = "success" or "error"
  if(event == "success"){
    success_msg.style.display = "block"
    error_msg.style.display = "none"
    setTimeout(function(){
      success_msg.style.display = "none"
    }, 3000)
  }
  else{
    success_msg.style.display = "none"
    error_msg.style.display = "block"
    setTimeout(function(){
      error_msg.style.display = "none"
    }, 3000)
  }
}

function submitContactForm(e){
    e.preventDefault();
    var contact_us_form_data = new FormData(contact_us_form);
    let name = contact_us_form_data.get('name');
    let email = contact_us_form_data.get('email');
    let message = contact_us_form_data.get('message');
    let data = {
        name: name,
        email: email,
        message: message
    }
    postData(CONTACT_URL, data)
    .then(data => {
        if(data.message.toLowerCase() == "successfully sent email"){
            contact_us_form.reset();
            showMsg("success")
        }
        else{
            showMsg("error")
        }
    })
}

contact_us_form.addEventListener('submit', submitContactForm);
