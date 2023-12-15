import { useState } from "react";

const Documents = () => {
  const [docs, setDocs] = useState([
    {
      id: 1,
      doc_name: "Work Flow Explain",
      submitted_by: "By Jassi",
      img_url: "../src/assets/people/member-7.png",
      submitted_date: "19 Sep 2023",
      submitted_time: "11:00 AM",
    },
    {
      id: 2,
      doc_name: "Work Flow Explain",
      submitted_by: "By Jassi",
      img_url: "../src/assets/people/member-7.png",
      submitted_date: "19 Sep 2023",
      submitted_time: "11:00 AM",
    },
    {
      id: 3,
      doc_name: "Work Flow Explain",
      submitted_by: "By Jassi",
      img_url: "../src/assets/people/member-7.png",
      submitted_date: "19 Sep 2023",
      submitted_time: "11:00 AM",
    },
    {
      id: 4,
      doc_name: "Work Flow Explain",
      submitted_by: "By Jassi",
      img_url: "../src/assets/people/member-7.png",
      submitted_date: "19 Sep 2023",
      submitted_time: "11:00 AM",
    },
    {
      id: 5,
      doc_name: "Work Flow Explain",
      submitted_by: "By Jassi",
      img_url: "../src/assets/people/member-7.png",
      submitted_date: "19 Sep 2023",
      submitted_time: "11:00 AM",
    },
  ]);
  
  return (
    <div className="doc-width bg-white">
      <div className="flex justify-between items-center py-2 px-3 ">
        <p className="font-medium text-xl mb-0">Documents</p>
        <button className="purple-btn">See All</button>
      </div>
      <div className="flex flex-col gap-3 p-3 doc-height overflow-y-scroll scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-white">
        {docs.map((doc) => {
          return (
            <div
              key={doc?.id}
              className="border border-[var-(--gray-color)] flex justify-between items-center gap-4 px-3 py-2 rounded-md hover:bg-gray-100"
            ><div className="flex justify-start items-center gap-3">
              <img
                src={`${doc?.img_url}`}
                alt=""
                className="w-[50px] h-[50px] rounded-full object-cover object-center"
                loading="lazy"
              />
              <div>
                <p className="font-medium	">{doc?.doc_name}</p>
                <p className="mb-0 text-[var(--gray-font)] text-sm">
                  {doc?.submitted_by}
                </p>
              </div>
              </div>
              <div>
                <p className="text-sm	text-[var(--btn-bg-color)] text-center">
                  {doc?.submitted_date}
                </p>
                <p className="mb-0 text-xs text-[var(--btn-bg-color)] text-center">
                  {doc?.submitted_time}
                </p>
              </div>
              <button className="purple-btn">Read</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Documents;
