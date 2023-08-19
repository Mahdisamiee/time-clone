export default function Footer() {
  return (
    <footer id="footer" className="text-sm text-gray-600">
      <div className="absolute w-full border-t border-gray-200 bg-white py-5 px-4 text-center">
        <h2 className="mb-2 text-xl font-bold text-gray-700">
          Exact time for Russia
        </h2>
        <p className="mb-4 text-gray-500">
          Designed By Nano1 team{" "}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://twitter.com/Tehran_chi"
            target="_blank"
            rel="noopener noreferrer"
          >
            2M & SM
          </a>
        </p>

        <div className="mx-auto flex max-w-screen-xl flex-row sm:flex-col items-center justify-around text-center sm:flex-row">
          <ul className="mb-4 flex flex-col sm:flex-row justify-center gap-4 px-4 py-2">
            <li>
              <a
                href="/apps"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                Apps
              </a>
            </li>
            <li>
              <a
                href="/widgets"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                Widgets
              </a>
            </li>
            <li>
              <a
                href="/time_zone_news"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                Time zone news
              </a>
            </li>
            <li>
              <a
                href="/mailing_list"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                Newsletter
              </a>
            </li>
          </ul>
          <ul className="mb-4 flex flex-col sm:flex-row justify-center gap-4 px-4 py-2">
            <li>
              <a
                href="/apps"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                Apps
              </a>
            </li>
            <li>
              <a
                href="/widgets"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                Widgets
              </a>
            </li>
            <li>
              <a
                href="/time_zone_news"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                Time zone news
              </a>
            </li>
            <li>
              <a
                href="/mailing_list"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                Newsletter
              </a>
            </li>
          </ul>
        </div>

        <div>
          Time.is displays exact, official atomic clock time for any time zone
          (more than 7 million locations) in 57 languages.
          <br />
        </div>
        <div
          id="footerlangs"
          className="mt-2 flex flex-wrap justify-center gap-2"
        >
          {/* Add the rest of the language links here */}
          <a href="/?lang=en" title="English">
            What time is it?
          </a>
          {/* ... */}
          <a href="/languages">≫ more languages</a>
        </div>
      </div>
    </footer>
  );
}
