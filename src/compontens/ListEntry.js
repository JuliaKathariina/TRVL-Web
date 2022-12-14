import React from "react";

function ListEntry({ id, travel, experiences, handleRemove }) {
  return (
    <section>
      <p>{travel} </p>

      <p>#{experiences} </p>

      <button type="button" onClick={() => handleRemove(id)}>
        Delete
      </button>
    </section>
  );
}
export default ListEntry;
