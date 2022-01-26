import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./login.css";

const Login = () => {

    return (
        <>
            <div className="container d-flex flex-column mt-5">
                <div className="row align-items-center justify-content-center no-gutters">
                    <div className="col-lg-5 col-md-8 pt-10">
                        <div className="card shadow ">
                            <div className="card-body p-6">
                                <div className="mb-4">
                                    {/* <Link to={"/"} className="mb-2 font-weight-bold">
                    <AppLogo />
                  </Link> */}
                                    <Link className="mb-2 font-weight-bold" to={"/"} id="login-logo" >
                                        <img className="" src="./favicon.ico" alt="logo" />
                                        {/* <span className="badge badge-warning text-white" id="login-logo-beta">BETA</span> */}
                                    </Link>

                                    <hr />
                                    <span className="mb-1 font-weight-bold px-2 rounded text-primary">
                                        Account Login
                                    </span>
                                </div>
                                <form >
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">
                                            Email:{" "}
                                            <span className="text-danger pl-2">
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email address here"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">
                                            Password:{" "}
                                            <span className="text-danger pl-2">
                                            </span>
                                        </label>

                                        <div className="input-group mb-3">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="**************"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                            <div
                                                style={{ cursor: 'pointer' }}
                                                class="input-group-prepend">
                                                <span
                                                    className="input-group-text bg-primary text-light"
                                                    id="inputGroup-sizing-default"
                                                >
                                                    <i
                                                        className=
                                                        "fas fa-eye"


                                                    ></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-lg-flex justify-content-between align-items-center mb-2">
                                        {/* <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="rememberme"
                      />
                      <label
                        className="custom-control-label "
                        htmlFor="rememberme"
                      >
                        Remember me
                      </label>
                    </div> */}
                                        <div>
                                            <Link to="forgot-password">Forgot your password?</Link>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <span className="font-weight-smaller">
                                            Don’t have an account?{" "}
                                            <Link to="/register" className="ml-1">
                                                Sign up
                                            </Link>
                                        </span>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary btn-block">
                                            <span className="mx-2 px-4">Login</span>
                                        </button>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="mt-4 text-center">
                                        <Link
                                            to=""
                                            className="btn-social btn-social-outline btn-facebook"
                                        >
                                            <i className="fab fa-facebook"></i>
                                        </Link>
                                        <Link
                                            to=""
                                            className="btn-social btn-social-outline btn-twitter"
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link
                                            to=""
                                            className="btn-social btn-social-outline btn-linkedin"
                                        >
                                            <i className="fab fa-linkedin"></i>
                                        </Link>
                                        <Link
                                            to=""
                                            className="btn-social btn-social-outline btn-github"
                                        >
                                            <i className="fab fa-github"></i>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
