
import { useState } from "react";
import { useNavigate} from "react-router-dom";






function CreateRezept() {
 
  const [title, setTitel] = useState<string>("");
  const [zutaten, setZutaten] = useState<string>("");
  const [zubereitung, setZubereitung] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const navigate = useNavigate();
//const url = import.meta.env.PORT;

  const url = "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const zutatenArray = zutaten.split(",").map(item => item.trim()).join("\n");
  

    const formData = new FormData();
    formData.append("title", title);
    formData.append("zutaten", zutatenArray);
    formData.append("zubereitung", zubereitung);
    if (image) {
      formData.append("image", image);
    }
  
    try {
      const response = await fetch(`${url}/api/rezepte`, {
        method: "POST",
       
        body: formData,
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

        <label>Dein Rezeptbild:</label>
          <input
            className="form-control"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          />

          <label>Titel: </label>
          <input className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitel(e.target.value)}
          />
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
