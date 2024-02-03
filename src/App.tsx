import { useState } from "react";
import { Button } from "./components/ui/button";
import MailPage from "./page";
function App() {
  const [count, setCount] = useState(0);


  return (
    <>
        <MailPage />
      
    </>
  );
}

export default App;
