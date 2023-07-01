import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useCreateHadithMutation, useUpdateBookByIdMutation } from '../../../redux/api';

export const HadithForm = () => {
  const books = useSelector(state => state.books.list);

  const [text, setText] = useState('');
  const [selectedBook, setselectedBook] = useState();

  const [createHadith, { data: createdHadith, isLoading, isSuccess }] = useCreateHadithMutation();
  const [updateBookById] = useUpdateBookByIdMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(text && selectedBook)) {
      alert("Fields are required");
      return
    };

    createHadith({ text });
  }

  useEffect(() => {
    setselectedBook(books[0]);
  }, [books]);

  useEffect(() => {
    isSuccess && updateBookById({ bookId: selectedBook.id, hadiths: [...selectedBook.hadiths, { hadithId: createdHadith.id }] });
  }, [isSuccess]);

  return (
    <div className="hadiths__form">
      <h3>Add new Hadith</h3>
      <form>
        <label for="hadith-text">Hadith Text</label>
        <input type="text" id="hadith-text" placeholder="Enter the text here" onChange={(e) => setText(e.target.value)} />

        <label for="hadith-book">Hadith Book</label>
        <select id="hadith-book" name="hadith-book" onChange={(e) => setselectedBook(JSON.parse(e.target.value))}>
          {books.map((book) => <option key={book.id} selected={book.id === selectedBook?.id} value={JSON.stringify(book)}>{book.name}</option>)}
        </select>

        <button type="submit" onClick={handleSubmit} disabled={isLoading}>{isLoading ? 'Submitting' : 'Submit'}</button>
      </form>
    </div>
  )
}
