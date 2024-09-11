import { Routes } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';

export const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        title: 'Users',
    },
    {
        path: 'users/:id',
        component: UserDetailsComponent,
        title: 'User Details',
    },
    {
        path: '**',
        redirectTo: '',
    }

];
