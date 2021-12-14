import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RegisterModule } from '../register.module';
import { AuthService } from '@services';
@Component({
    selector: 'cargonaut-register-form',
    template: '<p>Mock Register Form Component</p>',
})
class MockRegisterFormComponent {}

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;
    const authServiceMock = {};
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RegisterModule, RouterTestingModule.withRoutes([])],
            declarations: [MockRegisterFormComponent],
            providers: [{ provide: AuthService, useValue: authServiceMock }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render register form', () => {
        expect(
            fixture.debugElement.query(By.css('cargonaut-register-form'))
        ).not.toBeNull();
    });
});
