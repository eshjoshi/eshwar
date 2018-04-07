import { FormControl, ValidatorFn, AbstractControl,ValidationErrors, Validator } from "@angular/forms";

export class UserValidation {
    
static cannotContainSpace(c:AbstractControl):ValidationErrors | null {
        if((c.value as string).indexOf(' ') != -1 )
           return {cannotContainSpace:true };     
             
        return null;

    }

    static uniqueUserName(c:AbstractControl) {
       
        return new Promise(resolve=>{
            setTimeout(() =>{
                if(c.value === 'eswar' )
                    resolve({uniqueUserName:true });
                else     
                    resolve(null);
            },2000 );
        });
    }

    static validOldPassword(oldPasswordControl:AbstractControl) {
       
        return new Promise(resolve=>{
                  if(oldPasswordControl.value === '1234' )
                    resolve({invalidPassword:true });
                else     
                    resolve(null);
           
        });
    }

    static passwordsShouldMatch(control: AbstractControl){

        let newPassword = control.get('newPassword');
        let cnfPassword = control.get('confirmPassword');

        if (newPassword.value !== cnfPassword.value)
            return {passwordsShouldMatch: true};

        return null;    
    }

}

