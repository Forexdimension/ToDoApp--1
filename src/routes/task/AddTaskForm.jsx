import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

function AddTaskForm({ taskList = [], setTaskList }) {
    const MAX_INPUT_LENGTH = 150;

    const [formInput, setFormInput] = useState("");

    const submitHandler = (e) => {
    
        e.preventDefault();

        
        const newTask = {
            
            id: taskList.length + 1,
            title: formInput,
            completed: false,
            createdAt: new Date(),
        };

        setTaskList((prev) => [...prev, newTask]);
        
        setFormInput("");
    };

    return (
        <>
           <form className="bg-white rounded-lg p-5" onSubmit={submitHandler}>
            <div className="grid grid-cols-12 gap-3">

                <div className="col-span-11 flex items-center border border-black px-5">
                    <FaPlus />

                <input className="w-full focus:ring-0 focus:outline-0" 
                type="text" 
                placeholder="Enter Task..........."
                value={formInput}
                onChange={(e) => setFormInput(e.target.value)}
                maxLength={MAX_INPUT_LENGTH} />

                </div>
                <button type="submit" 
                className="py-2 px-4 bg-sky-500 rounded-sm active:bg-blue-600 cursor-pointer">
                Add</button>
            </div>
            </form> 
        </>
    );
}

export default AddTaskForm;