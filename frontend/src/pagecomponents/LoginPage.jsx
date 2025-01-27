import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css"; 

export default function LoginPage() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev,[name]: value,}));
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting login data:", formData);

            const response = await axios.post("http://localhost:8000/api/v1/users/login", formData,
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200) {
                alert("Login Successful");
                navigate("/home");
            
            }
        } catch (err) {
            alert("Login failed. Check the console for details.");
            console.error(err.response?.data || err.message);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={submitForm} className="login-form" >
            <h2 style={{color:"#4caf50"}}>Login</h2>

            <input  type="text" name="username" placeholder="Username"  value={formData.username}
                onChange={handleChange} />
                    
                   
            <input  type="password"  name="password"   placeholder="Password"  value={formData.password}
               onChange={handleChange}/>
               
            <button type="submit">Login</button>
            </form>
        </div>
    );
}
