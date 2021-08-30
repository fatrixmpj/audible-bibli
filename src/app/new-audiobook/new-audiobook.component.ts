import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { IBook } from '../book';
import { BookService } from '../home/books.service';

interface Audiobooks {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-audiobook',
  templateUrl: './new-audiobook.component.html',
  styleUrls: ['./new-audiobook.component.scss']
})
export class NewAudiobookComponent implements OnInit {
  // postAudiobook: IBook[];
  newBookResponse;

  constructor(private router: Router, private bookService: BookService) { }


  newAudiobook = new FormGroup({
    title: new FormControl(''),
    series: new FormControl(''),
    account: new FormControl('')
  })

  ngOnInit(): void {
  }

  audiobooks: Audiobooks[] = [
    {value: 'de', viewValue: 'audible.de'},
    {value: 'us', viewValue: 'audible.com'},
    {value: 'uk', viewValue: 'audible.co.uk'},
    {value: 'aus', viewValue: 'audible.com.au'},
    {value: 'ca', viewValue: 'audible.ca'},
    {value: 'fr', viewValue: 'audible.fr'},
    {value: 'no', viewValue: 'Zurückgegeben'},
  ];

  onBack() {
    this.router.navigateByUrl('/home')
  }

  onSave() {

    var postAudiobook = new IBook();
    postAudiobook.title = this.newAudiobook.value.title;
    postAudiobook.series = this.newAudiobook.value.series;
    postAudiobook.account = this.newAudiobook.value.account;

    switch (this.newAudiobook.value.account) {
      case "no":
        postAudiobook.deleted = true;
        break;
      default:
        postAudiobook.deleted = false;
        break;
    }

    console.log(postAudiobook.account, " , ", postAudiobook.deleted);

    this.bookService.newBook(postAudiobook).subscribe();

    this.newBookResponse = this.bookService.bookServiceError;

  }

}
