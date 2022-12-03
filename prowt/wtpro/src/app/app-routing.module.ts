import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CircularComponent } from './circular/circular.component';
import { MintsComponent } from './mints/mints.component';
import { NoticeComponent } from './notice/notice.component';
import { LayoutComponent } from './layout/layout.component';
import { CmmComponent } from './cmm/cmm.component';
import { CamComponent } from './cam/cam.component';
import { CcwComponent } from './ccw/ccw.component';
import { CinComponent } from './cin/cin.component';
import { CerComponent } from './cer/cer.component';
import { NmComponent } from './nm/nm.component';
import { NaComponent } from './na/na.component';
import { NwComponent } from './nw/nw.component';
import { NiComponent } from './ni/ni.component';
import { NsComponent } from './ns/ns.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
  {
    path:'',component:LayoutComponent,children:[
      { path: 'home', component: HomeComponent},
      { path: 'ns', component: NsComponent},
      { path: 'ni', component: NiComponent},
      { path: 'nw', component: NwComponent},
      { path: 'na', component: NaComponent},
      { path: 'nm', component: NmComponent},
      { path: 'cer', component: CerComponent},
      { path: 'cin', component: CinComponent}, 
      { path: 'ccw', component: CcwComponent}, 
      { path: 'cam', component: CamComponent},      
      { path: 'cmm', component: CmmComponent},     
      { path: 'circular', component: CircularComponent},
      { path: 'mints', component: MintsComponent},
      { path: 'notice', component: NoticeComponent},
      {path:'nav',component:NavComponent}
    ],
  },
  {
    path:'login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
