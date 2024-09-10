import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Rezept {
  _id: string;
  title: string;
  anweisung: string;
}

//const url = import.meta.env.PORT;

function RezeptPages() {
  const [rezepte, setRezepte] = useState<Rezept[]>([]);

  const url = "http://localhost:5000";

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${url}/api/rezepte`);
        const data = await response.json();
        setRezepte(data);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h1>Rezept Seite</h1>

      <ul>
        {rezepte &&
          rezepte.map((rezept) => (
            <li key={rezept._id}>
            <h2>{rezept.title}</h2>
            <p>{rezept.anweisung && rezept.anweisung.substring(0, 100)}...</p>
            <Link to={`/rezept/${rezept._id}`}>Read more</Link>
          </li>
          ))}
      </ul>
    </div>
  );
}

export default RezeptPages;
