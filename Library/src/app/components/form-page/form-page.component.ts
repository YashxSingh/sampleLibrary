import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Library } from 'src/app/model/library.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  constructor(private libraryService:LibraryService,private router:Router) { }

  library:Library;

  ngOnInit(): void {
  }

  onLibrarySubmit(libraryform:NgForm){
    console.log(libraryform.value.name);
    console.log(libraryform.value.book_name);
    console.log(libraryform.value.issue_date);
    this.library={
      name:libraryform.value.name,
      book_name:libraryform.value.book_name,
      issue_date:libraryform.value.issue_date
    }

    this.libraryService.postLibrary(this.library).subscribe();
    this.router.navigateByUrl("/all-books")

    
  }
}
