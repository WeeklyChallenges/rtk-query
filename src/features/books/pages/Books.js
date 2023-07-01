import React, { useEffect } from 'react'
import { BookCard } from '../components/BookCard';
import { useGetBooksQuery } from '../../../redux/api';
import '../books.scss'
import { useDispatch } from 'react-redux';
import { fetchBooksSuccess } from '../../../redux/features/booksSlice';

export const Books = () => {
  const { data: booksList, isLoading } = useGetBooksQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    booksList && dispatch(fetchBooksSuccess(booksList));
  }, [booksList]);

  return (
    <div className='books'>
      <h1>Books</h1>
      {isLoading && <h4>Fetching books...</h4>}
      <div className='books__list'>
        {booksList?.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  )
}
