import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { DashContext } from "../DashContext";
import { useContext } from "react";
import ListEntry from "../ListEntry.js";
function YourBlog() {
  const { input, setInput } = useContext(DashContext);

  function handleRemove(id) {
    const newList = input.filter((listEntry) => listEntry.id !== id);

    setInput(newList);
  }
  return (
    <>
      <h1> Your journey </h1>

      <ul>
        {input?.map((listEntry) => (
          <ListEntry
            key={listEntry.id}
            id={listEntry.id}
            mantra={listEntry.mantra}
            category={listEntry.category}
            onClick={handleRemove}
          ></ListEntry>
        ))}
      </ul>

      <Footer />
    </>
  );
}
export default YourBlog;
