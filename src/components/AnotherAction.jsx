import * as React from "react";
import achievements from "../assets/icons/achievements.svg";
import blogs from "../assets/icons/blogs.svg";
import share from "../assets/icons/share.svg";
import map from "../assets/icons/map.svg";
import plus from "../assets/icons/plus.svg";
import youtubeLogo from "../assets/icons/youtube-logo.svg";

import leave from "../assets/icons/leave.svg";
import teamChat from "../assets/icons/team-chat.svg";
import helpCenter from "../assets/icons/help-center.svg";
import meetingRoom from "../assets/icons/meeting-room.svg";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useEffect } from "react";

const AnotherAction = () => {
  const [leftSideActions, setLeftSideActions] = useState([
    {
      id: 1,
      name: "Local Guide",
      icon: <img src={map} className="w-[45px] h-[45px]" />,
    },
    {
      id: 2,
      name: "Meeting Room",
      icon: <img src={meetingRoom} className="w-[45px] h-[45px]" />,
    },
    {
      id: 3,
      name: "YouTube Channel",
      icon: <img src={youtubeLogo} className="w-[45px] h-[45px]" />,
    },
    {
      id: 4,
      name: "Blogs",
      icon: <img src={blogs} className="w-[45px] h-[45px]" />,
    },
    {
      id: 5,
      name: "Share Docs",
      icon: <img src={share} className="w-[45px] h-[45px]" />,
    },
    {
      id: 6,
      name: "",
      icon: <img src={plus} className="w-[45px] h-[45px]" />,
      click: "handleClickOpen",
    },
  ]);
  const [open, setOpen] = React.useState(false);
  const [newSectionName, setNewSectionName] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const createSectionHandler =() => {
    
  };
  return (
    <div className="flex flex-row justify-start items-stretch gap-3">
      <div className="w-[428px] min-h-[200px] bg-white p-3 flex flex-wrap items-center justify-start gap-2">
        {leftSideActions?.map((leftSideAction) => {
          return (
            <button
              onClick={
                leftSideAction?.click === "handleClickOpen" && handleClickOpen
              }
              className="w-[95px] h-[95px] border border-black rounded flex flex-col gap-2 items-center justify-center hover:bg-[#f2f2f7]"
              key={leftSideAction?.id}
            >
              {leftSideAction?.icon}
              <p className="text-center text-sm	">{leftSideAction?.name}</p>
            </button>
          );
        })}
      </div>
      <div className=" flex flex-col gap-3">
        <div
          className={`right-action-width h-[112px] flex justify-between items-stretch gap-2`}
        >
          <button
            className={`basis-1/2 bg-[#A2A1D0] hover:bg-[#8f8ec1] flex flex-col justify-center items-center gap-3`}
          >
            <img src={leave} alt="" className="w-[50px] h-[50px]" />
            <p className="font-medium min-w-[90px] text-sm 2xl:text-xl text-center">
              My Leave
            </p>
          </button>
          <button
            className={`basis-1/2 bg-[#44B7EA] hover:bg-[#33a0cf] flex flex-col justify-center items-center gap-3`}
          >
            <img src={helpCenter} alt="" className="w-[50px] h-[50px]" />
            <p className="font-medium min-w-[90px] text-sm 2xl:text-xl text-center">
              Help Center
            </p>
          </button>
        </div>
        <div className="right-action-width h-[112px] flex justify-between items-stretch gap-2">
          <button
            className={`basis-1/2 bg-[#D6301B] hover:bg-[#d42a13c7] flex flex-col justify-center items-center gap-3`}
          >
            <img src={teamChat} alt="" className="w-[50px] h-[50px]" />
            <p className="font-medium min-w-[90px] text-sm 2xl:text-xl text-center">
              Team Chat
            </p>
          </button>
          <button
            className={`basis-1/2 bg-[#EF8F00] hover:bg-[#ef8f00ce] flex flex-col justify-center items-center gap-3`}
          >
            <img src={achievements} alt="" className="w-[50px] h-[50px]" />
            <p className="font-medium min-w-[90px] text-sm 2xl:text-xl text-center">
              Achievements
            </p>
          </button>
        </div>
      </div>
      {/* dialog start */}
      <Dialog open={open}>
        <form onSubmit={createSectionHandler}>
          <DialogTitle>Create New Action</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create new section, fill the section name please.
            </DialogContentText>
            <input
              autoFocus
              id="name"
              placeholder="Section name"
              type="text"
              onChange={(e) => setNewSectionName(e.target.value)}
              className="mt-4 w-full border-b border-b-gray-300 focus:border-b-gray-600 focus:outline-none h-[30px] p-3"
              required
            />
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose}>Cancel</button>
            <button type="submit">Create</button>
          </DialogActions>
        </form>
      </Dialog>
      {/* dialog end */}
    </div>
  );
};

export default AnotherAction;
