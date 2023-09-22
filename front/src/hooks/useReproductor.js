import { useRecoilState } from "recoil"

import { reproductorState } from "@/store/reproductorStore"
import { useEffect } from "react";

const useReproductor = ( ) => {

    const [songStored, setSongStored] = useRecoilState(reproductorState);


    const setActualSong = (song) => {
        if(song != null)
        {
            console.log("Nueva song sonando : ", song)
            setSongStored( song )
        }
            
    }

    return {actualSong : songStored, setActualSong}

}

export default useReproductor