import pm from '../assets/people/project-manager.png';

const Sidebar = () => {
  const sideLists = [
    "부서 관리",
    "부서간 사원 이동",
    "직위 관리",
    "사원 및 권한 관리",
  ];

  return (
    <div className="bg-white min-w-[290px] h-[var(--min-height)] flex flex-col justify-between py-3">
      <ul>
        {sideLists.map((sideList, index) => {
          return (
            <li
              key={index}
              className=" ps-24 pe-3.5 py-2 text-[var(--font-color)] rounded-md cursor-pointer text-sm	font-bold hover:text-[var(--btn-hover-color)]"
            >
              {sideList}
            </li>
          );
        })}
      </ul>
      <div className='flex justify-center items-center gap-8 px-5'>
        <img src={pm} alt="Aung" className="w-[70px] h-[70px] 2xl:w-[85px] 2xl:h-[85px] rounded-full"/>
        <div>
          <p className="font-bold text-[var(--secondary-color)] text-lg	">Aung</p>
          <p className="font-bold text-[#8C8BC2]	mb-0 test-sm">Project Manger</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;