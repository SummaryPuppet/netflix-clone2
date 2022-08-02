import "./firstcontent.css";

function FirstContent({ description }) {
  return (
    <section className="container">
      <p className="container-description">{description}</p>
      <div className="container-actions">
        <div className="container-button-play">
          <button className="button-play">Play</button>
        </div>
        <div className="container-button-more-information">
          <button className="button-more-information">More Information</button>
        </div>
      </div>
    </section>
  );
}

export default FirstContent;
