import { HttpClient } from '@angular/common/http'
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { debounceTime, delay, distinctUntilChanged, switchMap } from 'rxjs'
import { APIService } from './api.service'
import { faBook,faUser,faContactBook, faSearch, faTrowel, faHamburger ,faAmbulance,faAnchorCircleCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  
  searchIcon = faSearch;
  faHamburger = faHamburger;

  left_nav_lis_item:Array<{title:string,icon:any}> = [
    {
      title:'books',
      icon:faBook
    },
    {
      title:'Users',
      icon:faUser
    },
    {
      title:'test1',
      icon:faTrowel
    },
    {
      title:'test2',
      icon:faAmbulance
    },
    {
      title:'test3',
      icon:faAnchorCircleCheck
    }
  ]


  showLeftNav:boolean = true;

  showAndHideLeftNav() {
    this.showLeftNav = !this.showLeftNav;
  }
}
