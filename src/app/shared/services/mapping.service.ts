import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MappingService {

  constructor() { }

  GetMappingTemplates()
  {
    return of()
  }
}