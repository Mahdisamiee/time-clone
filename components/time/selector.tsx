"use client";
import { useEffect } from "react";
import Select from "react-select";

type SelectTypeProps = {
  selectedOption: { value: number; label: string } | null;
  onSelectOption: (e: any) => void;
  options: { value: number; label: string }[];
  label?: string;
};

const Selector = ({
  selectedOption,
  onSelectOption,
  options,
  label,
}: SelectTypeProps) => {
  return (
    <Select
      className="min-w-20 w-full text-center text-lg sm:text-right"
      defaultValue={selectedOption}
      onChange={onSelectOption}
      options={options}
      maxMenuHeight={200}
      placeholder={label ? label : "انتخاب کنید"}
    />
  );
};

export default Selector;
