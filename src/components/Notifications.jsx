import { useState } from "react";
import member6 from "../assets/people/member-6.png";
import { PiNotePencil } from "react-icons/pi";
import * as React from "react";
import { PiTrash } from "react-icons/pi";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {PiInfo} from "react-icons/pi";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
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
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClickOpen = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteHandler = () => {
    const newNoti = notifications.filter((noti) => {
      return noti.id !== deleteId;
    });
    setNotifications(newNoti);
    handleClose();
  };
  return (
    <div className="noti-width bg-white h-[562px] 2xl:h-[560px]">
      <div className="flex justify-between items-center py-2 px-3 ">
        <p className="font-medium text-xl mb-0">Notifications</p>
        <button className="purple-btn">See All</button>
      </div>
      <div className="flex flex-col gap-3 p-3 min-h-[507px]  noti-height overflow-y-scroll scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-white">
        {notifications?.map((notification) => {
          return (
            <div
              key={notification?.id}
              className="border border-[#8C8BC2] flex justify-between  items-center gap-4 px-3 py-2 rounded-md hover:bg-gray-100"
            >
              <div className="flex items-center gap-4">
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
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <button className="flex justify-center items-center p-2 hover:bg-indigo-100 rounded">
                  <PiNotePencil className="text-indigo-500" size={"1.3rem"} />{" "}
                </button>
                <button
                  onClick={() => handleClickOpen(notification.id)}
                  className="flex justify-center items-center p-2 hover:bg-red-100 rounded"
                >
                  <PiTrash className="text-red-500" size={"1.3rem"} />{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* dialog start */}
      <Dialog open={open} >
        <DialogTitle id="responsive-dialog-title">
          <PiInfo className="mx-auto mb-3" size={'2rem'}/>
          {"Are you sure you want to delete?"}
        </DialogTitle>
        <DialogActions >
          <div className="mx-auto">
          <button
            autoFocus
            onClick={deleteHandler}
            className="purple-outline-btn mr-3"
          >
            Sure
          </button>
          <button onClick={handleClose} className="purple-btn" autoFocus>
            Cancel
          </button></div>
        </DialogActions>
      </Dialog>
      {/* dialog end */}
    </div>
  );
};

export default Notifications;
