import { TestBed } from "@angular/core/testing";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { of } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { OfferService } from "./offer.service";
describe("OfferService", () => {
    let service: OfferService;
    const offerMockData = {};
    const data = of(offerMockData);
    const offerCollectionMock = {
        snapshotChanges: jest.fn().mockReturnValue(data),
    };
    const angularFirestoreMock = {
        collection: jest.fn().mockReturnValue(offerCollectionMock),
    };
    const authServiceMock = {};
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: AngularFirestore, useValue: angularFirestoreMock },
                { provide: AuthService, useValue: authServiceMock },
            ],
        });
        service = TestBed.inject(OfferService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
