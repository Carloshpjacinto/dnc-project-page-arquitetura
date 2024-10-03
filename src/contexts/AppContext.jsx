import { createContext, useState, useEffect, Children } from "react";
import { getApiData } from "../services/apiServices";

export const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [language, setLanguage] = useState("br")
    const [languages, setLanguages] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetcLanguages = async () => {

            try{

                const getTexts = await getApiData("webText")
                setLanguages(getTexts)

            }catch (e){

                console.error(e)

            }finally{

                setLoading(false)

            }
        }

        fetcLanguages()

    }, [])

    return(

        <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
            {children}
        </AppContext.Provider>
    )

}
