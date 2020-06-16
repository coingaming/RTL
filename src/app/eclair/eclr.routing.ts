import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ECLRRootComponent } from './eclr-root.component';
import { ECLRHomeComponent } from '../eclair/home/home.component';
import { ECLRUnlockedGuard } from '../shared/services/auth.guard';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

export const EclrRoutes: Routes = [
  { path: '', component: ECLRRootComponent,
    children: [
    { path: 'home', component: ECLRHomeComponent, canActivate: [ECLRUnlockedGuard] },
    // { path: 'onchain', component: ECLROnChainComponent, canActivate: [ECLRUnlockedGuard] },
    // { path: 'peerschannels', component: ECLRPeersChannelsComponent, canActivate: [ECLRUnlockedGuard] },
    // { path: 'transactions', component: ECLRTransactionsComponent, canActivate: [ECLRUnlockedGuard] },
    // { path: 'routing', component: ECLRRoutingComponent, canActivate: [ECLRUnlockedGuard] },
    // { path: 'lookups', component: ECLRLookupsComponent, canActivate: [ECLRUnlockedGuard] },
    { path: '**', component: NotFoundComponent }
  ]}
];

export const ECLRRouting: ModuleWithProviders = RouterModule.forChild(EclrRoutes);
