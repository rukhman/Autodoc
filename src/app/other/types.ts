export interface NewsResponse<T> {
  news: T[];
  totalCount: number;
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  publishedDate: string;
  url: string;
  fullUrl: string;
  titleImageUrl: string;
  categoryType: string;
}

export interface NewsItemFull {
  id: number;
  title: string;
  description: string;
  text: string;
  publishedDate: string;
  url: string;
  fullUrl: string;
  titleImageUrl: string;
  categoryType: string;
}

