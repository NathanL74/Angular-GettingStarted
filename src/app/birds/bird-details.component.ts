import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBird } from "./bird";
import { BirdService } from './bird.service';

@Component({
  templateUrl: './bird-details.component.html',
  styleUrls: ['./bird-details.component.css']
})
export class BirdDetailsComponent implements OnInit {
  pageTitle: string  = 'Bird Detail';
  errorMessage = '';
  bird: IBird | undefined; // bird sera undefined tant qu'on lui ajoute pas de data

  constructor(private route: ActivatedRoute,
              private router: Router,
              private birdService: BirdService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.pageTitle += ` ${id}`;
      this.getBird(id);
    }
  }

  getBird(id: number): void {
    this.birdService.getBird(id).subscribe({
      next: bird => this.bird = bird,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void{
    this.router.navigate(['/birds']);
  }

}
