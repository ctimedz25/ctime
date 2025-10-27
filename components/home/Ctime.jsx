import { Rating } from '@mui/material'
import React from 'react'
import { Star } from '../../svg'

export default function Ctime () {
  return (
    <div style = {{backgroundColor : 'rgba(255,255,255,0.5)',backdropFilter : 'blur(10px)'}} className='border-2 rounded p-2 absolute w-4/12 top-5 right-1'>
        <div className='flex gap-2 items-center'>
            <Star size="20" color="red"/>
            <h1 className='mb-0 font-bold text-lg'>ctime</h1>
        </div>
        <p>Votre compagnon vers la qualité</p>
        <Rating value = {5} readOnly/> 
    </div>
  )
}
