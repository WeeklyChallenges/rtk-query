import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const hadithsApi = createApi({
  reducerPath: 'hadithsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/hadiths' }),
  endpoints: (builder) => ({
    getHadithById: builder.query({
      query: (hadithId) => {
        return `/${hadithId}`
      }
    }),
    createHadith: builder.mutation({
      query: (hadith) => {
        return {
          url: '/',
          method: 'POST',
          body: hadith
        }
      }
    })
  }),
})

export const { useGetHadithByIdQuery, useCreateHadithMutation } = hadithsApi