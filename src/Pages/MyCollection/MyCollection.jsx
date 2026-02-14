import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MovieCard } from "../../components/MovieCard";
const MyCollections = () => {
    const {user} = use(AuthContext)
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {

        fetch(`https://movie-master-pro-server-nu.vercel.app/my-collections?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> {
            
            setMovies(data)
            setLoading(false)
        })

    }, [user])


    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                     {movies.map(movie => <MovieCard key={movie._id} movie={movie}/>)}
                  </div>
            
        </div>
    );
};

export default MyCollections;