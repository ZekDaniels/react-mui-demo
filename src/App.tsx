import "./App.css";
import { MuiButton } from "./components/MuiButton";
import { MuiCheckBox } from "./components/MuiCheckBox";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiSelect } from "./components/MuiSelect";
import { MuiTypography } from "./components/MuiTypography";
import { MuiTextField } from "./components/TextField";

function App() {
  return (
    <div className="App">
      {/* <MuiTypography></MuiTypography> */}
      {/* <MuiButton></MuiButton> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      <MuiCheckBox />
    </div>
  );
}

export default App;
