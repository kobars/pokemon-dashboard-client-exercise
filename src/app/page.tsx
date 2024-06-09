"use client";

import InputText from "@/components/forms/InputText";
import useAuth from "@/hooks/useAuth";
import useUserForm from "@/hooks/useUserForm";
import { FormEvent } from "react";

export default function Home() {
  const { password, email, onEmailChange, onPasswordChange } = useUserForm();
  const { login } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Logo"
          width={384}
          height={96}
          className="mx-auto"
        />
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <InputText
            value={email}
            type="email"
            onChange={onEmailChange}
            placeholder="Email"
          />
          <InputText
            value={password}
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}
          />
          <button
            type="submit"
            className="block w-full px-3 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
