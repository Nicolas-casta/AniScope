export type AnimeStatus = 'Currently Airing' | 'Finished Airing' | 'Not yet aired';
export type AnimeSeason = 'spring' | 'summer' | 'fall' | 'winter';

export interface Anime {
    mal_id: number;
    title: string;
    title_english: string | null;
    images: { jpg: { image_url: string; large_image_url: string } };
    status: AnimeStatus;
    score: number | null;
    episodes: number | null;
    synopsis: string | null;
    genres: Array<{ mal_id: number; name: string }>;
    season: AnimeSeason | null;
    year: number | null;
}

export interface AnimeFilters {
    query: string;
    genreId: number | null;
    status: AnimeStatus | 'all';
    page: number;
}