import React from "react";
import ThreeDotMenuIcon from "../../assets/Icons/3_dot_menu.svg";
import AddIcon from "../../assets/Icons/add.svg";
import BacklogIcon from "../../assets/Icons/Backlog.svg";
import CancelledIcon from "../../assets/Icons/Cancelled.svg";
import DisplayIcon from "../../assets/Icons/Display.svg";
import DoneIcon from "../../assets/Icons/Done.svg";
import DownIcon from "../../assets/Icons/down.svg";
import HighPriorityIcon from "../../assets/Icons/Img_High_Priority.svg";
import LowPriorityIcon from "../../assets/Icons/Img_Low_Priority.svg";
import MediumPriorityIcon from "../../assets/Icons/Img_Medium_Priority.svg";
import InProgressIcon from "../../assets/Icons/in_progress.svg";
import NoPriorityIcon from "../../assets/Icons/No_priority.svg";
import ToDoIcon from "../../assets/Icons/To_do.svg";
import UrgentPriorityColorIcon from "../../assets/Icons/Urgent_Priority_colour.svg";

export const IconMap = {
  threeDotMenu: ThreeDotMenuIcon,
  add: AddIcon,
  Backlog: BacklogIcon,
  Canceled: CancelledIcon,
  display: DisplayIcon,
  Done: DoneIcon,
  down: DownIcon,
  High: HighPriorityIcon,
  Low: LowPriorityIcon,
  Medium: MediumPriorityIcon,
  "In progress": InProgressIcon,
  "No priority": NoPriorityIcon,
  Todo: ToDoIcon,
  Urgent: UrgentPriorityColorIcon,
};

const Icon = ({ iconName, className, userName }) => {
  console.log(iconName);
  const iconSrc = IconMap[iconName];
  return iconName === "user" ? (
    <div className={`user-icon ${className}`}>
      {userName.split(" ").map((s) => s[0].toUpperCase())}
    </div>
  ) : (
    <img src={iconSrc} alt={iconName} className={`icon ${className}`} />
  );
};

export default Icon;
