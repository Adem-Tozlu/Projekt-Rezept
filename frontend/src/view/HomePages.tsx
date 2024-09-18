import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";


interface Rezept {
  _id: string;
  title: string;
  zubereitung: string;
}

//const url = import.meta.env.PORT;

function HomePages() {
  const [rezepte, setRezepte] = useState<Rezept[]>([]);
  const stars = Array(5).fill(0);

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
      <div className="container mt-2 ">
        <div id="carouselExampleCaptions" className="carousel slide  ">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions "
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner rounded-5 ">
            {/* Carousel Items1 */}
            <div className="carousel-item active ">
              <div className="position-absolute top-0 start-0 w-100 h-100 gradient-overlay gradient-overlay"></div>

              <img
                src="./images/rezept1.jpg"
                className="d-block w-100 images-slider"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block ">
                <h4 className="text-shadow ">Hamburger</h4>
                <p className="text-shadow d-inline  fs-6">
                  Wer kennt ihn nicht, den klassischen Hamburger ? Wir verraten
                  dir unser Rezept!
                </p>
                <button type="button" className="ms-4 btn btn-success ">
                  zum Rezept
                </button>
              </div>
            </div>

            {/* Carousel Items2 */}
            <div className="carousel-item">
              <div className="position-absolute top-0 start-0 w-100 h-100 gradient-overlay gradient-overlay"></div>
              <div className=""></div>
              <img
                src="./images/rezept2.jpg"
                className="d-block w-100 images-slider"
                alt="..."
              />

              <div className="carousel-caption d-none d-md-block ">
                <h4 className="text-shadow ">Steak</h4>
                <p className="text-shadow d-inline  fs-6">
                  {/* Carousel Items4 */}
                  Das perfekte Steak braten – mit unserem Rezept machen auch
                  Anfänger alles richtig!
                </p>
                <button type="button" className="ms-4 btn btn-success ">
                  zum Rezept
                </button>
              </div>
            </div>

            {/* Carousel Items3 */}
            <div className="carousel-item">
              <div className="position-absolute top-0 start-0 w-100 h-100 gradient-overlay gradient-overlay"></div>
              <img
                src="./images/rezept3.jpg"
                className="d-block w-100 images-slider"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block ">
                <h4 className="text-shadow ">Rührei mit Lauchzwiebeln</h4>
                <p className="text-shadow d-inline  fs-6">
                  Wer kennt ihn nicht, den klassischen Hamburger ? Wir verraten
                  dir unser Rezept!
                </p>
                <button type="button" className="ms-4 btn btn-success ">
                  zum Rezept
                </button>
              </div>
            </div>
            {/* Carousel Items4 */}
            <div className="carousel-item">
              <div className="position-absolute top-0 start-0 w-100 h-100 gradient-overlay gradient-overlay"></div>
              <img
                src="./images/rezept3.jpg"
                className="d-block w-100 images-slider"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block ">
                <h4 className="text-shadow ">Hamburger</h4>
                <p className="text-shadow d-inline  fs-6">
                  Wer kennt ihn nicht, den klassischen Hamburger ? Wir verraten
                  dir unser Rezept!
                </p>
                <button type="button" className="ms-4 btn btn-success ">
                  zum Rezept
                </button>
              </div>
            </div>
            {/* Carousel Items5 */}
            <div className="carousel-item">
              <div className="position-absolute top-0 start-0 w-100 h-100 gradient-overlay gradient-overlay"></div>
              <img
                src="./images/rezept3.jpg"
                className="d-block w-100 images-slider"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block ">
                <h4 className="text-shadow ">Hamburger</h4>
                <p className="text-shadow d-inline  fs-6">
                  Wer kennt ihn nicht, den klassischen Hamburger ? Wir verraten
                  dir unser Rezept!
                </p>
                <button type="button" className="ms-4 btn btn-success ">
                  zum Rezept
                </button>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-success p-4 rounded-4"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-success p-4 rounded-4"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div></div>

        {/* <ul className=" list-unstyled">
      {rezepte &&
        rezepte.map((rezept) => (
          <li key={rezept._id}>
          <h2>{rezept.title}</h2>
          <p>{rezept.zubereitung && rezept.zubereitung.substring(0, 100)}...</p>
          <Link to={`/rezept/${rezept._id}`}>Read more</Link>
        </li>
        ))}
    </ul> */}
        <section className="container schnelle_rezepte">
          <h4 className="text-center">Schnelle Rezepte</h4>
          <div className=" row row-cols-1 row-cols-md-3 card-mobile">
            <div className="col ">
              {/* Card 1 */}
              <div className="card card-transform  rounded-top-4 ">
                <NavLink to="./"><img
                  src="./images/rezept2.jpg"
                  className="card-img-top rounded-top-4"
                  alt="..."
                /></NavLink>
                <div className="card-body ">
                  <h6 className="card-title">Hummus</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success"></i>
                    ))}{" "}
                    <span className="border-2 border-end bold ms-3"></span>
                    <span className="ms-3">
                      <i className="bi bi-stopwatch me-1"></i>20min
                    </span>
                  </small>
                </div>
              </div>
            </div>
            <div className="col">
              {/* Card 2 */}
              <div className="card card-transform rounded-top-4">
              <NavLink to="./"><img
                  src="./images/rezept2.jpg"
                  className="card-img-top rounded-top-4"
                  alt="..."
                /></NavLink>
                <div className="card-body">
                  <h6 className="card-title">Spaghetti Napoli</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>25min
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              {/* Card 3 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./"><img
                  src="./images/rezept2.jpg"
                  className="card-img-top rounded-top-4"
                  alt="..."
                /></NavLink>
                <div className="card-body">
                  <h6 className="card-title">Thunfisch-Wrap</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>25min
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Rezept des Monats */}

          <h4 className="text-uppercase mt-5 mb-0 bg-success bg-opacity-25 rounded-top-2 card-rezept_monat">
            <i className="bi bi-award text-success"></i> Rezept des Monats
          </h4>
          <div className="card mb-3 rounded-top-0 card-rezept_monat">
            <div className="row g-0 ">
              <div className="col-md-4">
                <img
                  src="./images/rezept2.jpg"
                  className="img-fluid  h-100"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Apfelstrudel mit Blätterteig</h5>
                  <p className="card-text">
                    Apfelstrudel mögen alle – mit unserer Variante gelingt der
                    Apfelstrudel besonders schnell und einfach: Anstelle eines
                    Strudelteigs verwendest du fertigen Blätterteig! So ist der
                    Apfelstrudel blitzschnell fertig und du kannst ihn gleich
                    genießen.
                  </p>
                  <button type="button" className="btn btn-success ">
                    zum Rezept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePages;
