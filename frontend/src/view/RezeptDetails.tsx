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
  const [kategorie, setKategorie] = useState<string>("");

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
        setKategorie(data.kategorie);
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
    const zutatenArray = zutaten
      .split(",")
      .map((item) => item.trim())
      .join(" \n");

    const editRezept = {
      title,
      zutaten: zutatenArray,
      zubereitung,
      kategorie,
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
    
    <div className="container  ">
<div className="p-4 rounded mt-5" style={{ border: '1px solid rgba(40, 167, 69, 0.2)' }}>     <div > <h1 >Rezept für {rezept?.title} </h1>
     <p className="fw-lighter fs-6">{kategorie}</p></div>
     <div className=" "><h5 className="">
        Zutaten:
      </h5>  <pre className="lh-sm py-1">
        {rezept?.zutaten}
          </pre>
</div> 
      <h5 className="">Zubereitung:</h5>
      <p>{rezept?.zubereitung}</p>

      <p className="fs-7">
        <em>Datum: {new Date().toLocaleDateString()}</em>
      </p>
      <button onClick={handleDelete} className="bg-success rounded border-0 p-1 px-2 ">
        Lösche das Rezept
      </button>
      <hr className="border-success"/>
      <h2>Rezept bearbeiten</h2>
      <form onSubmit={handleSubmit} className="form-group">
      <div className="mb-3">
   
    <input
      type="text"
      className=" form-control "
      id="title"
      placeholder="Titel"
      //value={title}
      onChange={(e) => setTitle(e.target.value)}
      style={{ borderColor: 'rgba(40, 167, 69, 0.2)' }}
    />
  </div>

        <div className="input-group mb-3">
          <label className="input-group-text">Kategorie</label>
          <select
            className="form-select" 
            id="inputGroupSelect01 "
            value={kategorie}
            
            onChange={(e) => setKategorie(e.target.value)}
            style={{ borderColor: 'rgba(40, 167, 69, 0.2)' }}
          >
            <option value="">Auswählen...</option>
            <option value="Frühstück">Frühstück</option>
            <option value="Mittagessen">Mittagessen</option>
            <option value="Abendessen">Abendessen</option>
            <option value="Snack">Snack</option>
          </select>
        </div>

        <div>
          
          <textarea
            placeholder="Zutaten"
            className="form-control"
            onChange={(e) => setZutaten(e.target.value)}
            style={{ borderColor: 'rgba(40, 167, 69, 0.2)' }}
          />
        </div>
        <div>
          
          <textarea
            placeholder="Zubereitung"
            className="form-control my-3"
            onChange={(e) => setZubereitung(e.target.value)}
            style={{ borderColor: 'rgba(40, 167, 69, 0.2)' }}
          />
        </div>
        <button className="bg-success rounded border-0 p-1 px-2" type="submit">Speichern</button>
      </form>
    </div></div>
  );
}

export default RezeptDetails;
