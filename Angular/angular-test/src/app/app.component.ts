import { TitleListService } from './service/title-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  constructor(private titleListService: TitleListService) {}

  ngOnInit(): void {
    this.onGetTitleList();
  }

  onGetTitleList(): void {
    this.titleListService.getTitleList().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting titles')
    );
  }
}
