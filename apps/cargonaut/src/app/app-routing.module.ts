import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@login').then((m) => m.LoginModule),
    },
    {
        path: 'register',
        loadChildren: () => import('@register').then((m) => m.RegisterModule),
    },
    {
        path: 'profile',
        loadChildren: () => import('@profile').then((m) => m.ProfileModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
