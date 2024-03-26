import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Component.Footer");
  return (
    <footer id="footer" className="text-sm text-gray-600">
      <div className="absolute w-full border-t border-gray-200 bg-white px-4 py-5 text-center font-vazir">
        <h2 className="mb-2 text-lg font-bold text-gray-700">{t("title")}</h2>
        {/* <p className="mb-4 text-gray-500">ابزارهای تبدیل و مدیریت زمان</p> */}

        {/* لیست ابزار ها */}
        <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-around text-center sm:flex-row sm:flex-col">
          <ul className="mb-4 flex flex-col justify-center gap-4 px-4 py-2 sm:flex-row">
            <li>
              <Link
                href="/time/today"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                {t("Links.today")}
              </Link>
            </li>
            <li>
              <Link
                href="/time/age"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                {t("Links.age")}
              </Link>
            </li>
            <li>
              <Link
                href="/time/sharia"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                {t("Links.sharia")}
              </Link>
            </li>
            <li>
              <Link
                href="/conversion"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                {t("Links.conversion")}
              </Link>
            </li>
            <li>
              <Link
                href="/time/worldclock"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                {t("Links.worldClock")}
              </Link>
            </li>
          </ul>
          <ul className="mb-4 flex flex-col justify-center gap-4 px-4 py-2 sm:flex-row">
            <li>
              <Link
                href="/map/distance"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                {t("Links.distance")}
              </Link>
            </li>
            <li>
              <Link
                href="/conversion/temp"
                className="px-3 py-1 text-gray-700 transition-colors hover:bg-gray-700 hover:text-white"
              >
                {t("Links.temperature")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-base">
          <Link href="/" className="text-sky-600">
            {t("Links.whatever")}
          </Link>{" "}
          {t("description")}
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
          className="mt-5 flex flex-wrap justify-center gap-2"
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
