import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from '../components/feauters/quote/quoteSlice';
import styles from './Quote.module.css';

const Quote = ()=> {
  const dispatch =useDispatch();
  const{quote,author,status,error }=useSelector((state)=> state.quote);

  useEffect(()=> {
    dispatch(fetchRandomQuote())
  },[dispatch])

  const handleNewQuote=()=>{
    dispatch(fetchRandomQuote())
  };

  return (
    <div>
      {status==='loading' &&<p>Loading...</p>}
      {status==='failed' &&<p>Error: {error}</p>}
      {status==='succeeded' && (
        <>
          <p className={styles.quote}>"{quote}"</p>
          <p className={styles.author}>- {author}</p>
        </>
      )}
      <button className={styles.button} onClick={handleNewQuote}>
        New Quote
      </button>
    </div>
  );
};

export default Quote;
