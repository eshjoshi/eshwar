import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCamalcase'
})
export class TextCamalcasePipe implements PipeTransform {

  transform(value: string, args?: number) {

    if(!value)
    return null;
   
   // return value.
    return value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));

  //  let word  =[];
  //  let prep = ["of","the"];
  //  word = value.split(' ');
  //  for(let i = 0 ; i < word.length ; i++){
  //   //  console.log(word[i] as string);
  //     if(prep.includes(word[i]))
  //        word.push((word[i] as string).toLowerCase());
  //        else       
  //         word.push(((<string>word[i]).substr(0,1).toUpperCase()+word[i].substr(1).toLowerCase()));
   
  //  }
  //   console.log(word.join(' '));
  //  return word.join(' ');
   }

}
