import { variable } from '@angular/compiler/src/output/output_ast';
import { Component,Input } from '@angular/core';
import products from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCart';
  @Input() selected: any = "";
  public productList:{p_name:string, p_id:string}[] = products;
  
  public selectedList:any = "";

  SelectedRow = function(event:any){
    var s1= event.target.value;
    console.log("Selected Value : "+s1)

}
}
