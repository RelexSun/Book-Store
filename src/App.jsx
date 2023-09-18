import { useState } from 'react'
import BookCreate from './components/BookCreate'


function App() {
  const [books, setBooks] = useState([])

  const handleCreateBook = (title) => {
    setBooks(title)
    
  }
console.log(books);

  return (
    <>
      <BookCreate onCreate={handleCreateBook}/>
    </>
  )
}

export default App
