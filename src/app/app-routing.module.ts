import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/access/login/login.component';
import { TeamComponent } from './pages/team/team.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
    { 
        path: 'home',
        component: HomeComponent  
    },
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: 'contactus',
        component: ContactusComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'project/:id',
        component: ProjectComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}