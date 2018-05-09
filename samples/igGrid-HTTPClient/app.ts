import { Component, Injectable, NgModule } from '@angular/core';
import { IgGridComponent } from "../../src/igniteui.angular2";
import { HttpClient, HttpResponse, HttpClientModule, HttpHeaders,  } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Observable } from 'rxjs';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from '../data/product-data';
import { Product } from './product';

declare var jQuery: any;


@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<Product[]> {
        let people$ = this.http
            .get<Product[]>("app/products");
        return people$;
    }

    addProduct(ProductID, ProductName, DealerName, CategoryName, InStock): Observable<Product> {
        let newProduct: Product =  { ProductID, ProductName, DealerName, CategoryName, InStock } as Product;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' });
        return this.http.post<Product>("app/products", newProduct, {"headers": headers});
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

@Component({
    selector: 'my-app',
    templateUrl: "./igGrid-HTTPClientTemplate.html",
    providers: [ProductService]
})
export class AppComponent {
    private gridOptions: IgGrid;
    private id: string;
    private products: Product[] = [];
    errorMessage: string;
    private newId: number;

    constructor(private productService: ProductService) {
        this.productService.getAll().subscribe(
            res => {
                this.products = res;
                this.newId = this.products.length;
            },
            error =>  this.errorMessage = <any>error
        );

        this.id = 'grid1';

        this.gridOptions = {
            autoCommit: true,
            width: "100%",
            height: "400px",
            autoGenerateColumns: false,
            primaryKey: "ProductID",
            columns: [
                { key: "ProductID", headerText: "Product ID", width: "15%", dataType: "number" },
                { key: "ProductName", headerText: "Name", width: "35%", dataType: "string" },
                { key: "DealerName", headerText: "Dealer Name", width: "15%", dataType: "string" },
                { key: "CategoryName", headerText: "CategoryName", width: "25%", dataType: "string" },
                { key: "InStock", headerText: "InStock", width: "15%", dataType: "number" }
            ],
            features: [
                {
                    name: "Updating",
                    editMode: "none",
                    enableAddRow: false,
                    enableDeleteRow: false
                }
            ]
        }
    }

    addProduct(newProductName, newDealerName, newCategoryName, newInStock) {
        this.newId++;
        this.productService.addProduct(this.newId, newProductName, newDealerName, newCategoryName, newInStock)
            .subscribe(product => this.products = []);
    }
}

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, InMemoryWebApiModule.forRoot(ProductData) ],
  declarations: [ AppComponent, IgGridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);