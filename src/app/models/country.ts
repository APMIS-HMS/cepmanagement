import { State } from "./state";

export interface Country {
    _id?: String;
    name: String;
    states?: State[];
}
