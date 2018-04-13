# Angular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



1. How to add and remove plugin in ionic?

Add-
$ ionic cordova plugin [<action>] [<plugin>]

$ ionic cordova plugin add cordova-plugin-inappbrowser@latest

Remove-
$ ionic cordova plugin rm cordova-plugin-camera

2. How to run Ionic project on browser?

$ ionic serve

3. How to create model in bootstrap?

<div class="container">
  <h2>Modal Example</h2>
  <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>


4. Can we use multiple time header and footer semantic element in one html?

Yes We can use header footer tag multiple in code but its depends upon to add the header and fotter in one div or another div its depends upon coding.


5. Ranking of style get html?

  1.Using !important
  div{
	background-color:yellow !important;
    color:red !important;
    padding:100px !important;
	}
  2.Inline css -
  style="background-color:black;color:white;padding:20px;"

  3. ID css

    #b{
	background-color:white;color:black;padding:60px;
	}

  4. Class css
	.a{
	background-color:red;color:green;padding:50px;
	}
  5. Element css.

	div{
	background-color:green;color:red;padding:70px;
	}

6. how can we use em unit in css?

Another way of setting the font size is with em values. The size of an em value is dynamic. When defining the font-size property, an em is equal to the size of the font that applies to the parent of the element in question. If you haven't set the font size anywhere on the page, then it is the browser default, which is often 16px. So, by default 1em = 16px, and 2em = 32px. If you set a font-size of 20px on the body element, then 1em = 20px and 2em = 40px. Note that the value 2 is essentially a multiplier of the current em size.

In order to calculate the em equivalent for any pixel value required, you can use this formula:

em = desired element pixel value / parent element font-size in pixels

