import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '99dfe35fcb7de1ee';
  url;

  constructor (public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = '/api/'+this.apiKey+'/conditions/q';
    this.searchUrl = '/search/aq?query=';
  }

  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      // .map(res => res.json());
  }
  
  getLocation(lat, lon) {
    return this.http.get('/api/'+this.apiKey+'/conditions/q/'+lat+','+lon+'/.json')
      // .map(res => res.json());
  }
  
  searchWeather(search: string){
    return this.http.get(this.searchUrl+search);
  }

}
