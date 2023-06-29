import React from 'react'
import { getBookDetails } from '../../../network/lib/books';
import { useDispatch } from 'react-redux';
import { fetchBookDetailsSuccess } from '../booksSlice';

export const BookCard = ({ id, name }) => {
  const dispatch = useDispatch();

  const handleClickOnBookCard = async () => {
    const bookDetails = await getBookDetails(id);

    if (bookDetails) {
      dispatch(fetchBookDetailsSuccess(bookDetails));
    }
  }

  return (
    <button className='books__card' onClick={handleClickOnBookCard}>{name}</button>
  )
}
