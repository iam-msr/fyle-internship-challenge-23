import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { RepolistComponent } from './repolist/repolist.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UserDetailsComponent } from './user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    RepolistComponent,
    PaginationComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
