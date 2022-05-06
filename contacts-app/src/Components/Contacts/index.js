import { useState, useEffect } from "react";

import "./style.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      name: "UserOne",
      phone: "123456",
    },
    {
      name: "UserTwo",
      phone: "654321",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>CONTACT FORM</h1>

      <List addContacts={contacts} />
      <Form addSetcontacts={setContacts} addContacts={contacts} />
    </div>
  );
}

export default Contacts;
