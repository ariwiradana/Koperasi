import React from "react";
import { Button, Input } from "../../components/atoms";
import { FiLock, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-gray-900 bg-cover overflow-hidden relative">
      <img
        src="https://picsum.photos/1920?grayscale"
        alt="bg"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 md:bg-transparent md:bg-opacity-100 md:bg-gradient-to-r md:from-gray-900 md:to-transparent flex flex-col justify-center">
        <div className="box-border p-6 md:p-20 w-full md:w-1/2">
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">
            Login to your account.
          </p>
          <p className="text-gray-500 font-medium mb-12">
            Don't have an account ?{" "}
            <span className="text-blue-600">
              <Link href="/register">Register</Link>
            </span>
          </p>
          <Input placeholder="Email" type="email" icon={<FiMail />} />
          <Input placeholder="Password" icon={<FiLock />} type="password" />
          <Link href="/">
            <Button title="Login" full />
          </Link>
        </div>
      </div>
    </div>
  );
}
