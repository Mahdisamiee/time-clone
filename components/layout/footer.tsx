import Link from "next/link";
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
              <Link
                href="/time/today"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                تاریخ امروز
              </Link>
            </li>
            <li>
              <Link
                href="/time/age"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                محاسبه سن
              </Link>
            </li>
            <li>
              <Link
                href="/time/sharia"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                اوقات شرعی
              </Link>
            </li>
            <li>
              <Link
                href="/time/conversion"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                تبدیل تاریخ
              </Link>
            </li>
            <li>
              <Link
                href="/time/worldclock"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                ساعت کشورها
              </Link>
            </li>
            <li>
              <Link
                href="/time/diff"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                فاصله دو تاریخ
              </Link>
            </li>
            <li>
              <Link
                href="/time/calendar"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                تقویم ایران
              </Link>
            </li>
          </ul>
          <ul className="mb-4 flex flex-col justify-center gap-4 px-4 py-2 sm:flex-row">
            <li>
              <Link
                href="/map/distance"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                فاصله شهرها
              </Link>
            </li>
            <li>
              <Link
                href="/calc/unit"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                تبدیل واحد
              </Link>
            </li>
            <li>
              <Link
                href="/calc/temp"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                تبدیل دما
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-base">
          <Link href="/" className="text-sky-600">
           کیت365
          </Link>{" "}
          ، ابزار‌های متنوع برای رفع نیاز‌ها و خواسته‌های روزانه.
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
              className="text-md text-sky-600 underline transition-colors"
              href="https://www.linkedin.com/company/innofinityteam"
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
