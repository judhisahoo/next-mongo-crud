"use client";

import { BiBrush } from "react-icons/bi";
import Success from "../components/success";
import Failed from "./failed";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUser, updateUser, getUsers } from "../lib/helper";
import { FiSave } from "react-icons/fi";

export default function UpdateUserForm({ formId, formData, setFormData }) {
  const queryClient = useQueryClient();
  console.log("formId UpdateUserForm() ::", formId);
  const { isLoading, isError, data, error } = useQuery(["users", formId], () =>
    getUser(formId)
  );

  //console.log("data", data);
  const updateMution = useMutation((newData) => updateUser(formId, newData), {
    onSuccess: async (data) => {
      console.log("data updated");
      //queryClient.setQueriesData('users',(old)=>[data])
      queryClient.prefetchQuery("users", getUsers);
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    let updatedName = `${formData.firstname ?? firstname} ${
      formData.lastname ?? lastname
    }`;
    let updated = Object.assign({}, data, formData, { name: updatedName });
    console.log("updated ::", updated);
    await updateMution.mutate(updated);
  };

  if (isLoading) return <div>Loading ....</div>;
  if (isError) return <div> Error arises {error}</div>;

  const { name, avatar, email, salary, dob, status } = data ?? {};
  const [firstname, lastname] = name?.split(" ") ?? [];
  console.log("name", name);
  console.log("email", email);
  console.log("salary", salary);
  console.log("dob", dob);
  console.log("status", status);
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
          defaultValue={firstname}
          onChange={setFormData}
          className="border u-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="First Name"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          name="lastname"
          defaultValue={lastname}
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
          defaultValue={email}
          className="border u-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="salary"
          defaultValue={salary}
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
          defaultValue={dob}
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
            defaultChecked={status === "Active"}
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
            defaultChecked={status === "InActive"}
            onChange={setFormData}
            className="form-check-input rounded-full h-4 w-4 border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2">InActive</label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-yellow-400 hover:border-green-500 hover:text-green-500">
        Update{" "}
        <span className="px-1">
          <BiBrush size={25}></BiBrush>
        </span>
      </button>
    </form>
  );
}
