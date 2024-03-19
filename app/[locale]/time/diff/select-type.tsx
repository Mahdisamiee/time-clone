import Select from "react-select";

const options = [
  { value: "jalali", label: "محاسبه به سال شمسی" },
  { value: "gregorian", label: "محاسبه به سال میلادی" },
  { value: "hijri", label: "محاسبه به سال قمری" },
];

type SelectTypeProps = {
  selectedType: { value: string; label: string } | null;
  onSelectType: (e: any) => void;
};

const SelectType = ({ selectedType, onSelectType }: SelectTypeProps) => {
  return (
    <Select
      className="w-full text-center text-lg sm:w-3/4 sm:text-right"
      defaultValue={selectedType}
      onChange={onSelectType}
      options={options}
      maxMenuHeight={200}
      placeholder="انتخاب نوع محاسبه دو تاریخ..."
    />
  );
};

export default SelectType;
