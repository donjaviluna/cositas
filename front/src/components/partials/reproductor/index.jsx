import React from 'react'
import useReproductor from '@/hooks/useReproductor'

function Reproductor() {

    const {actualSong, setActualSong} = useReproductor()

    if(actualSong)
    {
        return (
            <div className='h-20 w-full bg-[#000000] flex justify-center items-center border-t border-white md:fixed bottom-0'>
                {actualSong.name}
            </div>
        )
    }
    else{
        return (<></>)
    }

}

export default Reproductor