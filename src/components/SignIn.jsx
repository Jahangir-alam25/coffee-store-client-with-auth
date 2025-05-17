import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser } = use(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Simulate a sign-in process
        // console.log("Signing in with:", email, password);
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                // Handle successful sign-in
                console.log("Sign-in successful");
                const userProfile = {
                    email,
                lastSignInTime: user.metadata.lastSignInTime,
                };
                fetch('http://localhost:3000/users', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                }).then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            // Show success message
                            console.log("User profile updated successfully");
                            form.reset();
                        }
                    });
                })
            .catch((error) => {
                // Handle sign-in error
                console.error("Sign-in error:", error);
            });

        // Reset the form after submission
        form.reset();
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h3 className='font-bold text-2xl text-center'>Signin Your Account</h3>
                <form onSubmit={handleSignIn} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <label className="input validator relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                placeholder="Password"
                                minLength="6"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
                            />
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </label>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Sign In</button>
                        <div className="divider">OR</div>
                        <button type="button" className="btn btn-outline btn-secondary">
                            <FcGoogle size={20}></FcGoogle>
                            Continue with Google
                        </button>
                        <h3 className='font-bold text-center py-2'>Don't have an account ? <Link className='text-secondary ' to="/signup">Sign Up</Link></h3>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignIn;