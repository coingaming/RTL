import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LNDRootComponent } from './lnd-root.component';
import { HomeComponent } from './home/home.component';
import { PeersChannelsComponent } from './peers-channels/peers-channels.component';
import { UnlockLNDComponent } from './unlock-lnd/unlock-lnd.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { QueryRoutesComponent } from './payments/query-routes/query-routes.component';
import { LookupsComponent } from './lookups/lookups.component';
import { ForwardingHistoryComponent } from './switch/forwarding-history.component';
import { RoutingPeersComponent } from './routing-peers/routing-peers.component';
import { ChannelBackupComponent } from './peers-channels/channels/channel-backup/channel-backup.component';
import { ChannelRestoreComponent } from './peers-channels/channels/channel-restore/channel-restore.component';
import { OnChainComponent } from './on-chain/on-chain.component';

import { AuthGuard, LNDUnlockedGuard } from '../shared/services/auth.guard';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

export const LndRoutes: Routes = [
  { path: '', component: LNDRootComponent,
    children: [
    { path: 'unlocklnd', component: UnlockLNDComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [LNDUnlockedGuard] },
    { path: 'peerschannels', component: PeersChannelsComponent, canActivate: [LNDUnlockedGuard] },
    { path: 'transactions', component: TransactionsComponent, canActivate: [LNDUnlockedGuard] },
    { path: 'onchain', component: OnChainComponent, canActivate: [LNDUnlockedGuard] },
    { path: 'chnlbackup', component: ChannelBackupComponent, canActivate: [LNDUnlockedGuard] },
    { path: 'chnlrestore', component: ChannelRestoreComponent, canActivate: [LNDUnlockedGuard] },
    { path: 'queryroutes', component: QueryRoutesComponent, canActivate: [LNDUnlockedGuard] },
    { path: 'forwardinghistory', component: ForwardingHistoryComponent, canActivate: [LNDUnlockedGuard] },
    { path: 'routingpeers', component: RoutingPeersComponent, canActivate: [LNDUnlockedGuard] },
    { path: 'lookups', component: LookupsComponent, canActivate: [LNDUnlockedGuard] },
    { path: '**', component: NotFoundComponent }
  ]}
];

export const LNDRouting: ModuleWithProviders = RouterModule.forChild(LndRoutes);
