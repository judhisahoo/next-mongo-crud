"use client";

import { BiPlus } from "react-icons/bi";
import Success from "../components/success";
import Failed from "./failed";
import { useQueryClient, useMutation } from "react-query";
import { addNewUser, getUsers } from "../lib/helper";

export default function AddUserForm({ formData, setFormData }) {
  const queryClient = useQueryClient();
  const addMution = useMutation(addNewUser, {
    onSuccess: () => {
      console.log("data inserted");
      queryClient.prefetchQuery("users", getUsers);
    },
  });
  const submitHandler = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, salary, dob, status } = formData;

    const modal = {
      name: `${firstname} ${lastname}`,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 10
      )}.jpg`,
      email,
      salary,
      dob,
      status: status ?? "Active",
    };

    addMution.mutate(modal);
  };

  if (addMution.isLoading) return <div>Loading....</div>;
  if (addMution.isError)
    return <Failed message={addMution.error.message}></Failed>;

  if (addMution.isSuccess)
    return <Success message={"added successfully."}></Success>;

  return (
    <form
      action=""
      className="grid lg:grid-cols-2 w-4/6 gap-4"
      onSubmit={submitHandler}
    >
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          onChange={setFormData}
          className="border u-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="First Name"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          name="lastname"
          onChange={setFormData}
          className="border u-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Last Name"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          name="email"
          onChange={setFormData}
          className="border u-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="salary"
          onChange={setFormData}
          className="border u-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="salary"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="dob"
          onChange={setFormData}
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="dob"
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            name="status"
            value="Active"
            id="radioDefault1"
            onChange={setFormData}
            className="form-check-input rounded-full h-4 w-4 border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1">Active</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="status"
            value="InActive"
            id="radioDefault2"
            onChange={setFormData}
            className="form-check-input rounded-full h-4 w-4 border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2">InActive</label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Add{" "}
        <span className="px-1">
          <BiPlus size={25}></BiPlus>
        </span>
      </button>
    </form>
  );
}
