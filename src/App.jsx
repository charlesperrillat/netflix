import "./App.css";

import Header from "./components/Header";
import moviesObj from "./assets/movies_rnexgr.json";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      {moviesObj.map((elem) => {
        return <Section category={elem.category} images={elem.images} />;
      })}

      {/* {moviesObj.map((elem) => {
        return (
          <section>
            <h2 key={elem.category}>{elem.category}</h2>
            <div className="movie-section">
              {elem.images.map((e) => {
                return <img src={e} />;
              })}
            </div>
          </section>
        );
      })} */}
    </>
  );
}

export default App;
