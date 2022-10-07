import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/model/library.model';
import { LibraryService } from 'src/app/service/library.service';

@Component({
  selector: 'app-all-books-issued',
  templateUrl: './all-books-issued.component.html',
  styleUrls: ['./all-books-issued.component.css']
})
export class AllBooksIssuedComponent implements OnInit {

  libraryArray:Library[];
  constructor(private libraryService:LibraryService) {

   }

  ngOnInit(): void {
    this.libraryService.getLibrary().subscribe(
      data=>{
        this.libraryArray=data;
      }
    )
  }

}
