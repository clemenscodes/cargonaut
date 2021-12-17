import { TestBed } from "@angular/core/testing";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { of } from "rxjs";
import { VehicleService } from "./vehicle.service";

describe("VehicleService", () => {
    let service: VehicleService;
    const mockUser = {
        user: {
            email: "email",
            displayName: "",
            sendEmailVerification: jest.fn(),
            getIdToken: jest.fn(),
        },
    };
    const angularFireAuthMock = {
        authState: of({ getIdToken: jest.fn() }),
        createUserWithEmailAndPassword: jest.fn(),
        sendEmailVerification: jest.fn(),
        signInWithEmailAndPassword: jest.fn(),
        signInWithPopup: jest.fn(),
        sendPasswordResetEmail: jest.fn(),
        verifyPasswordResetCode: jest.fn(),
        applyActionCode: jest.fn(),
        confirmPasswordReset: jest.fn(),
        signOut: jest.fn(),
    };
    const dataMock = {
        data: jest.fn(),
    };
    const refMock = {
        get: jest.fn().mockResolvedValue(dataMock),
    };
    const userDocEditMock = {
        ref: refMock,
        get: jest.fn().mockReturnValue(mockUser),
        update: jest.fn().mockReturnValue(mockUser),
        delete: jest.fn(),
    };
    const vehicleMockData = {};
    const data = of(vehicleMockData);
    const vehicleCollectionMock = {
        snapshotChanges: jest.fn().mockReturnValue(data),
        doc: jest.fn().mockReturnValue(userDocEditMock),
    };
    const angularFirestoreMock = {
        collection: jest.fn().mockReturnValue(vehicleCollectionMock),
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: AngularFireAuth, useValue: angularFireAuthMock },
                { provide: AngularFirestore, useValue: angularFirestoreMock },
            ],
        });
        service = TestBed.inject(VehicleService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
