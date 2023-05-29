import { BASE_URL, WEATHER_KEY } from '@env';
import { ICurrWeather } from '@src/utils/types';
import axios from 'axios';

export const fetchCurrWeather = async (): Promise<ICurrWeather> => {
  const url = `${BASE_URL as string}/current.json?key=${
    WEATHER_KEY as string
  }&q=Iizuka&aqi=no`;
  try {
    const response = await axios.get(url);
    const { data }: { data: ICurrWeather } = response;
    return data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};
