import { Timestamp } from "firebase/firestore";
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
    type: "error" | "success" | "neutral" | "warn";
    message: string;
}

export interface User {
    uid: string;
    email: string;
    emailVerified?: boolean;
    photoURL?: string;
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    displayName?: string;
    providerData?: [{ providerId: string }];
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
    displayName: string;
    //photoURL?: string;
    //firstName?: string;
    //lastName?: string;
}

export interface Ratings {
    averageRating: number;
    ratingsCounter: number;
}

export type Rating = 1 | 2 | 3 | 4 | 5;

export enum Status {
    toBeStarted = "toBeStarted",
    started = "started",
    finishe = "finished",
}

export interface Request {
    userId: string;
    offerId: string;
    status: Status;
    accepted: boolean;
    seats: number;
    volume: number;
}

export interface Address {
    street: string;
    house: number;
    zipCode: number;
    city: string
}

export interface Offer {
    userId: string;
    offerId?: string;
    date: Timestamp;
    price: number;
    status: Status;
    serviceKind: ServiceKind;
    startAddress: Address;
    targetAddress: Address;
    seats: number;
    volume: number;
}

export interface Driver {
    userId: string;
    offerId: string;
    vehicleId: string;
}

export enum ServiceKind {
    taxi = "Mitfahrgelegenheit",
    transport = "Transport",
}

export enum VehicleKind {
    Miniwagen = "Miniwagen",
    Kompaktwagen = "Kompaktwagen",
    Kombi = "Kombi",
    Cabrio = "Cabrio",
    SUV = "SUV",
    Van = "Van",
    Nutzfahrzeug = "Nutzfahrzeug",
}

export interface Vehicle {
    photoURL: string;
    userId: string;
    mark: string;
    kind: VehicleKind;
    manufacturer: string;
    model: string;
    constructionYear: number;
    seats: number;
    volume: number;
}

export class Offer {
    userId: string;
    date: Timestamp;
    price: number;
    status: Status;
    serviceKind: ServiceKind;
    startAddress: Address;
    targetAddress: Address;
    seats: number;
    volume: number;

    constructor(
        userId: string,
        date: Timestamp,
        price: number,
        status: Status,
        serviceKind: ServiceKind,
        startAddress: Address,
        targetAddress: Address,
        seats: number,
        volume: number
    ) {
        this.userId = userId;
        this.date = date;
        this.price = price;
        this.status = status;
        this.serviceKind = serviceKind;
        this.startAddress = startAddress;
        this.targetAddress = targetAddress;
        this.seats = seats;
        this.volume = volume;
    }
}
