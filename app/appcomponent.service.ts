import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService{
 
    constructor( private _http : Http){}
     public _url : string ="https://api.myjson.com/bins/16l7nn";
    getEmployees(){
        return this._http.get(this._url)
              .map((response:Response) => response.json())
    }


   

}