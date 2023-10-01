export default function Footer() {
  return (
    <footer id="footer" className="text-sm text-gray-600">
      <div className="absolute w-full border-t border-gray-200 bg-white px-4 py-5 text-center font-lale">
        <h2 className="mb-2 text-xl font-bold text-gray-700">
          هرچی دلت میخواد اینجا پیدا کن | 365 روز سال هستیم
        </h2>
        {/* <p className="mb-4 text-gray-500">ابزارهای تبدیل و مدیریت زمان</p> */}

        {/* لیست ابزار ها */}
        <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-around text-center sm:flex-row sm:flex-col">
          <ul className="mb-4 flex flex-col justify-center gap-4 px-4 py-2 sm:flex-row">
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
          <ul className="mb-4 flex flex-col justify-center gap-4 px-4 py-2 sm:flex-row">
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

        <div className="text-base">
          <span className="text-blue-500">کیت 365</span> ، ابزار‌های متنوع برای
          رفع نیاز‌ها و خواسته‌های روزانه.
          <br />
        </div>
        {/* <div
          id="footerlangs"
          className="mt-2 flex flex-wrap justify-center gap-2"
        >
          <a href="/?lang=en" title="English">
            What time is it?
          </a>
          <a href="/languages">≫ more languages</a>
        </div> */}
        <div
          id="footerlangs"
          className="mt-2 flex flex-wrap justify-center gap-2"
        >
          <p className="mb-4 text-gray-500">
            Designed By{" "}
            <a
              className="ext-blue-500 font-medium underline transition-colors"
              href="https://www.linkedin.com/company/innofinity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Innofinity
            </a>{" "}
            team
          </p>
        </div>
      </div>
    </footer>
  );
}
