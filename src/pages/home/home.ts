import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  lat:number;
  lon:number;

 
  constructor(
    public navCtrl: NavController, 
    private weatherProvider:WeatherProvider,
    private storage:Storage,
    private geolocation: Geolocation) {
      
  this.geolocation.getCurrentPosition().then((resp) => {
    this.lat=resp.coords.latitude
    this.lon=resp.coords.longitude
    
      if ( this.lat && this.lon ){
        this.weatherProvider.getLocation(this.lat, this.lon)  .subscribe(weather => {
          console.log(weather);
          this.weather = weather;
        }); 
      }
  });
}

  ionViewWillEnter(){
    }
}
