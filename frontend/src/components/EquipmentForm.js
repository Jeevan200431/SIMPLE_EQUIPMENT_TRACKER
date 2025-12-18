import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/equipment";

const initialState = {
  name: "",
  type: "Machine",
  status: "Active",
  lastCleanedDate: ""
};

function EquipmentForm({ fetchEquipment, editingItem, setEditingItem }) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (editingItem) setForm(editingItem);
  }, [editingItem]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.lastCleanedDate) {
      alert("All fields required");
      return;
    }

    const method = editingItem ? "PUT" : "POST";
    const url = editingItem
      ? `${API_URL}/${editingItem.id}`
      : API_URL;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm(initialState);
    setEditingItem(null);
    fetchEquipment();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <select name="type" value={form.type} onChange={handleChange}>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>
      <input type="date" name="lastCleanedDate" value={form.lastCleanedDate} onChange={handleChange} />
      <button type="submit">{editingItem ? "Update" : "Add"}</button>
    </form>
  );
}

export default EquipmentForm;
