import Contact from "./../../components/contact/Contact";
import Header from "./../../components/header/Header";
import Sidebar from "./../../components/sidebar/Sidebar";
const Friend = () => {
  return (
    <div className="Friend">
      <Header />
      <div className="sidebar-left">
        <Sidebar />
      </div>
      <div className="main">friend pages</div>
      <div className="contact-right">
        <Contact />
      </div>
    </div>
  );
};

export default Friend;
