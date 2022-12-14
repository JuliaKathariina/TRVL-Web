import React from "react";

function ListEntry({ id, mantra, category, handleremove }) {
  return (
    <section>
      <p>{mantra} </p>

      <p>#{category} </p>

      <button type="button" onClick={() => handleremove(id)}>
        Delete
      </button>
    </section>
  );
}
export default ListEntry;
