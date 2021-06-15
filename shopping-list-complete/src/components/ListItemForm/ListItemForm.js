import React, { useState } from "react";
import "./ListItemForm.css";

export default function ListItemForm({ addItem }) {
  const [formData, setFormData] = useState({ food: "", qty: 0 });

  // Send { food, qty } to parent and clear form
  const handleSubmit = evt => {
    evt.preventDefault();
    addItem(formData);
    setFormData({ food: "", qty: 0 });
  };

  // Update local state with current state of input element (render each keystroke)
  const handleChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;

    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  // NOTE: The name attribute on the form input fields (line 32 & 40)
  // MUST match the formData object key names (line 5)
  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="name">Name:</label>
      <input
        className="form-input"
        name="food"
        value={formData.food}
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
