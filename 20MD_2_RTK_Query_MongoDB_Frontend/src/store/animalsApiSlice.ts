import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Animal = {
    _id: string,
    name: string,
    image: string,
    species: string
}

type AnimalPost = {
    name: string,
    image: string,
    species: string
}

export const animalsApiSlice = createApi({
    reducerPath: "animalsApiSlice",
    tagTypes: ["animals"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
    endpoints: (builder) => ({
        getAllAnimals: builder.query<Animal[], void>({
            query: () => "http://localhost:3004/animals",
            providesTags: ["animals"],
        }),
        addAnimal: builder.mutation<void, Omit<AnimalPost, "id">>({
            query: (animal) => ({
                url: "/animals",
                method: "POST",
                body:  animal  ,
            }),
            invalidatesTags: ["animals"],
        }),
        deleteAnimal: builder.mutation<Animal[], string>({
            query: (id) => ({
                url: `/animals/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["animals"],
        }),
    })
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetAllAnimalsQuery, useAddAnimalMutation, useDeleteAnimalMutation } = animalsApiSlice;
