let btnLogin = document.getElementById("btnLogin");
let btnVaciarSessionStorage = document.getElementById("btnVaciarSessionStorage");
let btnVaciarTodo = document.getElementById("btnVaciarLocalStorage");
let checkRememberMe = document.getElementById("rememberMe");
let btnr = document.getElementById("btnr")
const ausuario = []



function guardarDatos(storage) {
    let user = document.getElementById("emailr").value;
    let pass = document.getElementById("passwordr").value;
    let usuario = {
        user: user,
        password: pass
    }
    ausuario.push(usuario)
    console.log(ausuario)
    storage.setItem("user", JSON.stringify(ausuario));
}

function borrarDatos(storage) {
    storage.clear();
}

function borrarDatoUnico(storage, clave) {
    storage.removeItem(clave);
}
btnr.addEventListener("click" , (e) =>{
    e.preventDefault()
    guardarDatos(localStorage)
})
let usuarior = JSON.parse(localStorage.getItem("user"))
    console.log(usuarior)
function login(){
    let emailInput = document.getElementById('email').value;
    let passwordInput = document.getElementById('password').value;
    const userlogin = {
        email : emailInput,
        password : passwordInput
    }
    console.log(userlogin)
    for (let i = 0; i < usuarior.length; i++) {
        const usuarior = {
            user : usuarior.user,
            pass : usuarior.password
        }
        isLoggedIn = false
    if(usuarior && usuarior.user === userlogin.email && usuarior.password === userlogin.password){
        isLoggedIn = true;}
        //else
        //isLoggedIn = false
        //
    console.log(isLoggedIn);
    }
    }
    btnLogin.addEventListener("click" , (e) =>{
        e.preventDefault();
        login()
    })


//btnVaciarTodo.addEventListener("click", () => {
//    borrarDatos(localStorage);
//    borrarDatos(sessionStorage);
//});

btnVaciarSessionStorage.addEventListener("click", () => {
    borrarDatos(sessionStorage);
});

//btnLogin.addEventListener("click", () => {

    //if (checkRememberMe.checked) {
    //    guardarDatos(localStorage);
    //} else {
    //    guardarDatos(sessionStorage);
    //}
//});
