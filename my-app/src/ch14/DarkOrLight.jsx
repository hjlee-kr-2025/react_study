// DarkOrLight.jsx
import React, {useState, useCallback} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
  // 테마를 지정할 변수: light, dark
  const [theme, setTheme] = useState('light');

  // theme변수값이 변경될때만 callback함수 실행행
  const toggleTheme = useCallback(()=>{
    if (theme == 'light') {
      setTheme('dark');
    }
    else if (theme == 'dark') {
      setTheme('light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;