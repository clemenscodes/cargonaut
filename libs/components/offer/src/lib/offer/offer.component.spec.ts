import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfferService } from '@services';
import { of } from 'rxjs';
import { OfferModule } from '../offer.module';
import { OfferComponent } from './offer.component';

describe('OfferComponent', () => {
    let component: OfferComponent;
    let fixture: ComponentFixture<OfferComponent>;
    const dateMock = {
        toDate: jest.fn(),
    };
    const data = [
        {
            date: dateMock,
            id: 'bNjxciF9zbDvolm0WYVN',
            price: 20,
            seats: 5,
            serviceKind: 'Mitfahrgelegenheit',
            startAddress: {
                house: 12,
                city: 'Gießen',
                zipCode: 35398,
                street: 'Marburger Straße',
            },
            status: 'toBeStarted',
            targetAddress: {
                street: 'Marktplatz',
                house: 1,
                zipCode: 35390,
                city: 'Gießen',
            },
            userId: ' 9QUaNf5bRWMuyOUBYVcE5cXnWeC3',
            volume: 460,
        },
    ];
    const offersMock = of(data);
    const offerServiceMock = {
        offers: offersMock,
    };
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OfferModule],
            providers: [{ provide: OfferService, useValue: offerServiceMock }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OfferComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
