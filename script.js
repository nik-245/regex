// console.log("add");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// console.log(name , email , phone);

name.addEventListener('blur' , ()=>{
    console.log("blur event are active");
    // add validation of name
    // make regex for validation
    let regex =/^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
    let str = name.value;
    console.log(regex , str)
    if (regex.test(str)){
        console.log("it mach");
        name.classList.remove('is-invalid');
    }else{
        console.log("not match");
        name.classList.add('is-invalid');
    }
})  

email.addEventListener('blur' , ()=>{
    console.log("blur event are active");
    // add vlidation of email
})

phone.addEventListener('blur' , ()=>{
    console.log("blur event are active");
    // add event lisner of phone number
})