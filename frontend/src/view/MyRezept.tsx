
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';



interface Rezept {
    _id: string;
    title: string;
    zubereitung: string;
    zutaten: string;
  }

function MyRezept() {

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
    <>
     <ul className=" list-unstyled">
        {rezepte &&
          rezepte.map((rezept) => (
            <li key={rezept._id}>
              <h2>{rezept.title}</h2>
              <p>
                {rezept.zubereitung && rezept.zubereitung.substring(0, 100)}...
              </p>
              <Link to={`/rezept/${rezept._id}`}>Read more</Link>
            </li>
          ))}
      </ul></>
  )
}

export default MyRezept