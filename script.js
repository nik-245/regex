// console.log("add");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let velidname = false;
let velidEmail = false;
let velidPhone =  false;
// console.log(name , email , phone);
// for name 
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
        velidname = true;
    }else{
        console.log("not match");
        name.classList.add('is-invalid');
        velidname = false
    }
})  


// for email
email.addEventListener('blur' , ()=>{
    console.log("blur event are active");
    // add vlidation of email
    let regex =/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex , str)
    if (regex.test(str)){
        console.log("it mach");
        email.classList.remove('is-invalid');
        velidEmail = true;
    }else{
        console.log("not match");
        email.classList.add('is-invalid');
        velidEmail = false;
    }
   

})

//for phone number
phone.addEventListener('blur' , ()=>{
    console.log("blur event are active");
    // add event lisner of phone number
    let regex =/^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex , str)
    if (regex.test(str)){
        console.log("it mach");
        phone.classList.remove('is-invalid');
        velidPhone =  true;
    }else{
        console.log("not match");
        phone.classList.add('is-invalid');
        velidPhone =  false;
    }
})

let success = document.getElementById('success');
let failuer = document.getElementById('failuer');
success.style.display = 'none';
failuer.style.display = 'none';


let submit = document.getElementById('submit');
submit.addEventListener('click' , (e)=>{
    e.preventDefault();
    console.log("submit buttuone are click");

    if(velidname && velidEmail && velidPhone){
        console.log("all are velid");
        success.style.display = 'block';
        success.classList.add('show');
        failuer.classList.remove('show');
    }
    else{
        console.log("not all vellid");
        failuer.style.display = 'block';
        failuer.classList.add('show');
        success.classList.remove('show');
    }
   
    // submit form using axaj or fecth api 

    
});