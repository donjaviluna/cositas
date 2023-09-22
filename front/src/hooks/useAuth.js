import { useSelector } from "react-redux";
import { useRecoilValue } from "recoil";
import {authState} from "@/store/authStore";


const useAuth = () => {

    const auth = useRecoilValue(authState)

    const isLogged = auth.token ? true : false
    const userLogged = auth.user




    return[
        userLogged,
        isLogged
    ]

}

export default useAuth