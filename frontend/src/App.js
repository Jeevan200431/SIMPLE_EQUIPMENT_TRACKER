import { useEffect, useState } from "react";
import EquipmentTable from "./components/EquipmentTable";
import EquipmentForm from "./components/EquipmentForm";
import "./App.css";

const API_URL = "http://localhost:5000/api/equipment";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [search, setSearch] = useState("");

  const fetchEquipment = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setEquipment(data);
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <div className="container">
      <h2>Equipment Tracker</h2>

      <input
        type="text"
        placeholder="Search equipment"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <EquipmentForm
        fetchEquipment={fetchEquipment}
        editingItem={editingItem}
        setEditingItem={setEditingItem}
      />

      <EquipmentTable
        equipment={equipment}
        fetchEquipment={fetchEquipment}
        setEditingItem={setEditingItem}
        search={search}
      />
    </div>
  );
}

export default App;
