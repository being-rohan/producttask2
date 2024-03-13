

export interface Users {
    username: string;
    userdetails: string;
    userid: string;
    userStstus: any;
}
export enum userstat {
    lookingjob = "looking for it",
    Inprocess = "Inprocessing",
    placed = "Placed"
}