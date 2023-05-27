import '../Styles/Main.css'
import {useState} from "react";
function Login() {

    const [id , setId] = useState("");
    const [password,setPassword] = useState("");

    const checkResposneCode = (res) => {
        if(res.result_code === "Success") {
            localStorage.setItem("token", res.result.token);
            window.location.href = "/";
        } 
        else if (res.result_code === "LOGIN_NO_JOIN") {
            alert(res.result)
        }
        else if (res.result_code === "LOGIN_NO_PASSWORD") {
            alert(res.result)
        }
    }

    const LoginFunc = async (e) => {
        e.preventDefault();
        if(!id || !password) {
            return alert("정보를 입력해주세요!")
        }
        else {
            let req = {
                userId : id,
                password : password
            }

            await fetch("http://localhost:8080/api/login",{
                method : "POST",
                headers : {
                "Content-Type" : "application/json"
                },
                body : JSON.stringify(req)
            })
            .then(res => res.json())
            .then((res) => checkResposneCode(res))
            .catch(err => alert(err))
        }
    }

    return (
        <>
            <div className = "login-container">
                <form onSubmit={LoginFunc} id = "login-form">
                    <div className = "title-box">Login</div>
                    <div className = "input-box">
                        <label for = "userId">userId</label>
                        <input type = "text" id = "userId" value={id} onChange={(e)=> setId(e.target.value)}></input>
                    </div>
                    <div className = "input-box">
                        <label for = "password">password</label>
                        <input type = "password" id = "password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
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