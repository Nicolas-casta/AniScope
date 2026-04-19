import { z } from 'zod'

export const animeSchema = z.object({
    mal_id: z.number(),
    title: z.string(),
    title_english: z.string().nullable(),
    images: z.object({
        jpg: z.object({
            image_url: z.string(),
            large_image_url: z.string(),
        }),
    }),
    status: z.string(),
    score: z.number().nullable(),
    episodes: z.number().nullable(),
    synopsis: z.string().nullable(),
    genres: z.array(z.object({
        mal_id: z.number(),
        name: z.string(),
    })),
    season: z.string().nullable(),
    year: z.number().nullable(),
})

export const genreSchema = z.object({
    mal_id: z.number(),
    name: z.string(),
})