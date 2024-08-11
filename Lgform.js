function loggedin(){
    alert('You are Logged in')
}

function signedup(){
    alert('Successfully signed in')
}

var cont1=document.getElementById('container1')
var cont2=document.getElementById('container2')

function gotosignup(){
    cont2.style.display='flex'
}

function gotologin(){
    cont2.style.display='none'
}