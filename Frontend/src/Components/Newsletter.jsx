import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { API_URL } from "../api";

const Newsletter = () => {
  const [form, setForm] = useState({ email: "", message: "" });
  const [response, setResponse] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("");

    const confirmed = window.confirm(
      "Are you sure you want to submit your feedback?"
    );
    if (!confirmed) return; // Stop if user cancels
    try {
      const res = await fetch(`${API_URL}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setResponse("Feedback sended successfully!");
        toast.success("Feedback sended Successfully!");
        setErrors({});
      } else {
        if (data.errors) {
          setErrors(data.errors);
          setResponse('');
        } else {
          setResponse(data.message || "Feedback failed!");
          toast.error(data.message || "Feedback failed!");
        }
      }
    } catch (err) {
      setResponse("Error connecting to server");
    }
  };

  return (
    <div className="dark:text-white dark:bg-black text-white bg-black w-full py-16 duration-200">
      <div className="max-w-[1240px] border-2 rounded-md shadow-2xl mx-4 dark:hover:shadow-sky-300 hover:shadow-emerald-300 duration-300 dark:border-sky-300 border-emerald-300 xl:mx-auto p-5 lg:mx-4 md:mx-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="text-center ">
          <h1 className="dark:text-sky-400 text-emerald-400 dark:hover:text-emerald-400 hover:text-sky-400 md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Feed Back
          </h1>
          <p className="text-sky-400 dark:text-emerald-400">
            <NavLink className="hover:underline" to="/signup">
              Signup
            </NavLink>
          </p>
        </div>
        <form className="my-4" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-6 items-center justify-between">
          <div>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 dark:text-sky-400 text-emerald-400">
                <MdEmail size={26} className="ml-8" />
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                required
                className="pl-10 border-2 dark:border-sky-300 border-emerald-300 dark:focus:border-emerald-400 focus:border-sky-400 focus:outline-none p-3 flex w-[220px] sm:w-[240px] mx-8 rounded-md "
              />
            </div>
              {errors.email && (
                <p className="text-red-500 ml-10 text-xs mt-1">
                  {errors.email}
                </p>
              )}
          </div>
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your Feed Back"
                  required
                  className="pl-10 border-2 dark:border-sky-300 border-emerald-300 dark:focus:border-emerald-400 focus:border-sky-400 focus:outline-none p-3 flex w-[220px] md:w-[240px] lg:w-[280px] mx-8 rounded-md "
                />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 dark:text-sky-400 text-emerald-400">
                  <MdMessage size={26} className="ml-8" />
                </div>
              </div>
              {errors.message && (
                <p className="text-red-500 ml-10 text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="dark:bg-sky-400 bg-emerald-400 active:scale-105 dark:hover:bg-emerald-400 hover:bg-sky-400 w-[200px] py-3 rounded-md font-medium my-6 px-6 mx-auto hover:scale-105 duration-200"
            >
              Submit
            </button>
          </div>
          {response && (
            <p className="text-center text-emerald-400 dark:text-sky-400 mt-2">
              {response}
            </p>
          )}
        </form>
        <p></p>
      </div>
    </div>
  );
};

export default Newsletter;
