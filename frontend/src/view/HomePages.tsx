import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";


interface Rezept {
  _id: string;
  title: string;
  zubereitung: string;
  zutaten: string;
}

function HomePages() {
  
 
  const stars = Array(5).fill(0);

 

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
              <div className="carousel-caption d-none d-md-block">
                <h4 className="text-shadow ">Hamburger</h4>
                <p className="text-shadow d-inline  fs-6 d-flex justify-content-center align-items-center">
                  Wer kennt ihn nicht, den klassischen Hamburger ? Wir verraten
                  dir unser Rezept!
                  <button type="button" className="ms-4 btn btn-success">
                    zum Rezept
                  </button>
                </p>
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
                <p className="text-shadow d-inline  fs-6 d-flex justify-content-center align-items-center">
                  {/* Carousel Items4 */}
                  Das perfekte Steak braten – mit unserem Rezept machen auch
                  Anfänger alles richtig!
                  <button type="button" className="ms-4 btn btn-success ">
                    zum Rezept
                  </button>
                </p>
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
                <p className="text-shadow d-inline  fs-6 d-flex justify-content-center align-items-center">
                  Wer kennt ihn nicht, den klassischen Hamburger ? Wir verraten
                  dir unser Rezept!
                  <button type="button" className="ms-4 btn btn-success ">
                    zum Rezept
                  </button>
                </p>
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
                <p className="text-shadow d-inline  fs-6 d-flex justify-content-center align-items-center">
                  Wer kennt ihn nicht, den klassischen Hamburger ? Wir verraten
                  dir unser Rezept!
                  <button type="button" className="ms-4 btn btn-success ">
                    zum Rezept
                  </button>
                </p>
              </div>
            </div>
            {/* Carousel Items5 */}
            <div className="carousel-item">
              <div className="position-absolute top-0 start-0 w-100 h-100 gradient-overlay gradient-overlay"></div>
              <img
                src="./images/rezept3.jpg"
                className="d-block w-100 images-slider"
                alt="Rezept-Bild"
              />
              <div className="carousel-caption d-none d-md-block ">
                <h4 className="text-shadow ">Hamburger</h4>
                <p className="text-shadow d-inline  fs-6 d-flex justify-content-center align-items-center">
                  Wer kennt ihn nicht, den klassischen Hamburger ? Wir verraten
                  dir unser Rezept!
                  <button type="button" className="ms-4 btn btn-success ">
                    zum Rezept
                  </button>
                </p>
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

        {/*Schnelle Rezepte Kategorie*/}

        <section className="container schnelle_rezepte mt-5 border-top">
          <h5 className="mt-5 mb-3">Schnelle Rezepte</h5>
          <div className=" row row-cols-1 row-cols-md-3 card-mobile">
            <div className="col">
              {/* Card 1 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
                <div className="card-body">
                  <h6 className="card-title">Hummus</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>20min
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              {/* Card 2 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
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
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
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

          <div className="border-top mt-5"></div>

          <h5 className="text-uppercase mt-5 mb-0 bg-success bg-opacity-25 rounded-top-2 card-rezept_monat">
            <i className="bi bi-award text-success"></i> Rezept des Monats
          </h5>
          <div className="card mb-3 rounded-top-0 card-rezept_monat">
            <div className="row g-0 ">
              <div className="col-md-4">
                <img
                  src="./images/rezept2.jpg"
                  className="img-fluid  h-100"
                  alt="Rezept-Bild"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">Apfelstrudel mit Blätterteig</h6>
                  <p className="card-text fs-7">
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
          <div className="border-top mt-5"></div>

          {/* Schnelles Mittagsessen */}

          <h5 className="mt-5 mb-3">Schnelles Mittagsessen</h5>
          <div className=" row row-cols-1 row-cols-md-3 card-mobile">
            <div className="col">
              {/* Card 1 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
                <div className="card-body">
                  <h6 className="card-title">Kartoffel-Kohlrabi-Suppe</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>30min
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              {/* Card 2 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
                <div className="card-body">
                  <h6 className="card-title">Toast Hawaii aus dem Ofen</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>10min
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              {/* Card 3 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
                <div className="card-body">
                  <h6 className="card-title">Couscous-Salat mit Feta</h6>
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

          <div className="border-top mt-5"></div>

          {/* Leckere Getränke */}

          <h5 className="mt-5 mb-3">Leckere Getränke</h5>
          <div className=" row row-cols-1 row-cols-md-3 card-mobile">
            <div className="col">
              {/* Card 1 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
                <div className="card-body">
                  <h6 className="card-title">Chai Tee Haferflocken</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>5min
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              {/* Card 2 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
                <div className="card-body">
                  <h6 className="card-title">Roter-Power-Smoothie</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>5min
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              {/* Card 3 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
                <div className="card-body">
                  <h6 className="card-title">Matcha Latte</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>7min
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top mt-5"></div>

          {/* Suppen-Rezepte */}
          
          <h5 className="mt-5 mb-3">Suppen-Rezepte</h5>
          <div className=" row row-cols-1 row-cols-md-3 card-mobile">
            <div className="col">
              {/* Card 1 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
                <div className="card-body">
                  <h6 className="card-title">Brokkolisuppe mit Krabben</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>40min
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              {/* Card 2 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
                <div className="card-body">
                  <h6 className="card-title">Karottensuppe mit Curry</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>40min
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              {/* Card 3 */}
              <div className="card card-transform rounded-top-4">
                <NavLink to="./">
                  <img
                    src="./images/rezept2.jpg"
                    className="card-img-top rounded-top-4"
                    alt="Rezept-Bild"
                  />
                </NavLink>
                <div className="card-body">
                  <h6 className="card-title">Einfache Kartoffelsuppe</h6>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary ">
                    {stars.map((_, index) => (
                      <i key={index} className="bi bi-star text-success "></i>
                    ))}
                  </small>
                  <span className="border-2 border-end bold ms-3"></span>
                  <span className="ms-3">
                    <i className="bi bi-stopwatch me-1"></i>35min
                  </span>
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
