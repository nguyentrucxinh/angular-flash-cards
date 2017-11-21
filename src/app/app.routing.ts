import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './components/cards/cards.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'cards', pathMatch: 'full' },
    { path: 'cards', component: CardsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
