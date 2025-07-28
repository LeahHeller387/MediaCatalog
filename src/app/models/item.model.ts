export interface Item {
  imdbID: string;
  Title: string;
  Year: string;      
  Type: string;      
  Poster: string | null;    
}

export type SortDirection = 'asc' | 'desc';
