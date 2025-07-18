import { BiEdit, BiTrashAlt } from "react-icons/bi";

//import { data } from "../../database/connection";

import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "../redux/reducer";

export default function Table() {
  //getUser().then((res) => console.log(res));
  const { isError, isLoading, data, error } = useQuery("users", getUsers);

  if (isLoading) {
    return <div>Employee is loading</div>;
  }

  if (isError) {
    return <div>Error arises whil fetching employee data :: {error}</div>;
  }

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-500">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-500">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-500">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-500">DOB</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-500">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-500">Action</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data?.data?.map((Object, i) => (
          <Tr {...Object} key={i} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ _id, name, avatar, email, salary, dob, status }) {
  //console.log("_id value in each tr", _id);
  const visible = useSelector((state) => state.app.client.toggleForm);
  //console.log("visible at table.tsx just after callect from redux::", visible);
  const dispatch = useDispatch();

  const onUpdate = () => {
    console.log("_id value for specific tr tr", _id);

    if (!visible) {
      dispatch(toggleChangeAction(_id));
    }

    if (visible) {
      console.log("_id value before dispatch(updateAction(_id)", _id);
      dispatch(updateAction(_id));
    }
  };

  const onDelete = (e) => {
    if (!visible) {
      dispatch(deleteAction(_id));
    }
  };
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img
          src={avatar || "#"}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-center ml-2 font-semibold">
          {name || "unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{dob || "unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor-auto">
          <span
            className={`${
              status == "Active" ? "bg-green-500" : "bg-rose-500"
            } text-white px-5 py-1 rounded-4xl`}
          >
            {status || "unknown"}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-1">
        <button className="cursor-auto" onClick={onUpdate}>
          <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
        </button>
        <button className="cursor-auto" onClick={onDelete}>
          <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}
