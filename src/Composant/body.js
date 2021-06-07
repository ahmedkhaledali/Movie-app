import "react-bootstrap";

import "../App.css";

function Boddy() {
  var today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <div>
      <marquee>
        <p className="date"> Nos films d'aujourd'huit - {date} </p>
      </marquee>
    </div>
  );
}

export default Boddy;
