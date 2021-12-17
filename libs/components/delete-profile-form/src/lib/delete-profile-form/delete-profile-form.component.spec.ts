import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DeleteProfileFormComponent } from "./delete-profile-form.component";
import { DeleteProfileFormModule } from "../delete-profile-form.module";

describe("DeleteProfileFormComponent", () => {
    let component: DeleteProfileFormComponent;
    let fixture: ComponentFixture<DeleteProfileFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DeleteProfileFormModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteProfileFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should emit event on form submit", () => {
        jest.spyOn(component.deleteProfileEvent, "emit");
        component.deleteProfile();
        expect(component.deleteProfileEvent.emit).toHaveBeenCalled();
    });
});
