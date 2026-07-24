import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setError("");
        setSuccessMessage("");

        if (email.trim() === "") {
            setError("Email is required.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            setError("Enter a valid email address.");
            return;
        }

        if (password.trim() === "") {
            setError("Password is required.");
            return;
        }

        if (password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        setSuccessMessage("Login successful.");

        console.log("Email:", email);
        console.log("Password:", password);

        setEmail("");
        setPassword("");
    };

    return (
        <section className="login-section">
            <div className="login-container">
                <div className="login-heading">
                    <h1>Welcome Back</h1>
                    <p>Login to continue with ZecPath</p>
                </div>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>

                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <div className="password-box">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />

                            <button
                                type="button"
                                className="show-button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="login-button"
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}

export default LoginForm;