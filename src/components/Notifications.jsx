import { useState } from "react";
import member6 from '../assets/people/member-6.png';

const Notifications = () => {
  const [notifications,setNotifications] = useState([
    {
      id: 1,
      title: "Emily send you task to assign",
      sent_date: "18 Sep 2023",
      sent_time: "11:00 AM",
    },
    {
      id: 2,
      title: "Emily send you task to assign",
      sent_date: "18 Sep 2023",
      sent_time: "11:00 AM",
    },
    {
      id: 3,
      title: "Emily send you task to assign",
      sent_date: "18 Sep 2023",
      sent_time: "11:00 AM",
    },
  ]);

  return (
    <div className="noti-width bg-white h-[562px] 2xl:h-[540px]">
      <div className="flex justify-between items-center py-2 px-3 ">
        <p className="font-medium text-xl mb-0">Notifications</p>
        <button className="purple-btn">See All</button>
      </div>
      <div className="flex flex-col gap-3 p-3 min-h-[490px] noti-height overflow-y-scroll scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-white">
        {notifications?.map((notification) => {
          return (
            <div
              key={notification?.id}
              className="border border-[#8C8BC2] flex items-center gap-4 px-3 py-2 rounded-md hover:bg-gray-100"
            >
              <img
                src={member6}
                alt=""
                className="w-[60px] h-[60px] rounded-full object-cover object-center"
                loading="lazy"
              />
              <div className="text-[var(--secondary-color)]">
                <p className="">{notification?.title}</p>
                <p className="text-xs">{notification?.sent_date}</p>
                <p className="mb-0 text-xs ">{notification?.sent_time}</p>
              </div>
              <div className="flex flex-col gap-2">
                {/* <button className="flex justify-center items-center p-2"><PiNotePencil/> </button>
              <button className="flex justify-center items-center p-2"><PiNotePencil/> </button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
