import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { SalesWeekComponent } from './components/sales-week/sales-week.component';
import { BenefitWeekComponent } from './components/benefit-week/benefit-week.component';
import { PredictedSalesComponent } from './components/predicted-sales/predicted-sales.component';
import { PortadaComponent } from './components/portada/portada.component';
import { CentroComponent } from './components/centro/centro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortadaComponent,
    CentroComponent,
    TopProductsComponent,
    SalesWeekComponent,
    BenefitWeekComponent,
    PredictedSalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
