import { CourseService } from './service/course.service';
import {Component} from '@angular/core'

@Component({
    selector:'hello-world',
    template:`<h1> my Hello World progrm<h1>
            <ul>
            <li *ngFor="let course of courses">
            {{course}}
            </li>
            </ul>
            `
})
export class HelloWorld{

courses ;
constructor(private courseService: CourseService){
    this.courses = courseService.getCourses();
}


}