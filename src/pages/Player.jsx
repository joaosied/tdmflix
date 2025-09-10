import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";


const Player = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className='player flex h-screen flex-col items-center justify-center'>
      <IoIosArrowBack 
        className='absolute top-5 left-5 w-12 cursor-pointer' 
        onClick={() => navigate(-1)} 
      />
      
      <iframe
        className='rounded-xl'
        width='90%'
        height='90%'
        src={`https://drive.google.com/file/d/${id}/preview`}
        title='Vídeo'
        allowFullScreen
      ></iframe>

      <div className="player-info flex items-center justify-center w-[90%] mt-4">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Player
