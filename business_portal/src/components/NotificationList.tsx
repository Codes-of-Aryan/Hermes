import React, { useState } from "react";
import "./NotificationList.css";
import Modal from "./Modal";

interface Notification {
  title: string;
  category: string;
  id: string;
  description: string;
}

const NotificationList: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] =
    useState<Notification | null>(null);

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

  const removeNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
    fetch("/api/profile", {
      method: "DELETE",
      body: JSON.stringify({ id: id, status: "rejected" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const acceptRequest = (id: string) => {
    fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({ id: id, status: "accepted" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const openModal = (notification: Notification) => {
    setSelectedNotification(notification);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNotification(null);
    setModalOpen(false);
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
                    <button onClick={() => openModal(notification)}>
                      View Description
                    </button>
                    {modalOpen &&
                      selectedNotification?.id === notification.id && (
                        <Modal
                          isOpen={true}
                          onClose={closeModal}
                          bodyText={notification.description}
                        />
                      )}
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
    </div>
  );
};

export default NotificationList;
