import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "";
}

interface DummyUser extends User {
  password: string;
}

const dummyUsers: DummyUser[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "admin",
    password: "johndoe",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    role: "user",
    password: "janedoe",
  },
  {
    id: "3",
    name: "John Smith",
    email: "johnsmith@gmail.com",
    role: "user",
    password: "johnsmith",
  },
];

const useAuth = () => {
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    role: "",
    email: "",
  });

  const router = useRouter();
  const pathname = usePathname();

  const logout = () => {
    setUser({ id: "", name: "", role: "", email: "" });
    localStorage.removeItem("user");
    router.replace("/");
  };

  const login = (email: string, password: string) => {
    const user = dummyUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      alert("Invalid credentials");
      return;
    }

    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    localStorage.setItem("user", JSON.stringify(user));
    if (user.role === "admin") {
      router.replace("/dashboard");
    } else if (user.role === "user") {
      router.replace("/pokemons");
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("user");
    const user: User = data ? JSON.parse(data) : null;

    if (!user?.id) {
      router.replace("/");
      return;
    }

    const isValidRole = user.role === "admin" || user.role === "user";

    if (!isValidRole) {
      localStorage.removeItem("user");
      setUser({ id: "", name: "", role: "", email: "" });
      router.replace("/");
      return;
    }

    setUser(user);

    if (pathname === "/") {
      const redirectedPath = user.role === "admin" ? "/dashboard" : "/pokemons";
      router.replace(redirectedPath);
    }

    if (pathname === "/dashboard" && user.role !== "admin") {
      router.replace("/pokemons");
    }

    if (pathname !== "/dashboard" && user.role === "admin") {
      router.replace("/dashboard");
    }
  }, [router, pathname]);

  return { user, login, logout };
};

export default useAuth;
