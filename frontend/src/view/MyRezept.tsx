
import { useState,useEffect } from 'react';
import {  NavLink } from 'react-router-dom';



interface Rezept {
    _id: string;
    title: string;
    zubereitung: string;
    zutaten: string;
    kategorie: string;
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
    <> <div className='container d-flex flex-wrap mt-5 '>{rezepte &&
      rezepte.map((rezept) => (

     <div className="card flex flex-grow-1 flex-lg-grow-0" style={{ width: "18rem" }} key={rezept._id}>
        <div className="card-body">
          <h5 className="card-title">{rezept.title}</h5>
          <p>
                {rezept.kategorie && rezept.kategorie.substring(0, 40)}
              </p>
          <NavLink to={`/rezept/${rezept._id}`} className="btn btn-primary">Anzeigen</NavLink>
        </div>
      </div>))}</div>
</>
  )
}

export default MyRezept