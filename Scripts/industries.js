url = window.location.href
console.log(url)

id = url.split('#')[1]

console.log(id)

element = document.getElementById(id)
console.log(element)
setTimeout(function() {
    element.click()
}, 1000);  



