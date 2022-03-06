import { Certifier } from './certifier';

export interface TitleList {
  certifier: Certifier;
  is_published: boolean;
  long_name: string;
  short_name: string;
  rncp_level: string;
  rncp_level_europe: string;
  _id: string;
}
