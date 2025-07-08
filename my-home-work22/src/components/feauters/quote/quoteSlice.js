import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const FALLBACK_QUOTES = [
  { content: "Если API не работает - это не моя вина", author: "Ваш компьютер" },
  { content: "404 - Цитата не найдена", author: "Сервер" }
];

export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandomQuote',
  async (_, { rejectWithValue }) => {
    try {
      
      const apiResponse = await axios.get('/api/quotes');
      
    
      if (!Array.isArray(apiResponse.data)) {
        throw new Error('Некорректный формат ответа API');
      }

    
      const randomQuote = apiResponse.data[Math.floor(Math.random() * apiResponse.data.length)];
      
      return {
        content: randomQuote.text,
        author: randomQuote.author || "Неизвестный автор"
      };

    } catch (apiError) {
      console.error('Ошибка API:', apiError);
      
     
      try {
        const fallbackResponse = await axios.get('https://api.quotable.io/random');
        return {
          content: fallbackResponse.data.content,
          author: fallbackResponse.data.author
        };
      } catch (fallbackError) {
        console.error('Ошибка резервного API:', fallbackError);
      
        return rejectWithValue(FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)]);
      }
    }
  }
);

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: "Загрузка...",
    author: "",
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.quote = action.payload.content;
        state.author = action.payload.author;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.quote = action.payload.content;
        state.author = action.payload.author;
        state.error = "Не удалось загрузить цитаты";
      });
  }
});

export default quoteSlice.reducer;