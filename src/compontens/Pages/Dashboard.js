import { useContext } from "react";

import FormText from "../Formtext";
import { DashContext } from "../DashContext";
import Footer from "../Footer.js";
import "../Pages/Dashboard.css";
function Dashboard() {
  const { input, setInput } = useContext(DashContext);
  function appendListEntry(travel, experiences, setValues) {
    setInput((listEntry) => [
      ...listEntry,
      {
        travel,
        experiences,
        setValues,
        id: Math.random().toString(36).substring(2),
      },
    ]);
  }
  return (
    <>
      <div className="container">
        <h1> Your blog entry </h1>
        <div className="container_textform"></div>
        <div className="container_textform">
          <FormText appendListEntry={appendListEntry} />
        </div>
        <div className="container_textform"></div>
      </div>
      <Footer />
    </>
  );
}
export default Dashboard;
