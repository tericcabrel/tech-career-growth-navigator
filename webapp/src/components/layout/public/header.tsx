import Image from 'next/image';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="border border-green-400 h-10 w-10 flex justify-center items-center rounded">
            <Image src="/assets/logo.jpg" width={36} height={36} alt="App Logo" />
          </div>
          <span className="ml-3 text-xl">Tech Career</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-10 hover:text-gray-900 tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-green-500 hover:text-green-500">
            Browse resources
          </a>
          <a className="mr-5 hover:text-gray-900 tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-green-500 hover:text-green-500">
            Request resource
          </a>
        </nav>
        <button className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded">
          Join us
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
