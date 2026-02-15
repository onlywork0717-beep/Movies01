export default function Header() {
  return (
    // 'sticky top-0' keeps it at the top, 'z-50' ensures it stays above other content
    <header className="sticky top-0 z-50 shadow-md">
      <nav className="flex flex-row justify-between items-center px-4 py-1.5 h-16 bg-white">
        <h1 className="text-[#17203D]  font-light">
          Movie<span className=" text-red-500 font-bold">Dubbed</span>
        </h1>

        <ul className="flex flex-row items-center list-none m-0 p-0">
          <li>
            <a
              href="/"
              className="px-4 py-2 text-black hover:bg-[#17203D] hover:text-white font-bold transition-all rounded-md"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="px-4 py-2 text-black hover:bg-[#17203D] hover:text-white font-bold transition-all rounded-md"
            >
              Movies
            </a>
          </li>
          <li>
            <a
              href="/"
              className="px-4 py-2 text-black hover:bg-[#17203D] hover:text-white font-bold transition-all rounded-md"
            >
              Search
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
