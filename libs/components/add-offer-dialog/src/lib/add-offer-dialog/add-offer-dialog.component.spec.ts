import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AddOfferDialogModule } from '../add-offer-dialog.module';
import { AddOfferDialogComponent } from "./add-offer-dialog.component";

describe("AddOfferDialogComponent", () => {
    let component: AddOfferDialogComponent;
    let fixture: ComponentFixture<AddOfferDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AddOfferDialogModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddOfferDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
