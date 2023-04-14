import React from "react";

function Note(props) {
  function deleteItem() {
    let index = props.index;
    props.deleteItem(index);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteItem}>DELETE</button>
    </div>
  );
}

export default Note;
