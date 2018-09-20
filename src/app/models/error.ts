export interface Error {
    message: String;
    isSet: boolean;
}

export interface Response {
    code : number,
    data : {
        isSuccess : boolean,
        message : string
    },
    messageType? : string
}
