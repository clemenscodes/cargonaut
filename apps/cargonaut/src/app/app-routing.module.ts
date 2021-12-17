import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "@home";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "register",
        loadChildren: () => import("@register").then((m) => m.RegisterModule),
    },
    {
        path: "profile",
        loadChildren: () => import("@profile").then((m) => m.ProfileModule),
    },
    {
        path: "offer",
        loadChildren: () => import("@offer").then((m) => m.OfferModule),
    },
    {
        path: "request",
        loadChildren: () => import("@request").then((m) => m.RequestModule),
    },
    {
        path: "vehicle",
        loadChildren: () => import("@vehicle").then((m) => m.VehicleModule),
    },
    {
        path: "dashboard",
        loadChildren: () => import("@dashboard").then((m) => m.DashboardModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
