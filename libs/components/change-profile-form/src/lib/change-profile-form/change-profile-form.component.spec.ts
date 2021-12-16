import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProfileFormComponent } from './change-profile-form.component';
import { ChangeProfileFormModule } from '../change-profile-form.module';
import { UploadService } from '@services';

describe('ChangeProfileFormComponent', () => {
    let component: ChangeProfileFormComponent;
    let fixture: ComponentFixture<ChangeProfileFormComponent>;
    const uploadServiceMock = {};
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChangeProfileFormModule],
            providers: [
                { provide: UploadService, useValue: uploadServiceMock },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangeProfileFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render one input element', () => {
        const form = fixture.debugElement.nativeElement.querySelector('form');
        const input = form.querySelectorAll('input');
        expect(input.length).toEqual(2);
    });

    it('should set error when display name is longer than 15 characters', () => {
        component.displayName.setValue('over15characterlongdisplayname');
        expect(component.displayName.errors).not.toBeNull();
    });

    it('should emit event on form submit', () => {
        jest.spyOn(component.changeProfileEvent, 'emit');
        component.changeProfile();
        expect(component.changeProfileEvent.emit).toHaveBeenCalled();
    });
});
