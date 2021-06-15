import React, { useState } from "react";
import "./ListItemForm.css";

const ListItemForm = ({ addItem }) => {
  const INITIAL_STATE = { name: "", qty: 0 };
  const [formData, setFormData] = useState(INITIAL_STATE);

  // Send {name, qty } to parent and clear form
  const handleSubmit = evt => {
    evt.preventDefault();
    addItem(formData);
    setFormData(INITIAL_STATE);
  };

  // Update local state with current state of input element
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="qty">Quantity:</label>
      <input
        type="number"
        id="qty"
        name="qty"
        value={formData.qty}
        onChange={handleChange}
      />
      <button>Add item!</button>
    </form>
  );
};

export default ListItemForm;
