import "./Card.css";

function Card({ image, title, img, name }) {
  return (
    <article>
      <div className="card">
        <img src={image} alt="" className="img-card" />
        <h3>{title}</h3>
        <div className="user-cont">
          <img src={img} alt="" />
          <p>{name}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;
