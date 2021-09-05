const loginForm = document.querySelector("#login-form");
const loginId = loginForm.querySelector(".id");
const greeting = document.querySelector("#greeting");

const loginPassword = loginForm.querySelector(".password");
// const loginBtn = loginForm.querySelector("button");



function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const ID = loginId.value;
    const PASSWORD = loginPassword.value;
    localStorage.setItem("ID",ID);
    localStorage.setItem("password",PASSWORD);
    paintGreetings(ID);


    
}
function paintGreetings(ID){
    greeting.innerText = `안녕하세요 ${ID}님!`
    greeting.classList.remove("hidden");
    
}



const savedId = localStorage.getItem("ID");
// const savedPassword = localStorage.getItem("PASSWORD");

if (savedId === null ){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",loginSubmit);

} else {
    paintGreetings(savedId);
   
}
