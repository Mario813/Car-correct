import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AlfaComponent } from './alfa/alfa.component';
import { FiatComponent } from './fiat/fiat.component';
import { FordComponent } from './ford/ford.component';
import { KiaComponent } from './kia/kia.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OpelComponent } from './opel/opel.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { InfoComponent } from './info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProvaComponent } from './prova/prova.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AlfaComponent,
    FiatComponent,
    FordComponent,
    KiaComponent,
    MainPageComponent,
    OpelComponent,
    ToyotaComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    LoginAdminComponent,
    InfoComponent,
    ProvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
