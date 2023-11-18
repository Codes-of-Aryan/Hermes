import "./App.css";
import Header from "./components/Header";
import VerticalMenu from "./components/VerticalMenu";
import NotificationList from "./components/NotificationList";

function App() {
  return (
    <div className="main-app-window">
      <Header />
      <VerticalMenu />
      <NotificationList />
    </div>
  );
}

export default App;
