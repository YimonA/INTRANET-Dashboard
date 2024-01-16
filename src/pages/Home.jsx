import AnotherAction from "../components/AnotherAction";
import Calendar from "../components/Calendar";
import Documents from "../components/Documents";
import Members from "../components/Members";
import Navbar from "../components/Navbar";
import Notifications from "../components/Notifications";
import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[var(--base-color)]">
      <Navbar />
      <p className="py-1.5 px-16 mb-0 K-Medium text-[var(--secondary-color)]">
        대시보드
      </p>
      <div className="flex gap-3 h-[var(--min-height)] ">
        <Sidebar />
        <div className="flex gap-3 h-[var(--min-height)] overflow-y-scroll scrollbar scrollbar-thumb-violet-500 scrollbar-track-violet-200 ">
          <div className="flex flex-col gap-3 justify-between h-full">
            <Calendar />
            <Tasks />
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex gap-3 ">
              <Documents />
              <Notifications />
            </div>
            <Members />
            <AnotherAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
