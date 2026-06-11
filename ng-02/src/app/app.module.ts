import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // imports directives, pipes, ...
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserInputComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, InvestmentResultsComponent],
})
export class AppModule {

}
