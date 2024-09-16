import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateRezept() {
  const [title, setTitel] = useState<string>("");
  const [zutaten, setZutaten] = useState<string>("");
  const [zubereitung, setZubereitung] = useState<string>("");
  const navigate = useNavigate();
 // const url = import.meta.env.PORT;

  const url = "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const zutatenArray = zutaten.split(",").map(item => item.trim());
  
    const newRezept = {
      title,
      zutaten: zutatenArray,
      zubereitung,
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
      <h1>Create new Rezept</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titel: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitel(e.target.value)}
          />
        </div>

        <div>
          <label>Zutaten: </label>
          <textarea
           
            value={zutaten}
            onChange={(e) => setZutaten(e.target.value)}
          />
        </div>
        <div>
          <label>Zubereitung</label>
          <textarea
       
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
