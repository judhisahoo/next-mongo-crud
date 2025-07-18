import { BiCheckCircle } from "react-icons/bi";
export default function Failed({ message }) {
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-centerbg-opacity-5">
        <span className="px-1">
          <BiCheckCircle size={24}></BiCheckCircle>
        </span>
        {message}
      </div>
    </div>
  );
}
