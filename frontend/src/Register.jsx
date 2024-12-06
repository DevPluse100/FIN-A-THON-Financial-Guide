import { useState } from "react";
import axios from "axios";
import "./RegisterPage.css";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
    });
    


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting form data:", formData);

            await axios.post(
                "http://localhost:8000/api/v1/users/register",
                formData,
                { headers: { "Content-Type": "application/json" } }
            );

            alert("Registration Successful");
            // Clear the form
            setFormData({ name: "", username: "", password: "" });
            console.log("Form cleared:", formData);
        } catch (err) {
            alert("Registration failed. Check the console for details.");
            console.error(err.response?.data || err.message);
        }
    };

    return (
        <div className="register-container">
            <form
                onSubmit={submitForm}
                className="register-form"
                autoComplete="off"
            >
                <h2 style={{color:"#4caf50"}}>Create Your Account</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
