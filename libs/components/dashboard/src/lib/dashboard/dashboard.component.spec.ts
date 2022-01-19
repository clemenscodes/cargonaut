import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OfferService, RequestService } from "@services";
import { DashboardModule } from "../dashboard.module";

import { DashboardComponent } from "./dashboard.component";

describe("DashboardComponent", () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    const offerServiceMock = {};
    const requestServiceMock = {
        // offers: offersMock,
    };
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DashboardModule],
            providers: [
                { provide: OfferService, useValue: offerServiceMock },
                { provide: RequestService, useValue: requestServiceMock },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
