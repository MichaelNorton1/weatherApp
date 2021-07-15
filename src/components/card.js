import "./card.css";
const Card = (props) => {
  const arr = props.weather();

  return (
    <div className="card">
      <div className="city">{arr[1]}</div>
      <img
        className="icon"
        alt=""
        src={`http://openweathermap.org/img/wn/${arr[2]}@2x.png`}
      ></img>
      <div className="temp">{arr[0]} degrees</div>
    </div>
  );
};

export default Card;
