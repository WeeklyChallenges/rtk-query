import React, { useEffect } from 'react'
import { getBooks } from '../../../network/lib/books';
import { useDispatch, useSelector } from 'react-redux';
import '../books.scss'
import { fetchBooksSuccess } from '../booksSlice';
import { BookCard } from '../components/BookCard';

export const Books = () => {
  const list = useSelector((state) => state.books.list)
  const dispatch = useDispatch()

  const fetchBooks = async () => {
    const books = await getBooks();
    books && dispatch(fetchBooksSuccess(books));
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='books'>
      <h1>Books</h1>
      <div className='books__list'>
        {list.map((book) => <BookCard key={book.id} {...book} />)}
      </div>
    </div>
  )
}
