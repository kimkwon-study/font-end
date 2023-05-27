import '../Styles/Main.css'

function Login() {

// async function request() {
// const response = await fetch('http://localhost:8080/api/login',{
// method : 'GET',
// })
// const data = await response.json();
// console.log(data)
// }

// request()

return (
<>
<div className = "login-container">
<form action = "/api/login" method = "POST" id = "login-form">
<div className = "title-box">Login</div>
<div className = "input-box">
<label for = "userId">userId</label>
<input type = "text" id = "userId"></input>
</div>
<div className = "input-box">
<label for = "password">password</label>
<input type = "password" id = "password"></input>
</div>
<div className = "check-box">
<input type="checkbox" id="check1"/>
<label for="check1"></label>
<a href = "#">Forget Password?</a>
</div>
<div className = "btn-box">
<input type = "submit" value = "Login" id = "login-btn"></input>
</div>
<div className = "next-page-box"><a href = "/register">go to register page</a></div>
</form>
</div>
</>
)
}

export default Login