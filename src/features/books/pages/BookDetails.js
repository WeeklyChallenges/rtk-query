import React from 'react'
import { useSelector } from 'react-redux'
import { Hadith } from '../components/Hadith'

export const BookDetails = () => {
  const book = useSelector((state) => state.books.selectedBook)

  return (
    <div className='books_details'>
      {book.name && <h3>Book: {book.name}</h3>}

      <div className='books__hadiths'>
        {book.hadiths?.map((hadith) => <Hadith key={hadith.id} {...hadith} />)}
      </div>
    </div>
  )
}
