import React from 'react'
import { useDispatch } from 'react-redux';
import { selectBook } from '../../../redux/features/booksSlice';

export const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleClickOnBookCard = () => {
    dispatch(selectBook(book));
  }

  return (
    <button className='books__card' onClick={handleClickOnBookCard}>{book.name}</button>
  )
}
