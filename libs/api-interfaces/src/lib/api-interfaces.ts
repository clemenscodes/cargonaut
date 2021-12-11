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

export interface Rating {
    averageRating: number;
    ratingsCounter: number;
}

export enum Status {
    toBeStarted = 'toBeStarted',
    started = 'started',
    finishe = 'finished',
}

export interface Request {
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
    city: number;
}

export interface Offer {
    startAddress: Address;
    targetAddress: Address;
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
    mark: string;
    kind: VehicleKind;
    manufacturer: string;
    model: string;
    constructionYear: number;
    seats: number;
    volume: number;
}
