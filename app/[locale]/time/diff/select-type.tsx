import { useTranslations } from "next-intl";
import Select from "react-select";

type SelectTypeProps = {
  selectedType: { value: string; label: string } | null;
  onSelectType: (e: any) => void;
};

const SelectType = ({ selectedType, onSelectType }: SelectTypeProps) => {
  const t = useTranslations("Time.Diff.Type");
  const options = [
    { value: "jalali", label: t("jallali") },
    { value: "gregorian", label: t("gregorian") },
    { value: "hijri", label: t("hijri") },
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
