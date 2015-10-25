/**
 * Created by jagaa on 10/25/15.
 */

///<reference path="../../typings/angular2-meteor.d.ts" />

import{Component, View, bootstrap} from 'angular2/angular2'

@Component({
    selector: 'app'
})

@View({
    templateUrl: 'client/views/app.html'
})

class StartApp{
    greeting: String;
    constructor(){
        this.greeting ="Taivan";
        console.log('starting');
    }
}

bootstrap(StartApp);