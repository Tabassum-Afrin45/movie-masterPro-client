import { createBrowserRouter } from "react-router";
import AddMovie from "../Pages/AddMovie/AddMovie";
import AllMovies from "../Pages/AllMovies/AllMovies";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import Home from "../Pages/Home/Home";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import MyCollections from "../Pages/MyCollection/MyCollection";
import UpdateMovie from "../Pages/UpdateMovie/UpdateMovie";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layout/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:async()=>{
          const [latestRes, topRatedRes,statsRes]=await Promise.all([
          fetch('http://localhost:3000/latest-movies'),
          fetch('http://localhost:3000/top-rated'),
           fetch('http://localhost:3000/statistics')
          ])
             return {
      latest: await latestRes.json(),
      topRated: await topRatedRes.json(),
      stats: await statsRes.json()
    }
        }
      },
      {
        path: "/all-movies",
        element: <AllMovies />,
        loader: () => fetch('http://localhost:3000/movies')
      },
      
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        ),
      },
      {
        path: "/movie-details/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader:({params})=>fetch(`http://localhost:3000/movies/${params.id}`)
      },

       {
        path: "/my-collections",
        element: (
          <PrivateRoute>
            <MyCollections />
          </PrivateRoute>
        ),
      },

        {
        path: "/update-movie/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie />
          </PrivateRoute>
        ),
        loader:({params})=>fetch(`http://localhost:3000/movies/${params.id}`)
   },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);