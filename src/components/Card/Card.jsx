import "./Card.css";

function Card({ image }) {
  return (
    <article>
      <div className="card">
        <h1>F</h1>
        <img src={image} alt="" className="img-card" />
      </div>
    </article>
  );
}
export default Card;
