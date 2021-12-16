import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from '../auth/auth.service';
import { UploadService } from './upload.service';

describe('UploadService', () => {
    let service: UploadService;
    const mockUser = {
        user: {
            email: 'email',
            displayName: '',
            sendEmailVerification: jest.fn(),
            getIdToken: jest.fn(),
        },
    };
    const userDocEditMock = {
        update: jest.fn().mockReturnValue(mockUser),
        delete: jest.fn().mockReturnValue(mockUser),
    };
    const userDocMock = {
        doc: jest.fn().mockReturnValue(userDocEditMock),
    };
    const angularFirestoreMock = {
        collection: jest.fn().mockReturnValue(userDocMock),
    };
    const authServiceMock = {};
    const angularFireStorageMock = {};
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: AuthService, useValue: authServiceMock },
                {
                    provide: AngularFireStorage,
                    useValue: angularFireStorageMock,
                },
                { provide: AngularFirestore, useValue: angularFirestoreMock },
            ],
        });
        service = TestBed.inject(UploadService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
