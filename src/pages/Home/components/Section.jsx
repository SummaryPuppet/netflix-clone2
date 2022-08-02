import "./section.css"

function Section({ title, movies }) {
  return (
    <section className="section">
      <h1 className="section-title">{title}</h1>
      <div className="section-movie">
        <img src="" alt="" className="section-movie-img" />
        <img src="" alt="" className="section-movie-img" />
        <img src="" alt="" className="section-movie-img" />
        <img src="" alt="" className="section-movie-img" />
        {
          movies.map((movie, index)=> <img className="section-movie-img" />)
        }

        <button className="section-button">{">"}</button>
      </div>
    </section>
  );
}

export default Section;
