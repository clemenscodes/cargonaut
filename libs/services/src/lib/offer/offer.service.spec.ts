import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { OfferService } from './offer.service';
describe('OfferService', () => {
    let service: OfferService;
    const offerMockData = {};
    const data = of(offerMockData);
    const offerCollectionMock = {
        snapshotChanges: jest.fn().mockReturnValue(data),
    };
    const angularFirestoreMock = {
        collection: jest.fn().mockReturnValue(offerCollectionMock),
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AngularFirestore,
                { provide: AngularFirestore, useValue: angularFirestoreMock },
            ],
        });
        service = TestBed.inject(OfferService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
