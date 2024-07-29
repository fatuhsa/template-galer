const Navbar = () => {
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };

  return (
    <>
      <div className="bg-white shadow-md dark:bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SaniX
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex space-x-8 text-sm font-medium mt-0 mr-6 md:mr-0 text-gray-900 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div id="dropdown" className="hidden md:hidden">
          <ul className="flex flex-col space-y-2 p-4 text-sm font-medium text-gray-900 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
