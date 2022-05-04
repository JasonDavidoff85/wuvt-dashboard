import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DjComponent } from './dj/dj.component';
import { ListenerComponent } from './listener/listener.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { StreamControlsComponent } from './stream-controls/stream-controls.component';
import { ChatComponent } from './chat/chat.component';
import { WeatherComponent } from './weather/weather.component';
import { LastPlayedComponent } from './last-played/last-played.component';
import { PsaComponent } from './psa/psa.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { SendMessageComponent } from './send-message/send-message.component';
import { AddPSAComponent } from './add-psa/add-psa.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    AppComponent,
    DjComponent,
    ListenerComponent,
    NowPlayingComponent,
    StreamControlsComponent,
    ChatComponent,
    WeatherComponent,
    LastPlayedComponent,
    PsaComponent,
    SendMessageComponent,
    AddPSAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    ScrollingModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    IvyCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
