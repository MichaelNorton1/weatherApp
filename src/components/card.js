const Card = (props) => {
  const arr = props.weather();

  return (
    <div>
      <img
        alt=""
        src={`http://openweathermap.org/img/wn/${arr[2]}@2x.png`}
      ></img>
      <div>{arr[0]} degrees</div>
      <div>{arr[1]}</div>
    </div>
  );
};

export default Card;
