import { useContext } from "react";

import FormText from "../Formtext";
import { DashContext } from "../DashContext";

function Dashboard() {
  const { input, setInput } = useContext(DashContext);
  function appendListEntry(travel, experiences) {
    setInput((listEntry) => [
      ...listEntry,
      {
        travel,
        experiences,

        id: Math.random().toString(36).substring(2),
      },
    ]);
  }
  return (
    <div className="container">
      <h1> Your blog entry </h1>
      <div className="container_textform"></div>
      <div className="container_textform">
        <FormText appendListEntry={appendListEntry} />
      </div>
      <div className="container_textform"></div>
    </div>
  );
}
export default Dashboard;
