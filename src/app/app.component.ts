import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, delay, distinctUntilChanged, switchMap } from "rxjs";
import { APIService } from "./api.service";
import {
  faBook,
  faUser,
  faContactBook,
  faSearch,
  faTrowel,
  faHamburger,
  faAmbulance,
  faAnchorCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  searchIcon = faSearch;
  faHamburger = faHamburger;

  userIcon= faUser;

  left_nav_lis_item: Array<{ title: string; icon: any,url:string }> = [
    {
      title: "books",
      icon: faBook,
      url:'books'
    },
    {
      title: "Users",
      icon: faUser,
      url:'user'
    },
    {
      title: "test1",
      icon: faTrowel,
      url:'test1'
    },
    {
      title: "test2",
      icon: faAmbulance,
      url:'test2'
    },
    {
      title: "test3",
      icon: faAnchorCircleCheck,
      url:'test3'
    },
  ];

  showLeftNav: boolean = true;

  showAndHideLeftNav() {
    this.showLeftNav = !this.showLeftNav;
  }
}
