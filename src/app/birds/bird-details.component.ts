import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBird } from "./bird";

@Component({
  templateUrl: './bird-details.component.html',
  styleUrls: ['./bird-details.component.css']
})
export class BirdDetailsComponent implements OnInit {
  pageTitle: string  = 'Bird Detail';
  bird: IBird | undefined; // bird sera undefined tant qu'on lui ajoute pas de data

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
  }

  onBack(): void{
    this.router.navigate(['/birds']);
  }

}
