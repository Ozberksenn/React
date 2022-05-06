import React, { useState } from "react";

function List({ addContacts }) {
  const [filter, setFilter] = useState("");

  const filtered = addContacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filter.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <input
        placeholder="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      ></input>
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            {contact.name}
            <span>{contact.phone}</span>
          </li>
        ))}
      </ul>
      <p>Liste Sayısı : ({filtered.length})</p>
    </div>
  );
}

export default List;
