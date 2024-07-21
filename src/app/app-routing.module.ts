import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'input-output', pathMatch: 'full' },
  { path: 'item-output', loadComponent: () => import('./angular-example/item-ouput/item-ouput.component').then(m =>m.ItemOuputComponent)},
  { path: 'my-comp', loadComponent: () => import('./angular-example/my-comp/my-comp.component').then(m =>m.MyCompComponent)},
  { path: 'show-content-multi', loadComponent: () => import('./angular-example/show-content-multi/show-content-multi.component').then(m =>m.ShowContentMultiComponent)},

  { path: 'vd02-string-interpolation', loadComponent: () => import('./angular-example/vd02-string-interpolation/vd02-string-interpolation.component').then(m =>m.Vd02StringInterpolationComponent)},
  { path: 'vd04-binding', loadComponent: () => import('./angular-example/vd04-binding/vd04-binding.component').then(m => m.Vd04BindingComponent)},
  { path: 'vd05-built-in-directives', loadComponent: () => import('./angular-example/vd05-built-in-directives/vd05-built-in-directives.component').then(m => m.Vd05BuiltInDirectivesComponent)},
  { path: 'vd06-custom-directives', loadComponent: () => import('./angular-example/vd06-custom-directives/vd06-custom-directives.component').then(m => m.Vd06CustomDirectivesComponent)},
  { path: 'vd07-input-output', loadComponent: () => import('./angular-example/vd07-input-ouput/vd07-input-ouput.component').then(m =>m.Vd07InputOuputComponent)},
  { path: 'vd08-interaction-comp', loadComponent: () => import('./angular-example/vd08-interaction-comp/vd08-interaction-comp.component').then(m => m.Vd08InteractionCompComponent) },
  { path: 'vd09-template-ref-var', loadComponent: () => import('./angular-example/vd09-template-ref-var/vd09-template-ref-var.component').then(m => m.Vd09TemplateRefVarComponent) },
  { path: 'vd10-viewchild-viewchildren', loadComponent: () => import('./angular-example/vd10-viewchild-viewchildren/vd10-viewchild-viewchildren.component').then(m => m.Vd10ViewchildViewchildrenComponent) },
  { path: 'vd11-content-projection', loadComponent: () => import('./angular-example/vd11-content-projection/vd11-content-projection.component').then(m => m.Vd11ContentProjectionComponent) },
  { path: 'vd12-built-in-pipes', loadComponent: () => import('./angular-example/vd12-built-in-pipes/vd12-built-in-pipes.component').then(m => m.Vd12BuiltInPipesComponent) },
  { path: 'vd15-http-client', loadComponent: () => import('./angular-example/vd15-http-client/vd15-http-client.component').then(m => m.Vd15HttpClientComponent) },
  { path: 'vd16-http-handle', loadComponent: () => import('./angular-example/vd16-http-handle/vd16-http-handle.component').then(m => m.Vd16HttpHandleComponent) },
  { path: 'vd17-interceptor', loadComponent: () => import('./angular-example/vd17-interceptor/vd17-interceptor.component').then(m => m.Vd17InterceptorComponent) },
  { path: 'vd18-form-group', loadComponent: () => import('./angular-example/vd18-form-group/vd18-form-group.component').then(m => m.Vd18FormGroupComponent) },
  { path: 'vd19-form-array', loadComponent: () => import('./angular-example/vd19-form-array/vd19-form-array.component').then(m => m.Vd19FormArrayComponent) },
  { path: 'vd20-form-validator', loadComponent: () => import('./angular-example/vd20-form-validator-ctm/vd20-form-validator-ctm.component').then(m => m.Vd20FormValidatorCtmComponent) },
  { path: 'vd21-routing', loadComponent: () => import('./angular-example/vd21-routing/vd21-routing.component').then(m => m.Vd21RoutingComponent) },
  { path: 'vd23-dom-sanitizer', loadComponent: () => import('./angular-example/vd23-dom-sanitizer/vd23-dom-sanitizer.component').then(m => m.Vd23DomSanitizerComponent) },
  { path: 'vd25-interaction-components', loadComponent: () => import('./angular-example/vd25-interaction-components/vd25-interaction-components.component').then(m => m.Vd25InteractionComponentsComponent) },
  { path: 'vd26-host-event-listener', loadComponent: () => import('./angular-example/vd26-host-event-listener/vd26-host-event-listener.component').then(m => m.Vd26HostEventListenerComponent) },
  { path: 'vd33-typed-form-array', loadComponent: () => import('./angular-example/vd33-typed-form-array/vd33-typed-form-array.component').then(m => m.Vd33TypedFormArrayComponent) },
  { path: 'vd35-documentation', loadComponent: () => import('./angular-example/vd35-documentation/vd35-documentation.component').then(m => m.Vd35DocumentationComponent) },
  
  


  


  { path: 'item-detail', loadComponent: () => import('./angular-example/item-detail/item-detail.component').then(m=> m.ItemDetailComponent) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
