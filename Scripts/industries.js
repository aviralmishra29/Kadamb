url = window.location.href

id = url.split('#')[1]

element = document.getElementById(id)
setTimeout(function() {
    element.click()
}, 1000);  
