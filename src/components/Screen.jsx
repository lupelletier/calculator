import { Textfit } from "react-textfit"; // makes sure the caluclation fits the screen
import '../style/style.css';
const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
