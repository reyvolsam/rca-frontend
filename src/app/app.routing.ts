import {Routes, RouterModule} from '@angular/router'
import {AuthGuard} from './helpers/auth.guard'

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'rca',
        loadChildren: './modules/student/student.module#StudentModule',
        canActivate: [AuthGuard]
    },
    {
        path: '**', redirectTo: ''
    }
]

export const AppRouting = RouterModule.forRoot(appRoutes)
