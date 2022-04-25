//Base URL
const API_KEY = "b113fe42b5d742ab97bbb4aca5af570b";
const api_url = `https://api.rawg.io/api/games`;
const base_url = `https://api.rawg.io/api/games?key=${API_KEY}&`;

//Getting the data
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${api_url}/${game_id}?key=${API_KEY}`;
//Game screenshots
export const gameScreenshotURL = (game_id) =>
  `${api_url}/${game_id}/screenshots?key=${API_KEY}`;
//Searched game
export const searchedGamesURL = (game_name) =>
  `${base_url}search=${game_name}&page_size=9`;
