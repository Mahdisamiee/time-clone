
import Select from "react-select";

const options = [
    { value: 1, label: "محاسبه به سال شمسی" },
    { value: 2, label: "محاسبه به سال میلادی" },
    { value: 3, label: "محاسبه به سال قمری" },
]

type SelectTypeProps = {
    selectedType: { value: number; label: string } | null;
    onSelectType : (e:any) => void;
}

const SelectType = ({selectedType, onSelectType} : SelectTypeProps) => {
  return (
    <Select
        className="w-full sm:w-3/4 text-center text-lg sm:text-right"
        defaultValue={selectedType}
        onChange={onSelectType}
        options={options}
        maxMenuHeight={200}
        placeholder="انتخاب نوع تبدیل..."
      />
  )
}

export default SelectType