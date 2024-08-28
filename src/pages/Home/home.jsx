import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { PRIORITY, STATUS } from "../../constants";
import "./styles.css";
import Icon from "../../components/Icon/Icon";
const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortOption, setSortOption] = useState("priority");
  const [loading, setLoading] = useState(true);
  const [openDisplay, setOpenDisplay] = useState(false);
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTickets(res.tickets);
        setUsers(res.users);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const getGroupedData = () => {
    const groupedData = {};
    if (groupBy === "status") {
      Object.values(STATUS).forEach((status) => {
        groupedData[status] = [];
      });
    } else if (groupBy === "userId") {
      users.forEach((user) => {
        groupedData[user.id] = [];
      });
    } else if (groupBy === "priority") {
      PRIORITY.forEach((p, i) => {
        groupedData[p] = [];
      });
    }
    tickets.forEach((ticket) => {
      const groupKey = ticket[groupBy];
      if (groupBy === "priority") {
        groupedData[PRIORITY[groupKey]].push(ticket);
      } else {
        groupedData[groupKey].push(ticket);
      }
    });
    return groupedData;
  };
  const sortTickets = (ticketsArray) => {
    return [...ticketsArray].sort((a, b) => {
      if (sortOption === "priority") {
        return b.priority - a.priority;
      } else if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };
  const groupedTickets = getGroupedData();
  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      
      <button onClick={() => setOpenDisplay(true)} className="display-btn">
        
        <Icon iconName="display" />
        <span className="display-text">Display</span> <Icon iconName="down" />
      </button>
      {openDisplay && (
        <div className="group">
          
          <div className="options">
            
            <label htmlFor="Grouping">Grouping</label>
            <select
              id="Grouping"
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
            >
              
              <option value="status">Status</option>
              <option value="userId">User ID</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="options">
            
            <label htmlFor="Ordering">Ordering</label>
            <select
              id="Ordering"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
      <div className="status-cover">
        
        {Object.keys(groupedTickets).map((group) => (
          <div className="status-box" key={group}>
            
            <p>
              
              {groupBy === "userId" ? (
                <Icon
                  iconName="user"
                  className="user-grp-icon"
                  userName={group}
                />
              ) : (
                <Icon iconName={group} className="group-icon" />
              )}
              {group}
              <span className="count">{groupedTickets[group].length}</span>
              <Icon iconName="threeDotMenu" className="right-icon" />
              <Icon iconName="add" className="right-icon" />
            </p>
            <div className="cards-cover">
              
              {sortTickets(groupedTickets[group]).map((ticket) => (
                <Card key={ticket.id} {...ticket} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
