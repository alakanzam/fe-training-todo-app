import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'template-driven',
  loadChildren: () => import('./template-driven-form-demo/template-driven-form-demo.module')
    .then(m => m.TemplateDrivenFormDemoModule)
}, {
  path: 'reactive-form',
  loadChildren: () => import('./reactive-form-demo/reactive-form-demo.module')
    .then(m => m.ReactiveFormDemoModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
