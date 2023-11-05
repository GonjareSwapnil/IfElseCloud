import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftNavbarComponent } from './features/left-navbar/left-navbar.component';
import { TopNavbarComponent } from './features/top-navbar/top-navbar.component';
import { MainContentComponent } from './features/main-content/main-content.component';
import { TopCardsComponent } from './features/main-content/top-cards/top-cards.component';
import { MainContentService } from './features/main-content/main-content.service';
import { NewUsersComponent } from './features/main-content/new-users/new-users.component';
import { RecentOrdersComponent } from './features/main-content/recent-orders/recent-orders.component';
import { AnalyticsComponent } from './features/main-content/analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    TopNavbarComponent,
    MainContentComponent,
    TopCardsComponent,
    NewUsersComponent,
    RecentOrdersComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    MainContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
