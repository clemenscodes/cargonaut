import { TestBed } from '@angular/core/testing';
import { RequestService } from './request.service';
import { ServicesModule } from '../services.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '@env';

describe('RequestService', () => {
    let service: RequestService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ServicesModule,
                AngularFireModule.initializeApp(environment.firebase),
            ],
        });
        service = TestBed.inject(RequestService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
