
import { useState } from "react";
import { useNavigate} from "react-router-dom";

function CreateRezept() {
 
  const [title, setTitel] = useState<string>("");
  const [zutaten, setZutaten] = useState<string>("");
  const [zubereitung, setZubereitung] = useState<string>("");
  const [kategorie, setKategorie] = useState<string>("");
  

  const navigate = useNavigate();
//const url = import.meta.env.PORT;

  const url = "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const zutatenArray = zutaten.split(",").map(item => item.trim()).join("\n");
  

    const newRezept = {
      title,
      zutaten: zutatenArray,
      zubereitung,
      kategorie,
      
    };
  
  
    try {
      const response = await fetch(`${url}/api/rezepte`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRezept),
      });
      await response.json();
      navigate("/");
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <div className="container">
      <h1>Erstelle dein Rezept</h1>
      <form onSubmit={handleSubmit}>
        <div>

          <label>Titel: </label>
          <input className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitel(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">Kategorie</label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            value={kategorie}
            onChange={(e) => setKategorie(e.target.value)}
          >
            <option value="">Auswählen...</option>
            <option value="Frühstück">Frühstück</option>
            <option value="Mittagessen">Mittagessen</option>
            <option value="Abendessen">Abendessen</option>
            <option value="Snack">Snack</option>
          </select>
        </div>

        <div>
          <label >Zutaten: </label>
          <textarea className="form-control"
           
            value={zutaten}
            onChange={(e) => setZutaten(e.target.value)}
          />
        </div>
        <div>
          <label>Zubereitung</label>
          <textarea className="form-control"
       
            value={zubereitung}
            onChange={(e) => setZubereitung(e.target.value)}
          />
        </div>
        <div className="button-container text-end mt-3">
    <button className="btn btn-primary" type="submit">Speichern</button>
  </div>
      </form>
    </div>
  );
}

export default CreateRezept;
