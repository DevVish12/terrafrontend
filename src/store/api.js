import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
  }),
  tagTypes: [
    "Contacts",
    "Restaurants",
    "Menus",
    "Offers",
    "Catering",
    "HappyCards",
    "Testimonials",
  ],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contact",
      providesTags: ["Contacts"],
    }),
    getRestaurants: builder.query({
      query: () => "/restaurant",
      providesTags: ["Restaurants"],
    }),
    getMenus: builder.query({
      query: () => "/menu",
      providesTags: ["Menus"],
    }),
    getOffers: builder.query({
      query: () => "/offer",
      providesTags: ["Offers"],
    }),
    getCaterings: builder.query({
      query: () => "/catering",
      providesTags: ["Catering"],
    }),
    getHappyCards: builder.query({
      query: () => "/happycard",
      providesTags: ["HappyCards"],
    }),
    getTestimonials: builder.query({
      query: () => "/testimonial",
      providesTags: ["Testimonials"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetRestaurantsQuery,
  useGetMenusQuery,
  useGetOffersQuery,
  useGetCateringsQuery,
  useGetHappyCardsQuery,
  useGetTestimonialsQuery,
} = api;
