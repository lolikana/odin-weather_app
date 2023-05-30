import { BASE_URL, WEATHER_KEY } from '@env';
import { TWeather } from '@src/utils/types';
import axios from 'axios';

export const fetchCurrWeather = async (location: string): Promise<TWeather> => {
  const url = `${BASE_URL as string}/forecast.json?key=${
    WEATHER_KEY as string
  }&q=${location}&days=3&aqi=no&alerts=no`;
  try {
    console.log('CALLED');
    const response = await axios.get(url);
    const { data }: { data: TWeather } = response;
    return data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};
