import { ThemeProvider } from "@/components/themeProvider";
import {useAuthToken} from "@/useHooks";

import MailPage from "@/mailPage";
import LoginPage from "@/loginPage";
import { useEffect, useState } from "react";

function App() {
  const [authToken, _setAuthToken] = useAuthToken();
  const [_authed, setAuthed] = useState(false);

  useEffect(() => {
    if(authToken!=''){
      setAuthed(true);
    }
  }, [authToken]);

  return (
    <ThemeProvider>

      {authToken!=''?
      
      <MailPage />
      :
      <LoginPage/>
      }

    </ThemeProvider>
  );
}

export default App;
