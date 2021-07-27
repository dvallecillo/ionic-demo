import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./sign-in/sign-in.module').then((m) => m.SignInPageModule),
  },
  {
    path: 'available-missions',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./available-missions/available-missions.module').then(
            (m) => m.AvailableMissionsPageModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./mission/mission.module').then((m) => m.MissionPageModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'available-missions',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/available-missions' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
