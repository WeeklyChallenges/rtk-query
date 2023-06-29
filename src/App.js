import logo from './logo.svg';
import './App.css';
import { Books } from './features/books/pages/Books';
import { BookDetails } from './features/books/pages/BookDetails';

function App() {
  return (
    <div className="App">
      <Books />
      <BookDetails />
    </div>
  );
}

export default App;
