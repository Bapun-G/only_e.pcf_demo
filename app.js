
let message = document.getElementById("message");
message.style.display ="none";
console.log(message.innerText);
document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault(); // form submit rokne ke liye

    let fullName = document.getElementById("fullName").value;
    message.style.display ="block"

    console.log(fullName);
});