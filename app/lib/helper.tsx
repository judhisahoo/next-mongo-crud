import { Explora } from "next/font/google";

const BASE_URL = "http://localhost:3000";

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);

  const json = await response.json();
  return json;
};

export const getUser = async (userId) => {
  console.log("userId value in getUser() in helper.tsx file ::", userId);
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await response.json();
  if (json) return json;
  return {};
};

export const addNewUser = async (formData) => {
  try {
    const Option = {
      method: "POST",
      headers: {
        "Content-Type": "applcation/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users`, Option);
    const json = await response.json();
    return json;
  } catch (error) {}
};

export const updateUser = async (userId, formData) => {
  try {
    const option = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, option);
    const json = await response.json();
    return json;
  } catch (error) {}
};

export const deleteUser = async (userId) => {
  try {
    const option = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, option);
    const json = await response.json();
    return json;
  } catch (error) {}
};
