import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RepolistComponent } from './repolist/repolist.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HeaderComponent } from './header/header.component';
import { RepolistLoaderComponent } from './repolist-loader/repolist-loader.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UserProfileLoaderComponent } from './user-profile-loader/user-profile-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserProfileComponent,
    RepolistComponent,
    PaginationComponent,
    HeaderComponent,
    RepolistLoaderComponent,
    UserProfileLoaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
