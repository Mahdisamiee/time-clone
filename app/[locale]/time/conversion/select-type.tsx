import { useTranslations } from "next-intl";
import Select from "react-select";

type SelectTypeProps = {
  selectedType: { value: number; label: string } | null;
  onSelectType: (e: any) => void;
};

const SelectType = ({ selectedType, onSelectType }: SelectTypeProps) => {
  const t = useTranslations("Time.Conversion.SelectType");
  const options = [
    { value: 1, label: t("j2gh") },
    { value: 2, label: t("g2jh") },
    { value: 3, label: t("h2jg") },
  ];

  return (
    <Select
      className="w-full text-center text-lg sm:w-3/4 sm:text-right"
      defaultValue={selectedType}
      onChange={onSelectType}
      options={options}
      maxMenuHeight={200}
      placeholder={t("placeholder")}
    />
  );
};

export default SelectType;
