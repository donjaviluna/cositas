

import React, {useState} from 'react'
import BeatFilterItem from './BeatFilterItem'
import useFilter from '@/hooks/useFilter'

function BeatFilter() {

  const {filterOptions, setFilterOptions} = useFilter()

  const filters = [
    { name: 'BPM', label: 'BPM' },
    { name: 'Mood', label: 'Mood' },
    // { name: 'Género', label: 'Género' },
    // { name: 'Escala', label: 'Escala' },
    { name: 'Precio', label: 'Precio' },
    // { name: 'Favoritos', label: 'Favoritos' },
  ]

  const moods = [
    { name: 'Relajado', label: 'Relajado' },
    { name: 'Romantico', label: 'Romantico' },
    { name: 'Tranquilo', label: 'Tranquilo' },
    { name: 'Energetico', label: 'Energetico' },
    { name: 'Musical', label: 'Musical' },
    { name: 'Triste', label: 'Triste' },
    { name: 'Espacial', label: 'Espacial' },

  ]

  const options = {
    BPM : () => (
        
          <div className="py-6 px-3">
            <div className="flex items-center gap-3">
              <label className='font-inter text-white font-semibold text-xs '>Desde</label>
              <input 
                type="text"
                className='appearance-none remove-buttons block w-16 bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                value={filterOptions.bpm_from}
                onChange={(e) => setFilterOptions({...filterOptions, bpm_from: e.target.value})}
              />
              <label className='font-inter text-white font-semibold text-xs'>hasta</label>
              <input 
                type="text" 
                className='appearance-none remove-buttons block w-16 bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                value={filterOptions.bpm_to}
                onChange={(e) => setFilterOptions({...filterOptions, bpm_to: e.target.value})}
              />
            </div>
          </div>

    ),
    Precio : () => (
    <div className="py-6 px-3">
      <div className="flex items-center gap-3">
        <label className='font-inter text-white font-semibold text-xs '>Desde</label>
        <input 
          type="text"
          className='appearance-none remove-buttons block w-16 bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          value={filterOptions.precio_from}
          onChange={(e) => setFilterOptions({...filterOptions, precio_from: e.target.value})}
        />
        <label className='font-inter text-white font-semibold text-xs'>hasta</label>
        <input 
          type="text" 
          className='appearance-none remove-buttons block w-16 bg-white text-gray-700 border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          value={filterOptions.precio_to}
          onChange={(e) => setFilterOptions({...filterOptions, precio_to: e.target.value})}
        />
      </div>
    </div>
    ),

    Mood: () => (
      <div className='py-6 px-3'>
        {moods.map((mood) => (
          <input type='checkbox' value={mood.name}>{mood.label}</input>
        ))}
      </div>
    )


  }

  return (

    
    <>



    <div className='flex justify-center items-center w-3/5 py-5 m-auto border-b border-white px-2 mt-5 mb-10 gap-20 '>
        {filters.map((filter) => (
          <BeatFilterItem filter={filter} options={options[filter.name]} />
        ))}
    </div>

    

    </>
  )
}

export default BeatFilter