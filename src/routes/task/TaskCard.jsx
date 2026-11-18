import { useState } from "react";
import { FaPencilAlt , FaTrash} from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function TaskCard({ task, setTasklist }) {
    const [onEdit, setOnEdit] = useState(false);
    const [formInput, setFormInput] = useState();

    const deleteTaskHandler = () => {
        const isConfirmed = confirm(`Are you sure you want to delete task`);

        if(!isConfirmed) {
            return;
        } else {
            setTasklist((prev) => prev.filter((tas) => tas.id !== task.id));
        }
    };

    const editTaskHandler = (e) => {
        e.preventDefault();
        setTasklist((prev) => 
            prev.map((tas) =>
            tas.id === task.id ? {...tas,title : formInput } : tas, ),
        );
        setOnEdit(false);
    };

    const taskCompletionHandler = () => {
        setTasklist((prev) => 
            prev.map((tas) => tas.id === task.id ? {...tas, completed: true}
            : tas,
        ),);
    }

    return (
        <>
        <div className={`shadow-lg rounded-lg flex flex-col sm:grid sm:grid-cols-12 items-start sm:items-center gap-4 p-5 mb-4 ${task.completed ? "bg-gray-100" : "bg-white"}`}>
            
            {/* Radio / Completion Input */}
            <div className="flex sm:col-span-1 justify-center">
                {task.completed ? (
                    <input type="radio" defaultChecked />
                 ):(
                    <input type="radio" onChange={() => taskCompletionHandler()} />
                 )}
            </div>

            {/* Task Title & Date */}
            <div className="w-full sm:col-span-6 flex flex-col gap-1 overflow-hidden">
                <div className={`${task.completed ? "line-through text-gray-500" : "text-gray-800"} font-bold text-lg break-words`}>
                    {onEdit ? (
                        <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
                        onSubmit={(e) => editTaskHandler(e)}>

                        <input
                        className="border border-black p-1 px-3 rounded-sm w-full focus:outline-none"
                        placeholder={task.title.slice(0, 30) + "..."}
                        onChange={(e) => setFormInput(e.target.value)}/>

                        <button type="submit" className="py-1 px-4 bg-sky-600 active:bg-sky-400 text-white cursor-pointer rounded-sm">
                            Submit
                        </button>
                        </form>
                    ):(
                        task.title
                    )}
                </div>
                <p className="text-sm text-gray-500">{(task.createdAt.toLocaleString().slice(0, 10))}</p>
            </div>

            {/* Status Badge */}
            <div className="flex sm:col-span-2 justify-start sm:justify-center">
                <span className={`${task.completed ? "bg-green-400 text-white" : "bg-yellow-400 text-black"} px-3 py-1 rounded-full text-xs font-semibold capitalize text-center`}>
                    {task.completed ? "completed" : "pending"}
                </span>
            </div>

            {/* Icons (Edit/Cancel & Delete) aligned to the right-hand side */}
            <div className="w-full sm:w-auto sm:col-span-3 flex items-center justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-200 mt-2 sm:mt-0">
                <button 
                className="cursor-pointer text-xl p-1 hover:bg-gray-200 rounded transition"
                onClick={() => setOnEdit((i) => !i)}
                aria-label="Edit task"
                >  
                {
                  !onEdit ? (
                        <FaPencilAlt className="text-blue-600"/>
                  ) : (
                      <MdCancel className="text-red-600"/>
                  )}
                </button>

                <button 
                className="cursor-pointer text-xl p-1 hover:bg-gray-200 rounded transition"
                onClick={() => deleteTaskHandler()}
                aria-label="Delete task">
                    <FaTrash className="text-red-600"/>
                </button>
            </div>

        </div>
        </>
    );
}

export default TaskCard;