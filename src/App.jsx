import { useState } from "react";
import { NumberInput, TextInput } from "./components/ui";
import DropDownMenu from "./components/ui/DropDownMenu";
import PasswordInput from "./components/ui/PasswordInput";
import Button from "./components/ui/Button";

function App() {
  const [textvalue, setTextValue] = useState("");
  const [password, setPassword] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [dropDownValue, setDropDownValue] = useState(null);
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <TextInput
        label={"Text Input"}
        bgColor={"white"}
        value={textvalue}
        valueSetter={setTextValue}
      />
      <PasswordInput
        label={"Password Input"}
        bgColor={"white"}
        value={password}
        valueSetter={setPassword}
      />
      <NumberInput
        label={"Number Input"}
        bgColor={"white"}
        value={numberValue}
        valueSetter={setNumberValue}
      />
      <DropDownMenu
        label={"Dropdown Input"}
        bgColor={"white"}
        value={dropDownValue}
        valueSetter={setDropDownValue}
        options={[
          { label: "Real Madrid", value: "real_madrid" },
          { label: "Manchester City", value: "manchester_city" },
          { label: "Tottenham Hotspur", value: "tottenham_hotspur" },
          { label: "Bayern Munich", value: "bayern_munich" },
        ]}
        // allowFiltering={true}
      />
      <Button content={"Button"} />
    </div>
  );
}

export default App;
