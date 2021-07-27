import "./card.css";
const Card = (props) => {
  const arr =
    props.weather() === "no weather to display" ? undefined : props.weather();
  console.log(arr);
  return arr === undefined ? (
    <div className="tc">Please enter a valid ZipCode</div>
  ) : (
    <div className=" center w-50 br4 db ba b--black-10 bg-gray">
      <div className=" pl2 items-column">
        <div className=" pr2 tc city washed-blue">{arr[1]}</div>
        <div className="pl5">
          <img
            className=" pr4 pl4 icon bg-black br4"
            alt=""
            src={`http://openweathermap.org/img/wn/${arr[2]}@2x.png`}
          ></img>
        </div>
        <div className=" pr2 tc temp washed-blue">{arr[0]} degrees</div>
      </div>
    </div>
  );
};

export default Card;
