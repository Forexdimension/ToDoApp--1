import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskCard from "./TaskCard";
import { useEffect } from "react";
const tasks = [
  {
    id: 1,
    title: "Finish the React TodoApp homepage",
    completed: true,
    createdAt: "2026-11-10T09:00:00Z",
  },
  {
    id: 2,
    title: "Connect the navigation bar and routing",
    completed: false,
    createdAt: "2026-11-11T10:30:00Z",
  },
];
function Task() {
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem ("tasks") 
    
    return JSON.parse(storedTasks) || []; 
  });

  useEffect (()=>{
    localStorage.setItem("tasks", JSON.stringify(taskList));
  },[taskList]);
    return (
        <>
           <section className="bg-gray-300 min-h-[calc(100vh-10rem)]">
            <div className="px-10 flex flex-col gap-4 mt-4">

              <AddTaskForm  taskList= {taskList} setTaskList={setTaskList} />

                {taskList.length === 0 ? ( 
                  <div className="h-[calc(100vh-20rem)] w-full flex justify-center items-center">
                    <p>Add your new task</p>
                  </div>
                ) :
               ( taskList.map((item, index) => (
                    <TaskCard key={index} task={item} setTasklist={setTaskList}/>
                )))
              }

            </div>
           </section>
        </>
    )
}

export default Task
