import { useContext } from "react"
import { MyContext } from "../context/MyContext"

export const useMyContext = () => {
    return useContext(MyContext);
}