import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateRezept() {
  const [title, setTitel] = useState<string>("");
  const [zutaten, setZutaten] = useState<string>("");
  const [zubereitung, setZubereitung] = useState<string>("");

  const navigate = useNavigate();

  //const url = import.meta.env.PORT;

  const url = "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
console.log(title, zutaten, zubereitung);

 const formData = new FormData();
 formData.append("title", title);
  formData.append("zutaten", zutaten);
  formData.append("zubereitung", zubereitung);
  try {
    const response = await axios.post(`${url}/api/rezepte`, formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },

    });
    console.log(response.data);
    navigate("/");
    
  } catch (error) {
    console.error(error);
    
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
