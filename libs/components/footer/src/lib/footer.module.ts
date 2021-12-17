import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { ServicesModule } from "@services";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [CommonModule, ServicesModule, RouterModule, BrowserModule],
    declarations: [FooterComponent],
    exports: [FooterComponent],
})
export class FooterModule {}
