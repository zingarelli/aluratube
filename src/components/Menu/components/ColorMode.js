// Provider to chooose which theme is active in the app (dark/light mode)
import React from "react";

// object that tells which theme is active. 
// Context can be imported by other components to access (and change) it.
export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert('Configure me first!') },
    toggleMode: () => { alert('Configure me first!') },
});

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode)

    function toggleMode() {
        if(mode==='light') setMode('dark');
        if(mode==='dark') setMode('light');
    }

    return (
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}