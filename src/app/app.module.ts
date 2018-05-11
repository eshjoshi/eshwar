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
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpModule} from '@angular/http';
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
import { PostComponent } from './post/post.component';
import { HttpService } from './common/httpService';
import { PostServiceComponent } from './post-service/post-service.component';
import { AppErrorHandler } from './common/error.error-handler';
import { OptimisticComponent } from './optimistic/optimistic.component';
import { OptimisticService } from './common/optimistic.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './common/github-followers.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ArchiveProjectComponent } from './archive-project/archive-project.component';


@NgModule({
  declarations: [
    AppComponent,HelloWorld,AutherInfoComponent,LibariesComponent,AutherComponent,FlatsDetailComponent, AttributeDemoComponent, ClassbindingComponent, EventBindingComponent, StyleBindingComponent, AngularPipeComponent, CustomPipeComponentComponent, CustomSummeryPipePipe, IntercommComponent, TextCamalcasePipe, NgClassBindingComponent, NgcontentComponent, NgContainerComponent, NgifComponent, NgSwichComponent, NgForComponent, NgforDemoComponent, CustomDirectiveDirective, TemplateEventFormComponent, DemoTemplateFormComponent, ReactiveFormComponent, FormArrayComponent, FormBuilderComponent, ChangePasswordComponent, PostComponent, PostServiceComponent, OptimisticComponent, GithubFollowersComponent, NotFoundComponent, HomeComponent, GitHubProfileComponent, NavbarComponent, ArchiveProjectComponent
  ],
  imports: [  
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot([
      {
        path: '',
        component:HomeComponent
      },
      {
        path: 'followers/:login/:id',
        component:GitHubProfileComponent
      },
      {
        path: 'followers',
        component:GithubFollowersComponent
      },
      {
        path: 'post',
        component:OptimisticComponent
      },
      {
        path: 'form',
        component:ReactiveFormComponent
      },
      {
        path: '**',
        component:NotFoundComponent
      },
    ])
  ],
  providers: [CourseService,
    AutherService,
    LibariesService,
    AutherInfoService,
    FlatDetailsService,
    HttpService,
    OptimisticService,
    GithubFollowersService,
  
  {provide:ErrorHandler,useClass:AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
