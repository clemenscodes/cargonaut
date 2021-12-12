export interface Message {
    message: string;
}

export interface Environment {
    firebase: {
        projectId: string;
        appId: string;
        storageBucket: string;
        apiKey: string;
        authDomain: string;
        messagingSenderId: string;
    };
    production: boolean;
    apiUrl: string;
}

export interface Alert {
    type: 'error' | 'success' | 'neutral' | 'warn';
    message: string;
}

export interface User {
    uid: string;
    email?: string;
    emailVerified?: boolean;
    photoURL?: string;
    displayName?: string;
}

export interface ChangePasswordData {
    oldPassword: string;
    newPassword: string;
}
export interface ChangeEmailData {
    password: string;
    newEmail: string;
}
export interface ChangeProfileData {
    displayName?: string;
}

export interface Ratings {
    averageRating: number;
    ratingsCounter: number;
}

export type Rating = 1 | 2 | 3 | 4 | 5

export enum Status {
    toBeStarted = 'toBeStarted',
    started = 'started',
    finishe = 'finished',
}

export interface Request {
    userId: string;
    status: Status;
    startAddress: Address;
    targetAddress: Address;
    seats: number;
    volume: number;
}

export interface Address {
    street: string;
    house: number;
    zipCode: number;
    city: string;
}

export interface Offer {
    userId: string;
    requestId: string;
    date: Date;
    price: number;
    status: Status;
}

export interface Driver {
    userId: string;
    offerId: string;
    vehicleId: string;
}

export enum VehicleKind {
    mini = "Miniwagen",
    compact = "Kompaktwagen",
    combi = "Kombi",
    cabrio = "Cabrio",
    suv = "SUV",
    van = "Van",
    use = "Nutzfahrzeug"
}

export interface Vehicle {
    userId: string;
    mark: string;
    kind: VehicleKind;
    manufacturer: string;
    model: string;
    constructionYear: number;
    seats: number;
    volume: number;
}
