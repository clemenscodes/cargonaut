import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@services';
import { of } from 'rxjs';
import { FooterModule } from '../footer.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    const mockUser = {
        email: 'mail@example.com',
        displayName: 'Max',
        emailVerified: false,
        photoURL: undefined,
    };
    const subscribeMock = {
        subscribe: of(mockUser),
    };
    const authServiceMock = {
        authState$: of(subscribeMock),
    };
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FooterModule, RouterTestingModule.withRoutes([])],
            providers: [{ provide: AuthService, useValue: authServiceMock }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
