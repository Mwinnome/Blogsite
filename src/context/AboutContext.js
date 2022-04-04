import { createContext } from "react";

export const AboutContext = createContext();

function AboutContextProvider({children}){
    const about= {
        name:"Mwinnome Prosper",
        hobbies:["Musics", "Vybing", "Dancing"],
        bio:"Majesty!... everyday man keeps searching for the doors of success ..as a dream boy, I aim higher and bigger i want to go. "
    }
    return(
<AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>

    )
}

export default AboutContextProvider