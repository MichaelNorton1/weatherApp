import { useState } from "react";
import "./sidebar.css";

const Sidebar = (props) => {
  const [value, setValue] = useState("");
  const zipCode = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const zipCode = { zipcode: value };
    props.data(zipCode);
  };

  return (
    <div className="sidebar">
      <form onSubmit={submitHandler}>
        <label>
          {" "}
          <input type="text" value={value} onChange={zipCode}></input>
        </label>
        <button type="submit" className="button">
          submit
        </button>
      </form>
    </div>
  );
};

export default Sidebar;