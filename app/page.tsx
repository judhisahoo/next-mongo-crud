"use client";
import { BiCheck, BiUserPlus, BiX } from "react-icons/bi";
import Table from "./components/table";
import Form from "./components/form";
import { useDispatch, useSelector } from "react-redux";
import { toggleChangeAction, deleteAction } from "./redux/reducer";
import { deleteUser, getUsers } from "./lib/helper";
import { useQueryClient } from "react-query";

export default function Home() {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();

  const dispatch = useDispatch();
  const showAddForm = () => {
    //setVisible(!visible);
    dispatch(toggleChangeAction());
  };
  //console.log("visible at pages.tsx just before jsx::", visible);

  const deleteHandler = async () => {
    console.log("deleteHandler");
    //await deleteUser();
    if (deleteId) {
      await deleteUser(deleteId);
      await queryClient.prefetchQuery("users", getUsers);
      await dispatch(deleteAction(null));
    }
  };

  const cancelHandler = async () => {
    console.log("cancelHandler");
    await dispatch(deleteAction(null));
  };

  return (
    <>
      <head>
        <title>CRUD Operation Test</title>
        <meta name="description" content="CRUD"></meta>
      </head>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employe Management
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={showAddForm}
              className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800"
            >
              Add Employee{" "}
              <span className="px-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
          {deleteId ? deleteComponent({ deleteHandler, cancelHandler }) : <></>}
        </div>
        {visible ? <Form></Form> : <></>}
        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </>
  );
}

function deleteComponent({ deleteHandler, cancelHandler }) {
  return (
    <div className="flex gap-5">
      <p>Are you sure ?</p>
      <button
        onClick={deleteHandler}
        className="flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50"
      >
        Yes
        <span className="px-1">
          <BiCheck size={25} color="rgb(255 255 255)" />
        </span>
      </button>
      <button
        onClick={cancelHandler}
        className="flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-green-500 hover:border-green-500 hover:text-gray-50"
      >
        No{" "}
        <span className="px-1">
          <BiX size={25} color="rgb(255 255 255)" />
        </span>
      </button>
    </div>
  );
}
