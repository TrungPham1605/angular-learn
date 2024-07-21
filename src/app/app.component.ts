import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ItemDetailComponent } from './angular-example/item-detail/item-detail.component';
import { Vd08InteractionCompComponent } from './angular-example/vd08-interaction-comp/vd08-interaction-comp.component';
import { Vd02StringInterpolationComponent } from './angular-example/vd02-string-interpolation/vd02-string-interpolation.component';
import { Vd04BindingComponent } from './angular-example/vd04-binding/vd04-binding.component';
import { Vd05BuiltInDirectivesComponent } from './angular-example/vd05-built-in-directives/vd05-built-in-directives.component';
import { Vd07InputOuputComponent } from './angular-example/vd07-input-ouput/vd07-input-ouput.component';
import { MyCompComponent } from './angular-example/my-comp/my-comp.component';
import { Vd09TemplateRefVarComponent } from "./angular-example/vd09-template-ref-var/vd09-template-ref-var.component";
import { Vd10ViewchildViewchildrenComponent } from './angular-example/vd10-viewchild-viewchildren/vd10-viewchild-viewchildren.component';
import { Vd11ContentProjectionComponent } from './angular-example/vd11-content-projection/vd11-content-projection.component';
import { Vd12BuiltInPipesComponent } from './angular-example/vd12-built-in-pipes/vd12-built-in-pipes.component';
import { Vd15HttpClientComponent } from './angular-example/vd15-http-client/vd15-http-client.component';
import { Vd18FormGroupComponent } from './angular-example/vd18-form-group/vd18-form-group.component';
import { Vd19FormArrayComponent } from './angular-example/vd19-form-array/vd19-form-array.component';
import { Vd20FormValidatorCtmComponent } from './angular-example/vd20-form-validator-ctm/vd20-form-validator-ctm.component';
import { Vd21RoutingComponent } from './angular-example/vd21-routing/vd21-routing.component';
import { Vd25InteractionComponentsComponent } from './angular-example/vd25-interaction-components/vd25-interaction-components.component';
import { Vd26HostEventListenerComponent } from './angular-example/vd26-host-event-listener/vd26-host-event-listener.component';
import { Vd33TypedFormArrayComponent } from './angular-example/vd33-typed-form-array/vd33-typed-form-array.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule, Vd33TypedFormArrayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learn';
}
