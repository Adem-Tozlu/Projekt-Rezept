import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Rezept {
  title: string;
  zutaten: string;
  zubereitung: string;
}

function RezeptDetails() {
  const [rezept, setRezept] = useState<Rezept | null>(null);
  const [title, setTitle] = useState<string>("");
  const [zutaten, setZutaten] = useState<string>("");
  const [zubereitung, setZubereitung] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const url = "http://localhost:5000";

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${url}/api/rezepte/${id}`);
        const data = await response.json();
        setRezept(data);
        setTitle(data.title);
        setZutaten(data.zutaten.join(", "));
        setZubereitung(data.zubereitung);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Willst du das Rezept löschen?")) {
      await fetch(`${url}/api/rezepte/${id}`, {
        method: "DELETE",
      });
      navigate("/");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const zutatenArray = zutaten.split(",").map(item => item.trim());
  
    const editRezept = {
      title,
      zutaten: zutatenArray,
      zubereitung,
    };
  
    try {
      const response = await fetch(`${url}/api/rezepte/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editRezept),
      });
      await response.json();
      navigate("/");
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  return (
    <div className="container">
      <h1>Titel: {rezept?.title}</h1>
      <p>Zutaten: {rezept?.zutaten.join(", ")}</p>
      <p>Zubereitung: {rezept?.zubereitung}</p>

      <p>
        <em>Datum: {new Date().toLocaleDateString()}</em>
      </p>
      <button onClick={handleDelete} style={{ background: "red" }}>
        Lösche das Rezept
      </button>
      <h2>Rezept bearbeiten</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titel: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          <label>Zubereitung: </label>
          <input
            type="text"
            value={zubereitung}
            onChange={(e) => setZubereitung(e.target.value)}
          />
        </div>
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
}

export default RezeptDetails;