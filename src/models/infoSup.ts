import { TInfoSup } from '@src/utils/types';

class InfoSup implements TInfoSup {
  constructor(id: number, title: string, icon: any, data: number) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.data = data;
  }
  id: number;
  title: string;
  icon: any;
  data: number;
}

export default InfoSup;
