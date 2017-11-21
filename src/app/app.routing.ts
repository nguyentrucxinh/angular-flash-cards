import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './components/cards/cards.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { MemorizeComponent } from './components/memorize/memorize.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'cards', pathMatch: 'full' },
    { path: 'cards', component: CardsComponent },
    { path: 'edit', component: EditComponent },
    { path: 'login', component: LoginComponent },
    { path: 'memorize', component: MemorizeComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
