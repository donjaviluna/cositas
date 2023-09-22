import React from 'react'
import BeatPopularCard from './components/BeatPopularCard'
import BeatCard from './components/BeatCard'
import BeatFilter from './components/BeatFilter'
function Beats() {

    const beatsPopulares = [
    {name : "Beats 1", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"}, 
    {name : "Beats 2", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"}, 
    {name : "Beats 3", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 4", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 5", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"}
    ]
    const allBeats = [
    {name : "Beats 1", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 2", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 3", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 4", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 5", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 6", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 7", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 8", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 9", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    {name : "Beats 10 asdada y el ultimo que cierre la puerta", image : "https://graffica.info/wp-content/uploads/2022/04/Sin-uiiug-1200x717.png"},
    ]

    const beatsPopularesRender = beatsPopulares.map((beat) => {
        return (
            <BeatPopularCard beat={beat} key={beat.name} />
        )
    })

    const allBeatsRender = allBeats.map((beat) => {
        return (
            <BeatCard beat={beat} key={beat.name} />
        )
    })

    return (
        <div className='overflow-y-auto relative'>

            <div className='container'>
                <div className='mt-10'>
                    <span className='text-2xl font-inter font-semibold text-white'>Beats populares</span>
                    <hr className='mt-2 mb-10'/>
                    <div className='grid grid-cols-5'>
                        {beatsPopularesRender}
                    </div>
                </div>

                <div className='mt-28 mb-10'>
                    <span className='text-2xl font-inter font-semibold text-white'>Todos los beats</span>
                    <hr className='mt-2 mb-10'/>
                    <BeatFilter/>
                    <div className='grid grid-cols-5 gap-y-20'>
                        {allBeatsRender}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Beats