import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateRezept() {
  const [titel, setTitel] = useState<string>("");
  const [zutaten, setZutaten] = useState<string>("");
  const [zubereitung, setZubereitung] = useState<string>("");

  const navigate = useNavigate();

  //const url = import.meta.env.PORT;

  const url = "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newRezept = { titel, zutaten, zubereitung };

    await fetch(`${url}/api/rezepte`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRezept),
    });

    navigate("/");
  };

  return (
    <div className="container">
      <h1>Create new Rezept</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titel: </label>
          <input
            type="text"
            value={titel}
            onChange={(e) => setTitel(e.target.value)}
          />
        </div>

        <div>
          <label>Zutaten: </label>
          <input
            type="text"
            value={zutaten}
            onChange={(e) => setZutaten(e.target.value)}
          />
        </div>
        <div>
          <label>Zubereitung</label>
          <input
            type="text"
            value={zubereitung}
            onChange={(e) => setZubereitung(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateRezept;
