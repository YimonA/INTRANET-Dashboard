import AnotherAction from "../components/AnotherAction";
import Calendar from "../components/Calendar";
import Documents from "../components/Documents";
import Members from "../components/Members";
import Navbar from "../components/navbar";
import Notifications from "../components/Notifications";
import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";

const Path = () => {
  return (
    <div className="w-full h-screen bg-[var(--base-color)]">
      <Navbar />
      <p className="py-3 px-24 mb-0 font-bold text-[var(--secondary-color)]">
        대시보드
      </p>
      <div className="flex gap-2 pe-3">
        <Sidebar />
        <div className="flex flex-col gap-2 h-[var(--min-height)] overflow-y-scroll scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-violet-200">
          <Calendar/>
          <Tasks />
        </div>
        <div className="flex flex-col gap-2 h-[var(--min-height)] overflow-y-scroll scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-violet-200">
          <div className="flex gap-2 ">
            <Documents />
            <Notifications />
          </div>
          <Members />
          <AnotherAction />
        </div>
      </div>
    </div>
  );
};

export default Path;
