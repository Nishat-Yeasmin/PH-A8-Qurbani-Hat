"use client";

import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {

  const router = useRouter();

  const [error, setError] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/login");
  };

  const handleGoogleRegister = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4 py-10">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-green-700">
          Register
        </h1>

        {error && (
          <p className="text-red-500 text-center my-4">
            {error}
          </p>
        )}

        <form
          onSubmit={handleRegister}
          className="space-y-4 mt-6"
        >

          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border p-3 rounded"
          />

          <input
            name="image"
            type="text"
            placeholder="Photo URL"
            required
            className="w-full border p-3 rounded"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full border p-3 rounded"
          />

          <button
            className="cursor-pointer w-full bg-green-700 text-white py-3 rounded"
          >
            Register
          </button>

        </form>

        <button
          onClick={handleGoogleRegister}
          className="cursor-pointer w-full border py-3 rounded mt-4"
        >
          Continue with Google
        </button>

        <p className="text-center mt-5">

          Already have an account?

          <Link
            href="/login"
            className="text-green-700 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default RegisterPage;



// import React from 'react';
// import Link from 'next/link';

// const RegisterPage = () => {
//     return (
//          <div className="min-h-screen flex items-center justify-center bg-red-50 px-4 my-4 py-5">

//             <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

//                 {/* Title */}
//                 <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
//                     Register
//                 </h1>

//                 <p className="text-center text-gray-500 mb-6">
//                     Create your QurbaniHat account
//                 </p>

//                 {/* Error Message */}
//                 <p className="text-red-500 text-sm mb-4 text-center">
//                     {/* Error message will show here */}
//                 </p>

//                 {/* Register Form */}
//                 <form className="space-y-5">

//                     {/* Name */}
//                     <div>
//                         <label className="block mb-2 font-medium">
//                             Name
//                         </label>

//                         <input
//                             type="text"
//                             placeholder="Enter your name"
//                             className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
//                             required
//                         />
//                     </div>

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

//                     {/* Photo URL */}
//                     <div>
//                         <label className="block mb-2 font-medium">
//                             Photo URL
//                         </label>

//                         <input
//                             type="text"
//                             placeholder="Enter photo URL"
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

//                     {/* Register Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
//                     >
//                         Register
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

//                 {/* Google Register */}
//                 <button
//                     className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
//                 >
//                     Continue with Google
//                 </button>

//                 {/* Login Link */}
//                 <p className="text-center text-gray-500 mt-6">

//                     Already have an account?

//                     <Link
//                         href="/login"
//                         className="text-green-700 font-semibold ml-2 hover:underline"
//                     >
//                         Login
//                     </Link>

//                 </p>

//             </div>
//         </div>
//     );
// };

// export default RegisterPage;