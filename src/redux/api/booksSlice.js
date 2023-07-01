import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/books' }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/',
    }),
    getBookById: builder.query({
      query: (bookId) => `/${bookId}`
    }),
    updateBookById: builder.mutation({
      query: ({ bookId, hadiths }) => {
        return {
          url: `/${bookId}`,
          method: 'PATCH',
          body: { hadiths }
        }
      }
    })
  }),
})

export const { useGetBooksQuery, useGetBookByIdQuery, useUpdateBookByIdMutation } = booksApi