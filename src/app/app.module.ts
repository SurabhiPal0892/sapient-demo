import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ScrollingModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
