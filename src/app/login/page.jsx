"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/");
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
          Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to continue your Qurbani booking
        </p>

        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg cursor-pointer"
          >
            Login
          </button>

        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p>OR</p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border py-3 rounded-lg cursor-pointer"
        >
          Continue with Google
        </button>

        <p className="text-center mt-6">

          Do not have an account?

          <Link
            href="/register"
            className="text-green-700 ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default LoginPage;


// import Link from 'next/link';
// import React from 'react';

// const LoginPage = () => {
//     return (
//        <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">

//             <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

//                 {/* Title */}
//                 <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
//                     Login
//                 </h1>

//                 <p className="text-center text-gray-500 mb-6">
//                     Login to continue your Qurbani booking
//                 </p>

//                 {/* Error Message */}
//                 <p className="text-red-500 text-sm mb-4 text-center">
//                     {/* Error message will show here */}
//                 </p>

//                 {/* Login Form */}
//                 <form className="space-y-5">

//                     {/* Email */}
//                     <div>
//                         <label className="block mb-2 font-medium">
//                             Email
//                         </label>

//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
//                             required
//                         />
//                     </div>

//                     {/* Password */}
//                     <div>
//                         <label className="block mb-2 font-medium">
//                             Password
//                         </label>

//                         <input
//                             type="password"
//                             placeholder="Enter your password"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
//                             required
//                         />
//                     </div>

//                     {/* Login Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
//                     >
//                         Login
//                     </button>

//                 </form>

//                 {/* Divider */}
//                 <div className="flex items-center gap-3 my-6">

//                     <div className="flex-1 h-[1px] bg-gray-300"></div>

//                     <p className="text-gray-400 text-sm">
//                         OR
//                     </p>

//                     <div className="flex-1 h-[1px] bg-gray-300"></div>

//                 </div>

//                 {/* Google Login */}
//                 <button
//                     className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
//                 >
//                     Continue with Google
//                 </button>

//                 {/* Register Link */}
//                 <p className="text-center text-gray-500 mt-6">

//                     Dont have an account?

//                     <Link
//                         href="/register"
//                         className="text-green-700 font-semibold ml-2 hover:underline"
//                     >
//                         Register
//                     </Link>

//                 </p>

//             </div>
//         </div>
//     );
// };

// export default LoginPage;