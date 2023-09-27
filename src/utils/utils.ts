import { Game } from 'types/game';
import { sortTypes } from 'const';

type GamesKeys = {
  [key: string]: string,
};
  
export const getGenres = (items: Game[]) => {
  return items.reduce((acc, curr): GamesKeys => {
    acc[curr.genre] = curr.genre;
    return acc;
  }, {} as GamesKeys);
};

export const sortByDate = (items: Game[], sortDirection: string) => {

  const gamesByDate: Game[] = items.slice().sort((a: Game, b: Game): number => {
    const firstDate = new Date(a.release_date);
    const secondtDate = new Date(b.release_date);
    const sortVars = sortDirection === sortTypes.ASC ? [firstDate, secondtDate] : [secondtDate, firstDate];

    if (sortVars[0] > sortVars[1]) {
      return 1;
    }

    if (sortVars[0] < sortVars[1]) {
      return -1;
    }

    return 0;
  });

  return gamesByDate;
};

export const filterByGenre = (items: Game[], genre: string): Game[] => {
  const gamesByGenre = items.filter((item: Game) => item.genre === genre);

  return gamesByGenre;
};

export const filterByPlatform = (items: Game[], platform: string): Game[] => {
  let filteredItems = [];

  if (!platform || platform === 'allgames') {
    filteredItems = items;
  } else {
    filteredItems = items.filter((item: Game) => item.platform.includes(platform));
  }

  return filteredItems;
};

export const paginate = (items: Game[], currentPage: number, pageItemsCount: number): Game[] => {
  const startIndex = (currentPage - 1) * pageItemsCount;

  return items.slice(startIndex, startIndex + pageItemsCount);
};
