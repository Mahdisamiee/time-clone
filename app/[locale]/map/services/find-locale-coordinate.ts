import { LocaleCoordinates } from "../models/coordinates";

const localeCoordinates: { [key: string]: LocaleCoordinates } = {
    'en': [-122.4194, 37.7749],
    'fa': [51.3890, 35.6892],
    'ar': [46.6753, 24.7136],
    'fr': [2.2137, 46.2276],   
  };
  
 export const findZoomLocale = (locale: string) :LocaleCoordinates => {
    // Default coordinates if the locale is not found in the map
    const defaultCoordinates = [0, 0];
    // Return the coordinates based on the provided locale, or default if not found
    return localeCoordinates[locale] || defaultCoordinates;
  };