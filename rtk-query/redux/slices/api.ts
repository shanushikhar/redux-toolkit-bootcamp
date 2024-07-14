import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6693a643c6be000fa07cc9ec.mockapi.io",
  }),
  tagTypes: ["fetchNotes"],
  endpoints: (builder) => ({
    fetchNotes: builder.query<NoteItem[], void>({
      query: () => ({
        url: "/notes",
        method: "GET",
        //cache: "force-cache",
      }),
      transformResponse: (response: NoteItem[], meta, arg) => {
        return response.reverse();
      },
      providesTags: ["fetchNotes"],
    }),
    addNewNotes: builder.mutation<void, NoteItem>({
      query: (body) => ({
        url: "/notes",
        method: "POST",
        body: body,
      }),

      invalidatesTags: ["fetchNotes"],
    }),
    deleteNewNotes: builder.mutation<void, NoteItem["id"]>({
      query: (id) => ({
        url: `/notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["fetchNotes"],
    }),
    updateNotes: builder.mutation<void, NoteItem>({
      query: (body) => ({
        url: `/notes/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["fetchNotes"],
    }),
  }),
});

export const {
  useFetchNotesQuery,
  useAddNewNotesMutation,
  useDeleteNewNotesMutation,
  useUpdateNotesMutation,
} = api;
