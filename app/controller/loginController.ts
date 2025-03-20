"use client";
import { useState } from "react";
import { loginData } from "../contract/loginData";

export const loginController = () => {
  const [formData, setFormData] = useState<loginData>({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return { formData, onChange, onSubmit };
}