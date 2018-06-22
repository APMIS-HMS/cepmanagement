import { State } from "./state";

export interface Title {
    _id?: String;
    name: String;
    states: State[];
}
