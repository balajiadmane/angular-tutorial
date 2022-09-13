import { Component, Input } from "@angular/core";



@Component({
    selector:'app-users',
    templateUrl:'./users.component.html'
})
export class UsersComponent {


    @Input() user:any;
    
    constructor() {

    }
}