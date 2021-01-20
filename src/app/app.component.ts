import { Component, OnInit } from '@angular/core';
import { ProductListService } from './productList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Product List';
  productsAvailables: any = [];
  showProductDetail: boolean = false;
  prodId: number;
  showToast: boolean = false;
  toastMessage: string = "Product Added Successfully";

  constructor(private productListService: ProductListService){

  }

  ngOnInit(){
    this.getPostList();
  }

  //init carga de elementos del servicio
  getPostList(){
    this.productListService.getProductListService()
      .subscribe((res)=>{
        this.productsAvailables = [...res];
    })
  }

  //click view element
  viewDetails(id: number){
    //tomar el id y redirigir a la pantalla de detalle
    this.prodId = id;
    this.showProductDetail = true;
  }

  addToCart(){
    //show toaster
    this.showToast = true;
    // 7 seconds close toast
    setTimeout(()=>{
      this.showToast = false;
    }, 7000);
  }


}
