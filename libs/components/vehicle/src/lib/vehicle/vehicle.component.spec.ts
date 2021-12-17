import { ComponentFixture, TestBed } from "@angular/core/testing";
import { VehicleModule } from "../vehicle.module";

import { VehicleComponent } from "./vehicle.component";

describe("VehicleComponent", () => {
    let component: VehicleComponent;
    let fixture: ComponentFixture<VehicleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VehicleModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VehicleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
