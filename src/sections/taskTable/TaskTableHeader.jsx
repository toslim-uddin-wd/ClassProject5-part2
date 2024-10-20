import { TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";

function TaskTableHeader() {
  return (
    <div className=" flex justify-between items-center">
        <h2 className=" text-2xl font-bold pl-3 text-rose-700 dark:text-red-600 max-sm:text-2xl">Your Task</h2>
        <div className="max-w-md max-sm:w-1/2">
            <TextInput id="email4" type="email" rightIcon={IoSearch} required />
        </div>
    </div>
  )
}

export default TaskTableHeader