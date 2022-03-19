import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from "./product";

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string  = 'Product Detail';
  product: IProduct | undefined; // product sera undefined tant qu'on lui ajoute pas de data

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
