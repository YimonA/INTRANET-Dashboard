import { useState } from "react";

const Members = () => {
  const [members,setMembers] = useState([
    {
      id: 1,
      name: "Emily",
      img_url: "../src/assets/people/member-6.png",
      position: "Project Leader",
    },
    {
      id: 2,
      name: "Johnny",
      img_url: "../src/assets/people/member-1.png",
      position: "Data Collector",
    },
    {
      id: 3,
      name: "Grace",
      img_url: "../src/assets/people/member-2.png",
      position: "Researcher",
    },
    {
      id: 4,
      name: "Author",
      img_url: "../src/assets/people/member-3.png",
      position: "UI Designer",
    },
    {
      id: 5,
      name: "Julie",
      img_url: "../src/assets/people/member-4.png",
      position: "UI Designer",
    },
    {
      id: 6,
      name: "Auston",
      img_url: "../src/assets/people/member-5.png",
      position: "UI Designer",
    },
    {
      id: 7,
      name: "Auston",
      img_url: "../src/assets/people/member-5.png",
      position: "UI Designer",
    },
    {
      id: 8,
      name: "Auston",
      img_url: "../src/assets/people/member-5.png",
      position: "UI Designer",
    },
    {
      id: 9,
      name: "Auston",
      img_url: "../src/assets/people/member-5.png",
      position: "UI Designer",
    },
  ]);
  return (
    <div className=" bg-white members-width">
      <div className=" flex justify-between items-center py-2 px-3 ">
        <p className="font-medium text-xl mb-0">Team Members</p>
        <button className="purple-btn ">See All</button>
      </div>
      <div className="flex gap-3 p-3 members-width overflow-x-scroll scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-white">
        {members.map((member) => {
          return (
            <div
              key={member?.id}
              className="flex flex-col justify-between items-center gap-1 2xl:gap-2 px-3 py-2 rounded-md"
            >
              <img
                src={member?.img_url}
                alt=""
                className={`w-[70px] h-[70px] 2xl:w-[80px] 2xl:h-[80px] rounded-full object-cover object-center`}
                loading="lazy"
              />
              <p className="text-lg	mb-0 text-center font-medium	">{member?.name}</p>
              <p className="min-w-[110px] text-center text-[var(--btn-bg-color)] mb-0">{member?.position}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Members;
