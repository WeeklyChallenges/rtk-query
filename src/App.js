import './App.css';
import { Books } from './features/books/pages/Books';
import { BookDetails } from './features/books/pages/BookDetails';
import { HadithForm } from './features/hadiths/pages/HadithForm';

function App() {
  return (
    <div className="App">
      <Books />
      <BookDetails />
      <hr />
      <HadithForm />
    </div>
  );
}

export default App;
