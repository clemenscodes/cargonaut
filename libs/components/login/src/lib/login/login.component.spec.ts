import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { LoginModule } from '../login.module';
import { EmailFormModule } from '@email-form';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '@services';
describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    const authServiceMock = {};
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                LoginModule,
                EmailFormModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [{ provide: AuthService, useValue: authServiceMock }],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render login form', () => {
        expect(component.showLogin).toBeTruthy();
        expect(
            fixture.debugElement.query(By.css('cargonaut-login-form'))
        ).not.toBeNull();
    });
});
