
import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { MovieCard } from "../../components/MovieCard";
const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Banner/>

            <div className="text-center text-xl font-bold mt-10">Latest Movies</div>

             <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
         {data.map(movie => <MovieCard key={movie._id} movie={movie}/>)}
      </div>
            
        </div>
    );
};

export default Home;