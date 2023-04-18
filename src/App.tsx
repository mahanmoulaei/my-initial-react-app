import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const [alertName, setAlertName] = useState("");

  const handleSelectItem = (item: string) => {
    setAlertVisibility(false);

    console.log(item);

    setTimeout(function () {
      setAlertName(item);
      setAlertVisibility(true);
    }, 100);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          {alertName} Clicked
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
