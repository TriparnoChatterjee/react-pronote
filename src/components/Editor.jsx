import { useState } from "react";
import classes from "./Editor.module.css";
const Editor = (props) => {
    const[note,updateNote] = useState("");
  const handleChanges = (event) => {
        updateNote(event.target.value);
  };
  return (
    <div className={classes.container}>
      <div className={classes["input-container"]}>
        <h4>Input</h4>
        <textarea rows={20} cols={20} onChange={handleChanges}></textarea>
      </div>
      <div className={classes["output-container"]}>
        <h4>Output</h4>
        <textarea value={note} rows={20} cols={20} readOnly={true}></textarea>
      </div>
    </div>
  );
};
export default Editor;
