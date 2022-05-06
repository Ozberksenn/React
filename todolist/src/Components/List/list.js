import React from "react";

function List({ list, setList }) {
  return (
    <div>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {list.map((item, i) => (
          <li className={item.completed === true ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => {
                  setList(
                    list.map((listItem) =>
                      item.name === listItem.name
                        ? { ...listItem, completed: !item.completed }
                        : listItem
                    )
                  );
                }}
              />
              <label key={i}>{item.name}</label>
              <button
                className="destroy"
                // onClick={setList(list.filter((item) => item.id !== list.id))}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
