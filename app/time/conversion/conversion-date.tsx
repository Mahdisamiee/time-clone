"use client";

import { useEffect, useState } from "react";
import SelectType from "./select-type";
import DatePicker from "./date-picker";

const ConversionDate = () => {
  const [selectedType, setSelectedType] = useState<{
    value: number;
    label: string;
  } | null>(null);

  const handleSelectType = (option:{value : number, label: string}) => {
		console.log("option---->",option)
		setSelectedType(option)
	};

  return (
    <div className="bg-gray-200 flex flex-col items-center justify-around gap-5">
      <SelectType selectedType={selectedType} onSelectType={handleSelectType} />
      <DatePicker type={selectedType?.value}/>
    </div>
  );
};

export default ConversionDate;
