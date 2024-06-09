import { ChangeEvent, useState } from "react";

const useUserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return {
    email,
    password,
    onEmailChange: handleEmailChange,
    onPasswordChange: handlePasswordChange,
  };
};

export default useUserForm;
