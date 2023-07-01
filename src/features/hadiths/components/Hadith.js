import React from 'react'
import { useGetHadithByIdQuery } from '../../../redux/api'

export const Hadith = ({ id }) => {
  const { data: hadith } = useGetHadithByIdQuery(id);

  return (
    <div className='books__hadith'>
      <p className='books__hadith-text'>{hadith?.text}</p>
    </div>
  )
}
