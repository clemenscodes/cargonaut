import { TestBed } from "@angular/core/testing";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { of } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { RequestService } from "./request.service";

describe("RequestService", () => {
    let service: RequestService;
    const offerMockData = {};
    const data = of(offerMockData);
    const requestCollectionMock = {
        snapshotChanges: jest.fn().mockReturnValue(data),
    };
    const angularFirestoreMock = {
        collection: jest.fn().mockReturnValue(requestCollectionMock),
    };
    const authServiceMock = {};
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AngularFirestore,
                { provide: AngularFirestore, useValue: angularFirestoreMock },
                { provide: AuthService, useValue: authServiceMock },
            ],
        });
        service = TestBed.inject(RequestService);
    });
    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
