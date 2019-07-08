import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export  abstract class AbstractDataService {

  constructor() { }

  abstract loadData(q: string): Observable<any>;
}
