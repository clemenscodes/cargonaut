import { Timestamp } from 'firebase-admin/firestore';
<<<<<<< HEAD

=======
>>>>>>> develop
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
<<<<<<< HEAD
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    displayName?: string;
    rating?: number;
    email?: string;
    emailVerified?: boolean;
    photoURL?: string;
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
    displayName?: string;
}

=======
    email: string;
    emailVerified?: boolean;
    photoURL?: string;
    firstName?: string;
    lastName?: string;
    birthDate?: string;
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

>>>>>>> develop
export interface Ratings {
    averageRating: number;
    ratingsCounter: number;
}

export type Rating = 1 | 2 | 3 | 4 | 5;

export enum Status {
    toBeStarted = 'toBeStarted',
    started = 'started',
    finishe = 'finished',
}

export interface Request {
    userId: string;
    offerId: string;
<<<<<<< HEAD
    status: Status;
=======
>>>>>>> develop
    accepted: boolean;
    seats: number;
    volume: number;
}

export interface Address {
    street: string;
    house: number;
    zipCode: number;
<<<<<<< HEAD
    city: number;
}

export interface Offer {
    offerId: string;
=======
    city: string;
}

export interface Offer {
>>>>>>> develop
    userId: string;
    date: Timestamp;
    price: number;
    status: Status;
    serviceKind: ServiceKind;
    startAddress: Address;
    targetAddress: Address;
    seats: number;
    volume: number;
<<<<<<< HEAD
    rating: Rating;
}

export interface Driver {
    userId: string;
    offerId: string;
    vehicleId: string;
=======
>>>>>>> develop
}

export enum ServiceKind {
    taxi = 'Mitfahrgelegenheit',
    transport = 'Transport',
}

export enum VehicleKind {
    mini = 'Miniwagen',
    compact = 'Kompaktwagen',
    combi = 'Kombi',
    cabrio = 'Cabrio',
    suv = 'SUV',
    van = 'Van',
    use = 'Nutzfahrzeug',
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
