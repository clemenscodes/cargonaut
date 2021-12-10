import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmailFormComponent } from './change-email-form.component';
import { ChangeEmailFormModule } from '../change-email-form.module';
import { AbstractControl } from '@angular/forms';

describe('ChangeEmailFormComponent', () => {
    let component: ChangeEmailFormComponent;
    let fixture: ComponentFixture<ChangeEmailFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChangeEmailFormModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChangeEmailFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return abstract control of password and new email', () => {
        expect(component.password).toBeInstanceOf(AbstractControl);
        expect(component.newEmail).toBeInstanceOf(AbstractControl);
    });

    it('should render two input elements', () => {
        const form = fixture.debugElement.nativeElement.querySelector('form');
        const input = form.querySelectorAll('input');
        expect(input.length).toEqual(2);
    });

    it('should set error when password is empty', () => {
        component.password.setValue('');
        expect(component.password.errors).not.toBeNull();
    });

    it('should set error when email is wrongly formatted', () => {
        component.newEmail.setValue('test');
        expect(component.newEmail.errors).not.toBeNull();
    });

    it('should emit event on form submit', () => {
        jest.spyOn(component.changeEmailEvent, 'emit');
        component.changeEmail();
        expect(component.changeEmailEvent.emit).toHaveBeenCalled();
    });

    it('should reset form on form submit', () => {
        jest.spyOn(component.changeEmailForm, 'reset');
        component.changeEmail();
        expect(component.changeEmailForm.reset).toHaveBeenCalled();
    });
});
