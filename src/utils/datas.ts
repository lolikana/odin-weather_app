/* eslint-disable @typescript-eslint/no-var-requires */
import InfoSup from '@src/models/infoSup';

import { TInfoSup } from './types';

export const InfoSupData: TInfoSup[] = [
  new InfoSup(
    1,
    'Feels Like',
    require('assets/icons/weather/thermostat_FILL0_wght400_GRAD0_opsz48.png'),
    23.5
  ),
  new InfoSup(
    2,
    'Humidity',
    require('assets/icons/weather/humidity_percentage_FILL0_wght400_GRAD0_opsz48.png'),
    73.5
  ),
  new InfoSup(
    3,
    'Chance of Rain',
    require('assets/icons/weather/rainy_FILL0_wght400_GRAD0_opsz48.png'),
    77
  ),
  new InfoSup(
    4,
    'Wind Speed',
    require('assets/icons/weather/air_FILL0_wght400_GRAD0_opsz48.png'),
    7.3
  )
];
