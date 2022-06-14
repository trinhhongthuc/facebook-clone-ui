import Contact from "../contact/Contact";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <div className="sidebar-left">
        <Sidebar />
      </div>
      <div className="main">Home pages</div>
      <div className="contact-right">
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
