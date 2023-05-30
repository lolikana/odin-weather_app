/* eslint-disable @typescript-eslint/no-var-requires */
import { InfoSupData } from '@src/utils/datas';
import { TInfoSup } from '@src/utils/types';

class InfoSup implements TInfoSup {
  constructor(id: string, title: string, icon: any, data: number) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.data = data;
  }
  id: string;
  title: string;
  icon: any;
  data: number;

  addInfo(info: string, data: number) {
    switch (info) {
      case 'feelslike_c':
        InfoSupData.push(
          new InfoSup(
            info,
            'Feels Like',
            require('assets/icons/weather/thermostat_FILL0_wght400_GRAD0_opsz48.png'),
            data
          )
        );
        break;
      case 'humidity':
        InfoSupData.push(
          new InfoSup(
            info,
            'Humidity',
            require('assets/icons/weather/humidity_percentage_FILL0_wght400_GRAD0_opsz48.png'),
            data
          )
        );
        break;
      case 'precip_mm':
        InfoSupData.push(
          new InfoSup(
            info,
            'Precipitation',
            require('assets/icons/weather/rainy_FILL0_wght400_GRAD0_opsz48.png'),
            data
          )
        );
        break;
      case 'wind_kph':
        InfoSupData.push(
          new InfoSup(
            info,
            'Wind Speed',
            require('assets/icons/weather/air_FILL0_wght400_GRAD0_opsz48.png'),
            data
          )
        );
        break;
    }
  }
}

export default InfoSup;
