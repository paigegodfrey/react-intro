import React, { useState } from "react";
import "./ListItemForm.css";

export default function ListItemForm({ addItem }) {
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
      <label className="form-label" htmlFor="name">Name:</label>
      <input
        className="form-input"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="qty">Quantity:</label>
      <input
        className="form-input"
        type="number"
        name="qty"
        value={formData.qty}
        onChange={handleChange}
      />
      <button>Add item!</button>
    </form>
  );
};
