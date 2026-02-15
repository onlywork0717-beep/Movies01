import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className=" flex gap-6 justify-center items-center ">
        <div>
          <h3 className="text-white text-lg font-semibold text-center ">
            MovieDekho
          </h3>
          <p className="text-sm mt-2 text-center  pb-5 ">
            We Features Latest Hindi dubbed Movies that are avilable , You can
            check out them to enjoy.
          </p>
        </div>
      </div>
      <div className="flex gap-6 justify-around items-center ">
        <div className="flex-col justify-center items-center">
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="text-sm space-y-2 mt-2">
            <li>Home</li>
            <li>Movies</li>
            <li>Search</li>
          </ul>
        </div>

        <div className="flex-col justify-center items-center">
          <h4 className="text-white font-semibold">Legal</h4>
          <ul className="text-sm space-y-2 mt-2">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-xs mt-8 text-gray-500">
        © 2026 VlogCluster. All rights reserved.
      </p>
    </footer>
  );
}
