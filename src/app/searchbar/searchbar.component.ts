import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ApiServiceService } from '../../services/api-service.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit, OnDestroy {

  constructor(private apiService: ApiServiceService, private fb: FormBuilder) { 
    this.searchFormGroup = this.fb.group({
      searchText: ['', Validators.required]
    })
  }

  @Input()  searchText: string = "";
  @Output() searchTextChange = new EventEmitter<string>();

  searchFormGroup: FormGroup;

  searchSubmit() {
    let text = this.searchFormGroup.controls["searchText"].value;
    console.log(text);
    
    this.apiService.GetQuery(text).subscribe((res)=> {
        this.apiService.changeResult(res); 
        this.result = (res as any).docs;
    });
  }

  result: any[] = [];

  ngOnInit(): void {
    
    this.apiService.GetQuery("the lord of the rings").subscribe((res)=> {
        this.apiService.changeResult(res); 
        this.result = (res as any).docs;
    });
    
  }

  ngOnDestroy(): void {
    console.log('cleaning up')
  }

}
