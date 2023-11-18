import React, { useState } from "react";
import "./NotificationList.css";

function NotificationList() {
  const [notifications, setNotifications] = useState([
    {
      title: "Disability Request",
      category: "Customer Request",
      id: "1",
      description:
        "I am a person with disability and I need a wheelchair, flight no: CX 1234, ferry boarding at : 1600 hrs 12/12/2021",
    },
    {
      title: "Delay Notification",
      category: "Flight Event",
      id: "2",
      description:
        "Flight no : CX 1234, delayed by 1 hour, new arrival datetime: 1800 hrs 12/12/2021",
    },
  ]);
  //function to remove notification from the list
  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
    //send a rest delete request to the backend
    fetch("/api/profile", {
      method: "DELETE",
      body: { id: id, status: "rejected" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the server response
      })
      .catch((error) => {
        console.error(error); // Handle the error
      });
  };
  //function to accept the request
  const acceptRequest = (id) => {
    //send a rest put request to the backend
    fetch("/api/profile", {
      method: "PUT",
      body: { id: id, status: "accepted" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the server response
      })
      .catch((error) => {
        console.error(error); // Handle the error
      });
  };
  return (
    <div>
      <h2>Notifications and Requests</h2>
      <div>
        <table>
          {notifications.map((notification) => (
            <tr>
              <div key={notification.id}>
                <h3 className="inline-el">{notification.title}</h3>
                <p className="inline-el">{notification.category}</p>
                <button onClick={() => removeNotification(notification.id)}>
                  Remove
                </button>
                <button>View Description</button>
                <button onClick={() => acceptRequest(notification.id)}>
                  Accept
                </button>
              </div>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default NotificationList;
