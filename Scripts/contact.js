async function postData(url, data = {}) {
    // Default options are marked with *
    console.log(JSON.stringify(data))
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
  
// postData(CONTACT_URL, { email: 'aditya@gmail.com', message: "sthststh", name: "aditya" })
// .then(data => {
// return data;
// });

function submitContactForm(e){
    console.log(e)
}
