import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/logos/gold-black.png'
import { CiSearch } from "react-icons/ci";
import useUser from '../../../Hooks/useUser';

const Navbar = () => {

    const user = useUser()

    

    const links = (
      <>
        <li>
          <NavLink to="/" className="btn btn-outline btn-sm">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="btn btn-outline btn-sm">
            About
          </NavLink>
        </li>
        {!user && (
          <li>
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
          </li>
        )}
      </>
    );



    return (
      <header>
        <div className="flex justify-between items-center bg-base-100 p-2">
          <div className="flex">
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <div>
              <img src={logo} className="w-20 hidden lg:flex" />
            </div>
          </div>

          <div className="relative">
            <form>
              <input
                type="text"
                placeholder="Search here"
                className="input input-bordered w-[50vw] lg:w-[30vw]"
              />
              <button className="text-2xl absolute right-2 top-3 ">
                <CiSearch />
              </button>
            </form>
          </div>

          <div className="flex items-center">
            <ul className="menu hidden lg:flex gap-3 menu-horizontal px-1">
              {links}
            </ul>
            {user && (
              <>
                <div className="h-10 w-[1px]  hidden lg:flex bg-black mx-3"></div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src={
                          user?.img
                            ? user.img
                            : "https://assets-prod.sumo.prod.webservices.mozgcp.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png"
                        }
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <span className='!bg-black !text-white !cursor-default'>{user.userName}</span>
                    </li>
                    <li>
                      <Link to={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                      <button>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    );
};

export default Navbar;