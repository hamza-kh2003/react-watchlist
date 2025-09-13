import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WatchListCard from "./WatchListCard";

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);
  return (
    <div className="bg-slate-500 flex-1 flex justify-center pt-8">
      <div>
        <div className="flex justify-between mb-8 items-center">
          <h2 className="text-primary font-bold text-2xl">My WatchList</h2>
          {watchList.length !== 0 ? (
            <p className=" font-bold text-lg underline decoration-primary decoration-2  text-primary">
              {watchList.length}-{watchList.length === 1 ? "Movie" : "Movies"}
            </p>
          ) : (
            ""
          )}
        </div>

        {watchList.length > 0 ? (
          <ul className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 my-5">
            {watchList.map((movie) => {
              return (
                <WatchListCard key={movie.id} movie={movie} type="watchlist" />
              );
            })}
          </ul>
        ) : (
          <h2>"No Movies In Your List.."</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
