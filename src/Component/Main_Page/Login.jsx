import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [error, setError] = useState("");
    const [succ, setSuccess] = useState("");

    const [loginData, setLogin] = useState({
        username: "",
        pass: "",
    })
    function handleChange(e) {
        let data = { ...loginData }

        data[e.target.name] = e.target.value;
        setLogin(data)
    }
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:3001/User')
            const data = await res.json()
            const isValid = data.find(a => a.username === loginData.username && a.pass === loginData.pass)
            if (isValid) {
                navigate("/home")
                setSuccess(
                    "Successfully Logged In"
                );
            }
            else if (a => a.username === loginData.username && a.pass != loginData.pass) {
                setError(
                    "Password is Incorrect"
                );
            }
            else {
                setError(
                    "Account Not Found"
                );
            }
        } catch {
            alert("Error")
        }
    }
    return (
        <div className="container-login">

            <div class="center">

                <div class="bold-text">
                    Login
                </div>
                <form onSubmit={handleSubmit}>

                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {succ && <p style={{ color: "red" }}>{succ}</p>}

                    <div class="txt_field">
                        <input value={loginData.username}
                            onChange={handleChange} type="text" name="username" id="username" required
                            oninvalid="this.setCustomValidity('Harap Masukan Username!')" oninput="this.setCustomValidity('')" />
                        <span></span>
                        <label>Username</label>
                    </div>

                    <div class="txt_field">
                        <input value={loginData.pass}
                            onChange={handleChange} type="password" name="pass" id="password" required
                            oninvalid="this.setCustomValidity('Harap Masukan Password!')" oninput="this.setCustomValidity('')" />
                        <span></span>
                        <label>Password</label>
                    </div>

                    <span>
                        <button class="btnlogin" type="submit" name="submit">Login</button>
                    </span>
                </form>
                <div class="signup_link">
                    Don't Have an Account ? <NavLink to="/sign">Register</NavLink> Now
                </div>
                <h6 class="pass"><a href="https://www.youtube.com/c/AHDHAN16Bruh">© 2024 Ahdhan Setya Ananta XII RPL</a></h6>
            </div>
        </div>
    )
}

export default Login;
