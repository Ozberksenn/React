import React, { useState } from "react";

function Form({ addSetcontacts, addContacts }) {
  /* Butona bastığımızda bir event tetiklememiz gerekiyor bu yüzden form useState tanımlıyoruz.*/
  const initialValues = { name: "", phone: "" };
  const [form, setForm] = useState(initialValues);
  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault(); // prevenetDefault fonksiyonu ile tekrardan yenilenmemesini sağladık.
    if (form.name === "" || form.phone === "") {
      return false; // formu gönderme dedik.
    }
    addSetcontacts([...addContacts, form]);
    setForm(initialValues);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          value={form.name}
          name="name"
          placeholder="Full Name"
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <input
          value={form.phone}
          name="phone"
          placeholder="Phone Number"
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="btn">
        <button>Added</button>
      </div>
    </form>
  );
}

export default Form;
