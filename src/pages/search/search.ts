import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {
cities: any[];
weather: any[];

  constructor(
    public navCtrl: NavController, 
    private weatherProvider: WeatherProvider,
    public navParams: NavParams) {

  }
  
    searchTime(ev){
    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log("val", val);
    
    this.weatherProvider.searchWeather(val)
      .subscribe(cities => {
              console.log(cities);  
              this.cities = cities.RESULTS;
              // Need to pass through RESULTS since that is the name of the array if you just pass cities it will error object-object
         }, error => {
        console.log("error");
      });
    }
}

