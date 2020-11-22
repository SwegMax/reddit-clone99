import React, { useState, useRef, useCallback } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/landing/Landing"
import infiniteScroll from './infiniteScroll'

function App() {
  //
  return <Landing/>;   
  //
  
  /*
  const [query, setQuery] = useState('') //by default, our query is an empty string
  const [pageNumber, setPageNumber] = useState(1) //default page number
  
  const {
    books,
    hasMore,
    loading,
    error
  } = infiniteScroll(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (enrties[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])
  
  function handleSearch(e) {
    setQuery(e.target.value) 
    setPageNumber(1)
  }
  
  return (
    <>
    <input type='text' value={query} onChange={handleSearch}></input>
    {books.map(book, index) => { //book is the title of the book
      if (books.length === index + 1) {
        return <div ref={lastBookElementRef} key={book}>{book}</div>
      } else {
        return <div key={book}>{book}</div>
      }      
    })}

    <div>{loading && 'Loading...'}</div>
    <div>{error && 'Error'}</div>
    </>
  )
  */
}

export default App;
