import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="container">
            <div className="my-4 d-flex flex-column align-items-center">
                <h2 style={{ textAlign: 'center' }} >Login Here</h2><br />
                {/* <form> */}
                    <div className="d-flex flex-column" style={{ height: 'auto', width: '500px' }}>
                        <div className="mb-3" >
                            <label htmlFor="InputEmail1" class="form-label">Email</label>
                            <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="InputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="staySigned" />
                            <label className="form-check-label" htmlFor="staySigned">Stay Signed in</label>
                        </div>
                        <Link to='/' className="btn btn-primary">Login</Link>
                    </div>
                {/* </form> */}
            </div>
        </div>
    )
}