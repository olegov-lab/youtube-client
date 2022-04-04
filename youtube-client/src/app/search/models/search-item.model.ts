interface ISearchItemThumbnailsDefault {
  url: string,
  width: number,
  height: number
}

interface ISnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: {
    default: ISearchItemThumbnailsDefault,
    medium: ISearchItemThumbnailsDefault,
    high: ISearchItemThumbnailsDefault,
    standard:ISearchItemThumbnailsDefault,
    maxres: ISearchItemThumbnailsDefault
  },
  channelTitle: string,
  tags: string[];
  categoryId: string,
  liveBroadcastContent: string,
  localized: {
    title: string,
    description: string
  },
  defaultAudioLanguage: string
}

interface IStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string
}

export interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippet,
  statistics: IStatistics
}
