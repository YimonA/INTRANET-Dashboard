import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const Calendar = () => {
  const [state, setState] = useState({
    currentEvents: [],
  });
  const names = [
    {
      title: "Task",
      color: "bg-[#46ECF7]",
    },
    {
      title: "Meeting",
      color: "bg-[#46B7F7]",
    },
    {
      title: "Schedule",
      color: "bg-[#F79B46]",
    },
    {
      title: "Today",
      color: "bg-[#F74646]",
    },
  ];

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const renderEventContent = () => {
    return <p className="w-full h-4"></p>;
  };

  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const events = [
    {
      id: 1,
      title: "Schedule",
      start: "2023-12-03T07:00:00",
    },
    {
      id: 2,
      title: "Meeting",
      start: "2023-12-25T07:00:00",
    },
    {
      id: 3,
      title: "Task",
      start: "2023-12-27T07:00:00",
      end: "2023-12-29T07:00:00",
    },
  ];

  return (
    <div className="w-[360px] bg-white ps-3 pe-4 py-3">
      <div className="flex justify-between items-start pb-3">
        <div className="text-[#1B2126] flex flex-col gap-3">
          <span className="text-sm">Calendar</span>
          <span className="text-2xl font-semibold border-b-4 border-b-[#5490E9]">
            {new Date().getFullYear()}
          </span>
        </div>
        <div className="">
          {names?.map((name, index) => {
            return (
              <div key={index} className="flex justify-end items-center gap-2 ">
                <span className="text-[#9FA9B2]">{name?.title}</span>
                <span
                  className={` w-[10px] h-[10px] rounded-full ${name?.color}`}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}
        events={events}
        eventDidMount={(info) => {
          if (info.event.title === "Meeting") {
            info.el.style.backgroundColor = "#46B7F7";
          } else if (info.event.title === "Schedule") {
            info.el.style.backgroundColor = "#F79B46";
          } else if (info.event.title === "Task") {
            info.el.style.backgroundColor = "#46ECF7";
          }
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true} //+1More
        select={handleDateSelect} //add
        eventContent={renderEventContent}
        eventClick={handleEventClick} //delete
        height={"430px"}
      />
    </div>
  );
};

export default Calendar;
