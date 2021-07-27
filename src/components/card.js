import "./card.css";
const Card = (props) => {
  const arr =
    props.weather() === "no weather to display" ? undefined : props.weather();
  console.log(arr);
  return arr === undefined ? (
    <div className="tc">Please enter a valid ZipCode</div>
  ) : (
    <div>
      <div className="br2  dark-gray  mv5 w-100 w-50-m w-40-l mw5 center">
        <img
          src={`http://openweathermap.org/img/wn/${arr[2]}@2x.png`}
          className="db center bg-black w-50 br4 br"
          alt="weather."
        />
        <div className="pa2 ph2-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc ">
              <h1 className="f5 f4-ns mv0 bg-light-gray br4">{arr[1]}</h1>
            </div>
          </div>
          <p className="  f6 lh-copy measure mt2 ">{arr[0]} degrees</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
