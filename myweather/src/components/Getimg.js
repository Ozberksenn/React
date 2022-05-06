import cloudly from "../Image/cloudly.jpg";
import foggy from "../Image/foggy.jpg";
import rainbow from "../Image/rainbow.jpg";
import rainy from "../Image/rainy.jpg";
import snowy from "../Image/snowy.jpg";
import storm from "../Image/storm.jpg";
import sunny from "../Image/sunny.jpg";

function Getimg({ durum }) {
  switch (durum) {
    case "Rain":
      return <img className="bg-image" src={rainy} alt="yagmurlu"></img>;
    case "Clear":
      return <img className="bg-image" src={sunny} alt="gunesli"></img>;
    case "Mist":
      return <img className="bg-image" src={foggy} alt="sisli"></img>;
    case "Snow":
      return <img className="bg-image" src={snowy} alt="karli"></img>;
    case "Storm":
      return <img className="bg-image" src={storm} alt="firtinali"></img>;
    case "Clouds":
      return <img className="bg-image" src={cloudly} alt="bulutlu"></img>;
    default:
      return <img className="bg-image" src={rainbow} alt="rainbow"></img>;
  }
}

export default Getimg;
