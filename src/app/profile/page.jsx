"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="p-10 text-center">
        Loading profile...
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="p-10 text-center text-red-500">
        You are not logged in
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="bg-white shadow rounded-xl p-6 text-center">

        {/* IMAGE */}
        <img
          src={user.image || "/default-avatar.png"}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />

        {/* NAME */}
        <h2 className="text-xl font-bold mt-4">
          {user.name}
        </h2>

        {/* EMAIL */}
        <p className="text-gray-600">
          {user.email}
        </p>

        {/* UPDATE BUTTON */}
        <Link href="/profile/update">
          <button className="cursor-pointer mt-6 bg-green-700 text-white px-6 py-2 rounded-lg">
            Update Profile
          </button>
        </Link>

      </div>
    </div>
  );
}