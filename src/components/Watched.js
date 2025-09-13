import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import WatchListCard from "./WatchListCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="bg-slate-500 flex-1 flex justify-center pt-8">
      <div>
        <div className="flex justify-between mb-8 items-center">
          <h2 className="text-primary font-bold text-2xl">Watched Movies</h2>
          {watched.length !== 0 ? (
            <p className=" font-bold text-lg underline decoration-primary decoration-2  text-primary">
              {watched.length}-{watched.length === 1 ? "Movie" : "Movies"}
            </p>
          ) : (
            ""
          )}
        </div>

        {watched.length > 0 ? (
          <ul className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 my-5">
            {watched.map((movie) => {
              return (
                <WatchListCard key={movie.id} movie={movie} type="watched" />
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

export default Watched;
