import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './list/list.component';
import { AlfaComponent } from './alfa/alfa.component';
import { FordComponent } from './ford/ford.component';
import { KiaComponent } from './kia/kia.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { OpelComponent } from './opel/opel.component';
import { FiatComponent } from './fiat/fiat.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [{ path: '' , component: MainPageComponent},
                        { path: 'contact' , component: ContactComponent},
                        { path: 'list' , component: ListComponent},
                        { path: 'alfa' , component: AlfaComponent},
                        { path: 'ford' , component: FordComponent},
                        { path: 'kia' , component: KiaComponent},
                        { path: 'toyota' , component: ToyotaComponent},
                        { path: 'opel' , component: OpelComponent},
                        { path: 'fiat' , component: FiatComponent},
                        { path: 'login-admin' , component: LoginAdminComponent},
                        { path: 'info', component: InfoComponent}];
                        

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
