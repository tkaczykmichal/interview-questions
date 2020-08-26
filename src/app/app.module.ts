import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuestionsService } from './state/questions/questions.service';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { FilterTechnologyComponent } from './components/filter-technology/filter-technology.component';
import { FilterTechnologyItemComponent } from './components/filter-technology-item/filter-technology-item.component';
import { QuestionsListItemComponent } from './components/questions-list-item/questions-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    FiltersComponent,
    QuestionsListComponent,
    FilterTechnologyComponent,
    FilterTechnologyItemComponent,
    QuestionsListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
