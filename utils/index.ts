import { carProps } from "@/components/CarDetails";
interface FilterProps {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model: string;
}

export const fetchCars = async (filters: FilterProps) => {
  const {manufacturer, 
    year, 
    fuel, 
    limit ,model}= filters
  const headers = {
    "X-RapidAPI-Key": "4f19fd1c5emsh2f9cf72220c0b77p131c4djsn3adf9d5f5222",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 5000; // Base rental price per day in dollars
  const mileageFactor = 0.2; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// hrjavascript-mastery

export const generateCarImageUrl = (car: carProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  // const apiKey = process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '';
  // const url = new URL(`https://cdn.imagin.studio/getimage?customer=${apiKey}&make=${make}&modelFamily=${model.split(" ")[0]}&zoomType=fullscreen&modelYear=${year}&angle=${angle}`);

  // url.searchParams.append('make', make);
  // url.searchParams.append('model', model);
  // The resulting URL will look like this:
  // https://example.com/api/endpoint?make=Toyota&model=Camry

  return `${url}`;
};
