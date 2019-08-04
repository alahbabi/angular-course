import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GreenDirective } from './directives/green.directive';
import { CopyDirective } from './directives/copy.directive';
import { EvenPipe } from './pipes/even.pipe';
import { AnimationsComponent } from './animations/animations.component';
import { HttpClientExampleComponent } from './http-client-example/http-client-example.component';
import { MyInterceptor } from './interceptors/MyInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    GreenDirective,
    CopyDirective,
    EvenPipe,
    AnimationsComponent,
    HttpClientExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
