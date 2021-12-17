import { ComponentFixture, TestBed } from "@angular/core/testing";
import { VehicleKind } from "@api-interfaces";
import { VehicleService } from "@services";
import { of } from "rxjs";
import { VehicleModule } from "../vehicle.module";
import { VehicleComponent } from "./vehicle.component";

describe("VehicleComponent", () => {
    let component: VehicleComponent;
    let fixture: ComponentFixture<VehicleComponent>;
    const data = [
        {
            id: "bNjxciF9zbDvolm0WYVN",
            photoURL: "someurl",
            manufacturer: "Opel",
            constructionYear: 2005,
            model: "Some model",
            mark: "FKB-BG-800",
            kind: VehicleKind.Kombi,
            seats: 5,
            userId: " 9QUaNf5bRWMuyOUBYVcE5cXnWeC3",
            volume: 460,
        },
    ];
    const vehiclesMock = of(data);
    const vehicleServiceMock = {
        vehicles: vehiclesMock,
    };
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VehicleModule],
            providers: [
                { provide: VehicleService, useValue: vehicleServiceMock },
            ],
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
