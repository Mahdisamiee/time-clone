type ApiResponse = {
  units?: {value: string, label: string, flabel: string}[];
};

type GenericResponse = {
  generic: string[];
};

type ConversionPayload = {
  unit: string;
  from_unit: string | undefined;
  to_unit: string | undefined;
  val: string;
};

type ConversionResult = {
  result: any; // Adjust the type according to your API response
};

export async function fetchGenericModes(): Promise<GenericResponse> {
  const response = await fetch(
    `https://harchi.app/api/conversions-api/generic-conv/`,
    {
      cache: "no-cache",
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
}

export async function fetchUnitOptions(mode: string): Promise<ApiResponse> {
  const API_URL =
    mode === "temp"
      ? `https://harchi.app/api/conversions-api/temp-conv/`
      : `https://harchi.app/api/conversions-api/generic-conv/${mode}/`;

  const response = await fetch(API_URL, {
    cache: "no-cache",
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}

export async function postConversion(
  payload: ConversionPayload,
): Promise<ConversionResult> {
  const response = await fetch(
    "https://harchi.app/api/conversions-api/generic-conv/",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
}

export function validateForm({
  unit,
  from_unit,
  to_unit,
  val,
}: ConversionPayload): boolean {
  if (!unit || !from_unit || !to_unit || val === "") {
    alert("لطفا مقادیر تمام فیلدها را انتخاب نمایید"); // Consider using a more user-friendly notification method
    return false;
  }
  return true;
}
