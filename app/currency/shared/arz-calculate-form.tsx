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
  return (
    <div>
      <ul className="grid grid-cols-2 place-items-start gap-10 md:grid-cols-3">
        <li>
          <span className="text-sky-700">واحد حجمی : </span>
          <span>{vahed}</span>
        </li>
        <li>
          <span className="text-sky-700">کشور : </span>
          <span>{country}</span>
        </li>
        <li>
          <span className="text-sky-700">نوع بازار : </span>
          <span>{market}</span>
        </li>
        <li>
          <span className="text-sky-700">شاخه : </span>
          <span>{type}</span>
        </li>
      </ul>
    </div>
  );
};

export default ArzCalculateForm;
