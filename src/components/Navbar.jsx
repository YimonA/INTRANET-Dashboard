
const Navbar = () => {
  const purpleBtns = ["연차", "사용자화면 전환", "로그아웃"];
  const basisBtns = [
    "기본운영 관리",
    "조직 및 사원관리",
    "휴일/휴가 관리",
    "커뮤니티 관리",
  ];
  return (
    <div className="p-3 bg-white flex justify-between items-center">
      <span className="ps-20 text-[var(--logo-color)] text-3xl font-bold select-none">
        INTRANET
      </span>
      <div className="flex flex-col justify-center items-end gap-2 ">
        <div className="flex gap-6 items-center">
          <span>관리자님! 환영합니다.</span>
          <div className="flex gap-3">
            {purpleBtns.map((purpleBtn, index) => {
              return (
                <button
                  key={index}
                  className="px-3.5 py-2 bg-[var(--btn-bg-color)] text-white rounded-md	text-sm	font-bold hover:bg-[var(--btn-hover-color)] "
                >
                  {purpleBtn}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex gap-1">
          {basisBtns.map((basisBtn, index) => {
            return (
              <button
                key={index}
                className="px-3.5 py-2  text-black border border-black rounded hover:bg-[#f2f2f7]"
              >
                {basisBtn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
