import React, { useState } from "react";
import "./style.css";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = (e) => {
    e.preventDefault();

    props.passNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="createNotes-container">
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={inputChange}
          placeholder="Title"
          autoComplete="off"
          className="inputarea"
          style={{ backgroundColor: "#E6DED3", width: "300px", border: "none" }}
        />
        <div>
          <textarea
            rows="5"
            name="content"
            value={note.content}
            onChange={inputChange}
            column="5"
            placeholder="Take a note..."
            className="textarea"
            style={{
              backgroundColor: "#E6DED3",
              width: "300px",
              height: "100px",
              border: "none",
            }}
          />
          <button
            disabled={!note.title}
            onClick={addEvent}
            className="button-style"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
