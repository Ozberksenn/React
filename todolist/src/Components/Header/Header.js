import React, { useEffect, useState } from "react";

function Header({ list, setList }) {
  const [name, setName] = useState({ name: "", completed: null });
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { name: name, completed: false, id: Math.random() }]);
    setName({ routin: "" });
  };

  return (
    <div>
      <header className="header">
        <h1>Todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={name.routin}
            onChange={handleChange}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus //Autofocus özelliği boolean türünde bir özelliktir. Bu özellik tanımlandığında sayfa yüklendikten sonra tanımlanan nesnenin odaklanacağını belirtir.
          />
        </form>
      </header>
      {/* This section should be hidden by default and shown when there are todos */}
    </div>
  );
}

export default Header;
