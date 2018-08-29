import { LGA } from './lga';
import { City } from './city';
export interface State {
    _id?: String;
    name: String;
    lgs?: LGA[];
    cities?: City[];
}
