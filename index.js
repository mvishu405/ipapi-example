// Import stylesheets
import './style.css';
import $ from "jquery";


// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;



function getGeoLocation(){



  $.getJSON('https://api6.ipify.org/?format=json', function(ip){

$.getJSON('https://ipapi.co/'+ip.ip+'/json/', function(data){
    console.log(data);
     document.getElementById('location').value = data.city;
  });


  });




  
}

getGeoLocation();