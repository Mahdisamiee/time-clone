import { useTranslations } from "next-intl";

const ArzCalculateForm = ({
  vahed,
  country,
  market,
  type,
}: {
  vahed: string;
  country: string;
  market: string;
  type: string;
}) => {
  const t = useTranslations("Currency.Shared");

  return (
    <div>
      <ul className="grid grid-cols-2 place-items-start gap-10 md:grid-cols-3">
        <li>
          <span className="text-sky-700">{t("vahed")} : </span>
          <span>{vahed}</span>
        </li>
        <li>
          <span className="text-sky-700">{t("country")} : </span>
          <span>{country}</span>
        </li>
        <li>
          <span className="text-sky-700">{t("market")} : </span>
          <span>{market}</span>
        </li>
        <li>
          <span className="text-sky-700">{t("type")} : </span>
          <span>{type}</span>
        </li>
      </ul>
    </div>
  );
};

export default ArzCalculateForm;
