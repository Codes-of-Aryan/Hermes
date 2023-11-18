import React from "react";

const VerticalMenu: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ backgroundColor: "lightgray", width: "200px" }}>
        <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
          <li style={{ padding: "10px", borderBottom: "1px solid gray" }}>
            Bookings
          </li>
          <li
            style={{
              padding: "10px",
              borderBottom: "1px solid gray",
              backgroundColor: "#575f61",
            }}
          >
            Notifications and Requests
          </li>
          <li style={{ padding: "10px", borderBottom: "1px solid gray" }}>
            Transactions
          </li>
          <li style={{ padding: "10px", borderBottom: "1px solid gray" }}>
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VerticalMenu;
