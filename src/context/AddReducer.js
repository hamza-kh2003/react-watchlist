export const AddReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };

    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter((movie) => {
          return movie.id !== action.payload;
        }),
      };

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchList: state.watchList.filter((movie) => {
          return movie.id !== action.payload.id;
        }),
        watched: [...state.watched, action.payload],
      };

    case "REMOVE_MOVIE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => {
          return movie.id !== action.payload;
        }),
      };

    case "MOVE_FROM_WATCHED_TO_WATCH_LIST":
      return {
        ...state,
        watched: state.watched.filter((movie) => {
          return movie.id !== action.payload.id;
        }),
        watchList: [...state.watchList, action.payload],
      };

    default:
      return state;
  }
};
