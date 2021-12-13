import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core';
import { environment } from '@env';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
    declarations: [AppComponent],
    imports: [
        CoreModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000',
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
