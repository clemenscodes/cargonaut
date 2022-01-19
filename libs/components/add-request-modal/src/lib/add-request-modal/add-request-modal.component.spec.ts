import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AddRequestModalComponent } from "./add-request-modal.component";
import { AddRequestModalModule } from "../add-request-modal.module";
import { AuthService, RequestService } from "@services";

describe("AddRequestModalComponent", () => {
    let component: AddRequestModalComponent;
    let fixture: ComponentFixture<AddRequestModalComponent>;
    const authServiceMock = {};
    const requestServiceMock = {};
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AddRequestModalModule],
            providers: [
                { provide: AuthService, useValue: authServiceMock },
                { provide: RequestService, useValue: requestServiceMock },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddRequestModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
