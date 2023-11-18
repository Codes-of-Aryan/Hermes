import React from "react";
import "./App.css";

import Header from "./components/Header";
import VerticalMenu from "./components/VerticalMenu";
import NotificationList from "./components/NotificationList";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="main-app-window">
        <VerticalMenu />
        <div className="notification-list">
          <NotificationList />
        </div>
      </div>
    </div>
  );
};

export default App;
