import { BASE_URL, WEATHER_KEY } from '@env';
import { TCurrWeather } from '@src/utils/types';
import axios from 'axios';

export const fetchCurrWeather = async (location: string): Promise<TCurrWeather> => {
  const url = `${BASE_URL as string}/current.json?key=${
    WEATHER_KEY as string
  }&q=${location}&aqi=no`;
  try {
    const response = await axios.get(url);
    const { data }: { data: TCurrWeather } = response;
    return data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};
