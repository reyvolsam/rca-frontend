import {Routes, RouterModule} from '@angular/router'

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
    },
    {
        path: 'rca',
        loadChildren: './modules/rca/rca.module#RcaModule'
    },
    {
        path: '**', redirectTo: ''
    }
]

export const AppRouting = RouterModule.forRoot(appRoutes)
