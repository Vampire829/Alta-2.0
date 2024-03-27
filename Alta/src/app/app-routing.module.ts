import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { ApplicationComponent } from './ab-application/application/application.component';
import { LecalComponent } from './generation-lecal/lecal/lecal.component';
import { ArchiveLecalComponent } from './history-lecal/archive-lecal/archive-lecal.component';
import { EditingLecalComponent } from './change-lecal/editing-lecal/editing-lecal.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'about', component: ApplicationComponent},
{path: 'general', component: LecalComponent},
{path: 'history', component: ArchiveLecalComponent},
{path: 'chacnge', component: EditingLecalComponent },
{path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
