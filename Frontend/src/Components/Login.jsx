import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { API_URL } from "../api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // clear old error as user types
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Login successful!");
        toast.success("Login successful!");
      } else {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setMessage(data.message || "Login failed");
          toast.error(data.message || "Login failed");
        }
      }
    } catch (err) {
      setMessage("Internal server error!");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <div className="relative text-black p-6 px-1 bg-emerald-950 dark:bg-gradient-to-tr dark:bg-sky-950">
        <div className="border-2 text-white dark:text-white bg-black dark:bg-black rounded-md hover:shadow-2xl dark:shadow-sky-300 shadow-emerald-300 duration-200 dark:border-sky-300 border-emerald-300 p-2 xl:mx-auto min-w-[310px] m-6 max-w-[1240px]">
          <h1 className="font-bold text-center p-2 mb-6 text-3xl dark:hover:text-emerald-400 hover:text-sky-400 dark:text-sky-400 text-emerald-400">
            Login
          </h1>
          <form
            className="grid px-2 grid-cols-1 lg:grid-cols-2"
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <div className="mx-auto text-center">
              <label className="dark:text-sky-400 text-emerald-400 text-center font-medium">
                Email
              </label>
              <br />
              <div>
                <div className="relative transition-colors">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 dark:text-sky-400 text-emerald-400">
                    <MdEmail size={24} className="ml-4" />
                  </span>
                  <input
                    placeholder="Enter Email"
                    className="pl-10 border-2 rounded-md w-[200px] md:w-full dark:focus:border-emerald-400 focus:border-sky-400 focus:outline-none dark:border-sky-300 border-emerald-300 p-2 m-4"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="mx-auto text-center">
              <label className="dark:text-sky-400 text-emerald-400 text-center font-medium">
                Password
              </label>
              <br />
              <div>
                <div className="relative transition-colors">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 dark:text-sky-400 text-emerald-400">
                    <FaUnlockAlt size={24} className="ml-4" />
                  </span>
                  <input
                    placeholder="Enter Password"
                    className="pl-10 border-2 rounded-md w-[200px] md:w-full dark:focus:border-emerald-400 focus:border-sky-400 focus:outline-none dark:border-sky-300 border-emerald-300 p-2 m-4"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center mx-auto p-4">
              <h1 className="text-center text-emerald-400 dark:text-sky-400">
                Don’t have an account?{" "}
                <NavLink to="/signup" className="hover:underline text-sky-400 ">
                  Signup
                </NavLink>
              </h1>
              <button
                className="py-2 hover:scale-105 px-6 font-medium m-2 mx-auto w-25 duration-200 rounded-md dark:bg-sky-400 bg-emerald-400 dark:hover:bg-emerald-400 hover:bg-sky-400"
                type="submit"
              >
                Login
              </button>
              {message && (
                <p className="text-center text-emerald-400 dark:text-sky-400 mt-2">
                  {message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
