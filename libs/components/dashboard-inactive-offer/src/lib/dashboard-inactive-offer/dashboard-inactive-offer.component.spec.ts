import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardInactiveOfferComponent } from "./dashboard-inactive-offer.component";

describe("DashboardInactiveOfferComponent", () => {
    let component: DashboardInactiveOfferComponent;
    let fixture: ComponentFixture<DashboardInactiveOfferComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DashboardInactiveOfferComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardInactiveOfferComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
