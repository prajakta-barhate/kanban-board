import React from "react";
import Icon from "../Icon/Icon";
import { PRIORITY } from "../../constants";
import "./Card.css";

const Card = ({ id, title, status, priority, tag, userId }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="small-title">{id}</span>
        <Icon iconName="user" userName={userId}/>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-footer">
        <div className="priority-icon">
        <Icon iconName={PRIORITY[priority]}/>
        </div>
        <div className="tag">
          <Icon iconName={status} className="status-icon"/>
          <span className="status-text">{tag}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;