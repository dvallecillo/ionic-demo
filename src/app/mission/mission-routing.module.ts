import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableMissionResolver } from '../resolvers/available-mission.resolver';
import { MissionPage } from './mission.page';

const routes: Routes = [
  {
    path: '',
    component: MissionPage,
    resolve: {
      mission: AvailableMissionResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionPageRoutingModule {}
