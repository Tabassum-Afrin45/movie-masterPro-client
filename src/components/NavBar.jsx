import { Link, NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { IoLogOut } from "react-icons/io5";
import { FaGear} from "react-icons/fa6";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { RiMovie2AiLine, RiMovieLine } from "react-icons/ri";
import { MdAddToPhotos } from "react-icons/md";
import { LuSaveAll } from "react-icons/lu";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }
  return (
    <div className="navbar py-0 min-h-0 z-1 shadow-sm rounded-xl bg-linear-to-l from-[#134E5E] to-[#19664f] max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                <GoHomeFill />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-movies"}>
                <RiMovieLine /> All Movies
              </NavLink>
            </li>
            {user&&(
            <>
                <li>
            <NavLink to={"/add-movie"}>
             <MdAddToPhotos />Add Movie
            </NavLink>
          </li>
          <li>
                <NavLink to={"/my-collections"}>
                 <LuSaveAll /> My Collections
                </NavLink>
              </li>
              </>
              )}
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1 text-base md:text-xl lg:text-3xl font-bold text-white ml-4">
          <RiMovie2AiLine /> Movie Master Pro
        </Link>
      </div>
      <div className="navbar-center hidden md:flex text-white ">
        <ul className="menu menu-horizontal px-4 gap-10 md:text-[12px] lg:text-[15px]">
          <li>
            <NavLink to={"/"}>
              <GoHomeFill />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/all-movies"}>
              <RiMovieLine /> 
               All Movies
            </NavLink>
          </li>
            {user&&(
            <>
          <li>
            <NavLink to={"/add-movie"}>
             <MdAddToPhotos />Add Movie
            </NavLink>
          </li>
          <li>
                <NavLink to={"/my-collections"}>
                 <LuSaveAll /> My Collections
                </NavLink>
              </li>
               </>
              )}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              
              <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
              
              <li>
                <a>
                  {" "}
                  <FaGear /> Settings
                </a>
              </li>
              <li>
                <button
                  onClick={signOutUser}
                  className=""
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
           <Link
            to={"/auth/register"}
            className="btn-grad rounded-full border-gray-300 font-medium text-md"
          >
            Register
          </Link>
          <Link
            to={"/auth/login"}
            className="btn-grad rounded-full border-gray-300 font-medium text-md"
          >
            Login
          </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;