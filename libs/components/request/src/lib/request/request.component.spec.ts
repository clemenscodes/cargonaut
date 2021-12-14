import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestService } from '@services';
import { RequestModule } from '../request.module';
import { RequestComponent } from './request.component';

describe('RequestComponent', () => {
    let component: RequestComponent;
    let fixture: ComponentFixture<RequestComponent>;
<<<<<<< HEAD
    const requestServiceMock = {};
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RequestModule],
            providers: [
                { provide: RequestService, useValue: requestServiceMock },
            ],
=======
    const requestServiceMock = {}
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RequestModule],
            providers: [{provide: RequestService, useValue: requestServiceMock}]
>>>>>>> develop
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
