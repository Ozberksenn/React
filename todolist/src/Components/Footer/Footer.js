import React from "react";

function Footer({ list }) {
  const handActive = () => {};
  const handCompleted = () => {
    console.log("hello world");
  };

  return (
    <div>
      <footer className="footer">
        {/* This should be `0 items left` by default */}
        <span className="todo-count">
          <strong>List Item : {list.length}</strong>
        </span>
        <ul className="filters">
          <li>
            <a className="selected">All</a>
          </li>
          <li>
            <a onClick={handActive}>Active</a>
          </li>
          <li>
            <a onClick={handCompleted}>Completed</a>
          </li>
        </ul>
        {/* Hidden if no completed items are left ↓ */}
        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
}

export default Footer;
