"use client";

import Link from "next/link";
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { authClient } from "@/lib/auth-client";

export default function Navbar() {

    const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };
  // Temporary user
  // const user = null;

  return (
    <nav className="bg-red-100 text-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}

        <div className = "flex gap-4 items-center justify-between">

         <Image src={logo} alt='logo' width={60} height={60}/>
        <Link href="/" className="text-2xl font-bold">
          QurbaniHat
        </Link>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-6">

          <Link href="/" className="hover:text-purple-700">
            Home
          </Link>

          <Link href="/animals" className="hover:text-purple-700">
            All Animals
          </Link>

          {/* If Logged In */}
          {session?.user ? (
            <div className="flex items-center gap-4">

              {/* Avatar */}
              <img
                src={session.user.image}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />

                 <Link
                href="/my-profile"
                className="font-semibold"
              >
                Profile
              </Link>


              {/* Logout */}
              <button
              onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
                Logout
              </button>
            </div>
          ) : (
            /* If Logged Out */
            <div className="flex items-center gap-4">

              <Link
                href="/login"
                className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300"
              >
                Register
              </Link>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
}