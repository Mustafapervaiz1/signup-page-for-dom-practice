function fire() {
       var user_names = document.getElementById('firstname').value;
       var last_names = document.getElementById('lastname').value;
       var emails = document.getElementById('myemail').value;
       var usernumber = document.getElementById('number').value;
       var usercourse  = document.getElementById('level').value;
       var Gender  = document.getElementById('gender').value;
       //show in user box 

     

       let pastemail = document.getElementById('usermail').value = emails
       let pastename = document.getElementById('fullname').value = `${user_names} ${last_names}`
       let pastenum = document.getElementById('num').value = usernumber
       let pastelevel =document.getElementById('levels').value = usercourse
       let pastegender =document.getElementById('genders').value = Gender
     }

function displayno (){
        var maincomplete1 = document.getElementById('promtbox')  //promt box user give data here
       // var maincomplete2 = document.getElementById('userdata')  //user data is here 
       maincomplete1.style.display = "none"  
       var pastebox = document.getElementById("paste") 
       pastebox .style.display = "block"
}
function thankspage(){
var pasteareahide = document.getElementById('paste')
pasteareahide.style.display = "none"
var img = document.getElementById('imag')
img.style.thankspage.display = 'block'
}