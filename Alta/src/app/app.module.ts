import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-page/home/home.component';
import { ApplicationComponent } from './ab-application/application/application.component';
import { LecalComponent } from './generation-lecal/lecal/lecal.component';
import { AdminComponent } from './admin-page/admin/admin.component';
import { ArchiveLecalComponent } from './history-lecal/archive-lecal/archive-lecal.component';
import { ProfileComponent } from './profile-user/profile/profile.component';
import { EditingLecalComponent } from './change-lecal/editing-lecal/editing-lecal.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplicationComponent,
    LecalComponent,
    AdminComponent,
    ArchiveLecalComponent,
    ProfileComponent,
    EditingLecalComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
