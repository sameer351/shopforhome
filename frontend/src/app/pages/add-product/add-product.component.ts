import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInfo } from 'src/app/models/productInfo';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:ProductInfo;
  constructor(
    private productService: ProductService,
    private router: Router) { 
      this.product=new ProductInfo();
    }
  ngOnInit() {
  }

  onSubmit() {
    this.productService.create(this.product).subscribe(u => {
      this.router.navigate(['/seller/product']);
    },
        e => {});
  }
}
