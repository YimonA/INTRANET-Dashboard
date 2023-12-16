import { useState } from "react";

const Tasks = () => {
  const [tasks,setTasks] =useState ([{
    id:1,
    title:"Working on Tesla Project",
  },
  {
    id:2,
    title:"Working on Tesla Project",
  },
  {
    id:3,
    title:"Working on Tesla Project",
  },
  {
    id:4,
    title:"Working on Tesla Project",
  },
  {
    id:5,
    title:"Working on Tesla Project",
  },
  ])

  return (
    <div className="w-[360px] bg-white min-h-[460px]">
      <div className="flex justify-between items-center py-2 px-3 border-b-2 border-b-black">
        <p className="font-medium text-xl mb-0">Task to do</p>
        <button className="purple-btn">See All</button>
      </div>
      <div className="flex flex-col gap-3 p-3 min-h-[340px] task-height overflow-y-scroll scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-white">
        {tasks.map((task) => {
          return (
            <div
              key={task.id}
              className="bg-[#e5e5f0] flex items-center gap-2 px-3 py-2 rounded-md"
            >
              <input
                type="checkbox"
                id={task.id}
                name="task"
                value={task.title}
                className="option-input border border-[var-(--btn-bg-color)] me-3"
              />
              <label htmlFor={task.id} className="text-[var(--task-list-color)]">
                {task.title}
              </label>
            </div>
          );
        })}
      </div>
      <div className="flex p-3 gap-0 justify-normal items-center">
        <input
          type="text"
          className="w-full h-[40px] px-2 border border-e-0 focus:border-e-0 border-gray-400 rounded-s-md rounded-e-none focus:rounded-e-none focus:border-gray-400 focus:outline-gray-400"
        />
        <button className="text-white px-3 py-2 bg-[var(--btn-bg-color)] border rounded-e-md min-w-[78px] hover:bg-[var(--btn-hover-color)]">
          Search
        </button>
      </div>
    </div>
  );
};

export default Tasks;
