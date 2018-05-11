import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Observable} from 'rxjs/Observable';
import { AppError } from "./error-apperror";
import { NotFoundError } from "./error.notfound";
import { BadInputError } from "./error.badinput";
@Injectable()
export class DataService{

 Posts:any[];
    
 constructor(private url:string,private http: Http){

}

getAll(){
return this.http.get(this.url).map(res => res.json()).
catch(this.handleError) ;

}

create(requestBody){
 return this.http.post(this.url,JSON.stringify(requestBody)).map(res=>res.json()).
 catch(this.handleError);
}

update(requestBody){
 return this.http.patch(this.url+'/'+requestBody.id, JSON.stringify({title:"eswar"}))
 .map(res=>res.json()).
 catch(this.handleError);
}

delete(id){
 return this.http.delete(this.url+'/'+id).map(res=>res.json()).
 catch(this.handleError);
}

private handleError(error){
    if (error.status === 404) {
       return Observable.throw(new NotFoundError(error));

    } else if(error.status === 400){
            return Observable.throw(new BadInputError(error));
        
    }
   
    return  Observable.throw(new AppError(error));
}
}
