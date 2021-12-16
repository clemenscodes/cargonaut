import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadService } from '@services';
import { UploadModule } from '../upload.module';
import { UploadComponent } from './upload.component';

describe('UploadComponent', () => {
    let component: UploadComponent;
    let fixture: ComponentFixture<UploadComponent>;
    const uploadServiceMock = {};
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UploadModule],
            providers: [
                { provide: UploadService, useValue: uploadServiceMock },
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
