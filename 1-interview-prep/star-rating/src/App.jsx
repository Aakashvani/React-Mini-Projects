import "./styles.css";
import StarRating from "./components/StarRating";

export default function App() {
  return (
    <div className="App">
      <StarRating noOfStars={10} />
    </div>
  );
}
