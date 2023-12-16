import { useState } from "react";
import member1 from '../assets/people/member-1.png';
import member2 from '../assets/people/member-2.png';
import member3 from '../assets/people/member-3.png';
import member4 from '../assets/people/member-4.png';
import member5 from '../assets/people/member-5.png';
import member6 from '../assets/people/member-6.png';

const Members = () => {
  const [members,setMembers] = useState([
    {
      id: 1,
      name: "Emily",
      img_url: member6,
      position: "Project Leader",
    },
    {
      id: 2,
      name: "Johnny",
      img_url: member1,
      position: "Data Collector",
    },
    {
      id: 3,
      name: "Grace",
      img_url: member2,
      position: "Researcher",
    },
    {
      id: 4,
      name: "Author",
      img_url: member3,
      position: "UI Designer",
    },
    {
      id: 5,
      name: "Julie",
      img_url: member4,
      position: "UI Designer",
    },
    {
      id: 6,
      name: "Auston",
      img_url: member5,
      position: "UI Designer",
    },
    {
      id: 7,
      name: "Auston",
      img_url: member5,
      position: "UI Designer",
    },
    {
      id: 8,
      name: "Auston",
      img_url: member5,
      position: "UI Designer",
    },
    {
      id: 9,
      name: "Auston",
      img_url: member5,
      position: "UI Designer",
    },
  ]);
  return (
    <div className=" bg-white members-width">
      <div className=" flex justify-between items-center py-2 px-3 ">
        <p className="font-medium text-xl mb-0">Team Members</p>
        <button className="purple-btn ">See All</button>
      </div>
      <div className="flex gap-2 px-3 py-2 members-width overflow-x-scroll scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-white">
        {members.map((member) => {
          return (
            <div
              key={member?.id}
              className="flex flex-col justify-between items-center gap-1 2xl:gap-0 px-3 py-1"
            >
              <img
                src={member?.img_url}
                alt=""
                className={`w-[70px] h-[70px] 2xl:w-[80px] 2xl:h-[80px] rounded-full object-cover object-center`}
                loading="lazy"
              />
              <p className="text-lg	mb-0 text-center font-medium	">{member?.name}</p>
              <p className="min-w-[120px] text-center text-[var(--btn-bg-color)] mb-0">{member?.position}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Members;
