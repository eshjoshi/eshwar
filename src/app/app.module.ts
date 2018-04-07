import { FlatDetailsService } from './service/flatDetails.service';
import { FlatsDetailComponent } from './flatsDetails.component';
import { AutherInfoService } from './service/autherInfo.service';
import { AutherComponent } from './auther.component';
import { LibariesComponent } from './libaries.component';
import { AutherInfoComponent } from './autherInfo.component';
import { LibariesService } from './service/libaries.service';
import { AutherService } from './service/auther.service';
import { CourseService } from './service/course.service';
import { HelloWorld } from './hello-world.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { CustomPipeComponentComponent } from './custom-pipe-component/custom-pipe-component.component';
import { CustomSummeryPipePipe } from './angular-pipe/custom-summery-pipe.pipe';
import { IntercommComponent } from './intercomm/intercomm.component';
import { TextCamalcasePipe } from './pipe/text-camalcase.pipe';
import { NgClassBindingComponent } from './ng-class-binding/ng-class-binding.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgSwichComponent } from './ng-swich/ng-swich.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgforDemoComponent } from './ngfor-demo/ngfor-demo.component';
import { CustomDirectiveDirective } from './directive/custom-directive.directive';
import { TemplateEventFormComponent } from './template-event-form/template-event-form.component';
import { DemoTemplateFormComponent } from './demo-template-form/demo-template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,HelloWorld,AutherInfoComponent,LibariesComponent,AutherComponent,FlatsDetailComponent, AttributeDemoComponent, ClassbindingComponent, EventBindingComponent, StyleBindingComponent, AngularPipeComponent, CustomPipeComponentComponent, CustomSummeryPipePipe, IntercommComponent, TextCamalcasePipe, NgClassBindingComponent, NgcontentComponent, NgContainerComponent, NgifComponent, NgSwichComponent, NgForComponent, NgforDemoComponent, CustomDirectiveDirective, TemplateEventFormComponent, DemoTemplateFormComponent, ReactiveFormComponent, FormArrayComponent, FormBuilderComponent, ChangePasswordComponent
  ],
  imports: [  
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [CourseService,AutherService,LibariesService,AutherInfoService,FlatDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
