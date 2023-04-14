import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';

function CreateArea(prop) {
  let [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handelChange(e) {
    let { name, value } = e.target;
    setNote((pre) => {
      return {
        ...pre,
        [name]: value
      };
    });
  }

  function addNote(event) {
    prop.addNote(note);

    setNote((pre) => {
      return {
        title: "",
        content: ""
      };
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handelChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handelChange}
          value={note.content}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
