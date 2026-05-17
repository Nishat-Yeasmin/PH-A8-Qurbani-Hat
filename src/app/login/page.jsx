import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
       <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">

            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
                    Login
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Login to continue your Qurbani booking
                </p>

                {/* Error Message */}
                <p className="text-red-500 text-sm mb-4 text-center">
                    {/* Error message will show here */}
                </p>

                {/* Login Form */}
                <form className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Login
                    </button>

                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">

                    <div className="flex-1 h-[1px] bg-gray-300"></div>

                    <p className="text-gray-400 text-sm">
                        OR
                    </p>

                    <div className="flex-1 h-[1px] bg-gray-300"></div>

                </div>

                {/* Google Login */}
                <button
                    className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                >
                    Continue with Google
                </button>

                {/* Register Link */}
                <p className="text-center text-gray-500 mt-6">

                    Dont have an account?

                    <Link
                        href="/register"
                        className="text-green-700 font-semibold ml-2 hover:underline"
                    >
                        Register
                    </Link>

                </p>

            </div>
        </div>
    );
};

export default LoginPage;