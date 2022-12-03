import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CircularComponent } from './circular/circular.component';
import { MintsComponent } from './mints/mints.component';
import { NoticeComponent } from './notice/notice.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';
import { materialize } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { CmmComponent } from './cmm/cmm.component';
import { CamComponent } from './cam/cam.component';
import { CcwComponent } from './ccw/ccw.component';
import { CinComponent } from './cin/cin.component';
import { CerComponent } from './cer/cer.component';
import { NmComponent } from './nm/nm.component';
import { NaComponent } from './na/na.component';
import { NwComponent } from './nw/nw.component';

import { NsComponent } from './ns/ns.component';
import { HomeComponent } from './home/home.component';
import { NiComponent } from './ni/ni.component';
import { NavComponent } from './nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CircularComponent,
    MintsComponent,
    NoticeComponent,
    LayoutComponent,
    CmmComponent,
    CamComponent,
    CcwComponent,
    CinComponent,
    CerComponent,
    NmComponent,
    NaComponent,
    NwComponent,

    NsComponent,
    HomeComponent,
    NiComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
