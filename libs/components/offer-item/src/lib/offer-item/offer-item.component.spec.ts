import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Offer, ServiceKind, Status } from "@api-interfaces";
import { OfferService, RequestService } from "@services";
import { Timestamp } from "firebase/firestore";
import { OfferItemModule } from "../offer-item.module";
import { OfferItemComponent } from "./offer-item.component";

describe("OfferItemComponent", () => {
    let component: OfferItemComponent;
    let fixture: ComponentFixture<OfferItemComponent>;
    const offerMock: Offer = {
        userId: "userIdMock",
        offerId: "offerIdMock",
        date: Timestamp.fromDate(new Date()),
        price: 20,
        status: Status.toBeStarted,
        serviceKind: ServiceKind.taxi,
        startAddress: {
            street: "Start Street Mock",
            house: 1,
            city: "Start City Mock",
            zipCode: 35390,
        },
        targetAddress: {
            street: "Target Street Mock",
            house: 11,
            city: "Target City Mock",
            zipCode: 35398,
        },
        seats: 4,
        volume: 460,
    };

    const requestServiceMock = {};
    const offerServiceMock = {};
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OfferItemModule],
            providers: [
                { provide: RequestService, useValue: requestServiceMock },
                { provide: OfferService, useValue: offerServiceMock },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OfferItemComponent);
        component = fixture.componentInstance;
        component.offer = offerMock;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
