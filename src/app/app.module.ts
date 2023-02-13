import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { WorkComponent } from './pages/work/work.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { CardsComponent } from './sharepages/cards/cards.component';
import { DropsComponent } from './sharepages/drops/drops.component';
import { ContactFormComponent } from './sharepages/contact-form/contact-form.component';
import { MainFooterComponent } from './pages/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WorkComponent,
    AchievementsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    DropsComponent,
    ContactFormComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
