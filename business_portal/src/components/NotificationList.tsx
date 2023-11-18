import React, { useState } from "react";
import "./NotificationList.css";

interface Notification {
  title: string;
  category: string;
  id: string;
  description: string;
}

const NotificationList: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleViewDescription = (description: string) => {
    setPopupContent(description);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const [notifications, setNotifications] = useState<Notification[]>([
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
    {
      title: "Flight Delay Notification",
      category: "Flight Update",
      id: "3",
      description:
        "Flight XYZ123 from City A to City B is experiencing a delay of 2 hours. We apologize for the inconvenience caused and appreciate your patience.",
    },
    {
      title: "Welcome to the Partner Program",
      category: "Third-Party Service",
      id: "4",
      description:
        "We are pleased to announce our partnership with you! This integration will enhance our offerings and provide you with more options and convenience.",
    },
  ]);

  // Function to remove notification from the list
  const removeNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
    // Send a REST delete request to the backend
    fetch("/api/profile", {
      method: "DELETE",
      body: JSON.stringify({ id: id, status: "rejected" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the server response
      })
      .catch((error) => {
        console.error(error); // Handle the error
      });
  };

  // Function to accept the request
  const acceptRequest = (id: string) => {
    // Send a REST put request to the backend
    fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({ id: id, status: "accepted" }),
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
          <tbody>
            {notifications.map((notification) => (
              <tr
                className="notification-list"
                style={{ marginBottom: "10px" }}
                key={notification.id}
              >
                <td>
                  <h3 className="inline-el">{notification.title}</h3>
                  <p className="inline-el">{notification.category}</p>
                  <div className="button-container">
                    <button onClick={() => removeNotification(notification.id)}>
                      Remove
                    </button>
                    <button
                      onClick={() =>
                        handleViewDescription(notification.description)
                      }
                    >
                      View Description
                    </button>
                    <button onClick={() => acceptRequest(notification.id)}>
                      Accept
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="popup-content">
          <div>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
            <p>{popupContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationList;
