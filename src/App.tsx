import { useState } from "react";
import { ThemeProvider } from "@/components/themeProvider";

import MailPage from "./page";
function App() {
  const [count, setCount] = useState(0);


  return (
    <ThemeProvider>
        <MailPage />
      
    </ThemeProvider>
  );
}

export default App;
