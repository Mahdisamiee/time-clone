export type CalculatedDistance = {
  destinations: {
    c: location;
  };
  distance: distance[];
  duration: duration[];
  origins: {
    b: location;
  };
};

type location = {
  county_name: string;
  district_title: string;
  name: string;
  neighbourhood_title: string;
  province_name: string;
  ruraldistrict_title: string;
  suburb_title: string;
};

type distance = {
  destination_index: string;
  distance: number;
  origin_index: string;
};

type duration = {
  destination_index: string;
  duration: number;
  origin_index: string;
};
