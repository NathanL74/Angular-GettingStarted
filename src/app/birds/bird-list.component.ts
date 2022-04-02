import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IBird } from "./bird";
import { BirdService } from "./bird.service";

@Component({
    templateUrl : './bird-list.component.html',
    styleUrls : ['./bird-list-component.css']
})

  export class BirdListComponent implements OnInit, OnDestroy {

    pageTitle: string  = 'Bird List';
    imageWidth: number = 250;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    sub!: Subscription; // ! pour dire au compiler TypeScript que cette variable sera valoriser plus tard
    filteredBirds: IBird[] = [];
    birds: IBird[] = [];

    private _listFilter: string = '';

    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      console.log("setter " + value);
      this.filteredBirds = this.performFilter(value);
    }

    constructor(private birdService: BirdService){}

    performFilter(filterBy: string): IBird[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.birds.filter((bird: IBird) => bird.birdName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      // appel du service getBirds
      this.sub = this.birdService.getBirds().subscribe({
        // fonction déclenché quand le service émet une réponse
        next: birds => {
          this.birds = birds;
          this.filteredBirds = this.birds;
        },
        error: err => this.errorMessage = err
      });
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Bird List: ' + message ; 
    }   
}