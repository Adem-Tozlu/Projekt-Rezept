import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Rezept {
  title: string;
  zutaten: string;
  zubereitung: string;
}

function RezeptDetails() {
  const [rezept, setRezept] = useState<Rezept | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  //const url = import.meta.env.PORT;
  const url = "http://localhost:5000";

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${url}/api/rezepte/${id}`);
        const data = await response.json();
        setRezept(data);
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



  return (
    <div className="container">
      <h1>Titel: {rezept?.title}</h1>
      <p>Zutaten: {rezept?.zutaten}</p>
      <p>Zubereitung: {rezept?.zubereitung}</p>

      <p>
        <em>Datum: {new Date().toLocaleDateString()}</em>
      </p>
      <button onClick={handleDelete} style={{ background: "red" }}>
        Lösche das Rezept
      </button>
     
    </div>
  );
}
export default RezeptDetails;
