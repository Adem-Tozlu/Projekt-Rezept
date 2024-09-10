import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Rezept {
  title: string;
  zutaten: string;
  zubereitung: string;
  date: string;
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
  if (!rezept) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{rezept?.title}</h1>
      <p>{rezept?.zutaten}</p>
      <p>{rezept?.zubereitung}</p>

      <p>
        <em>{new Date(rezept?.date).toLocaleDateString()}</em>
      </p>
      <button onClick={handleDelete} style={{ background: "red" }}>
        Lösche das Rezept
      </button>
    </div>
  );
}
export default RezeptDetails;
