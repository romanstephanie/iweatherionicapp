import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
import { SearchPage } from '../search/search';

/**
 * Generated class for the FavoritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
 weather: any;
 favorites: any[];
 favorite: any[];
// location:{
//   city:string,
//   state: string,
// }
  

  constructor(public navCtrl: NavController, 
    private weatherProvider:WeatherProvider,
    public navParams: NavParams,
    private storage: Storage) {
  }
  
  ionViewWillEnter(){
  }
  
  // DidLoad fires after it is rendered- check lifecycle hooks
  ionViewDidLoad(){
    
    this.storage.get('favorites').then((val) => {
      if (val != null){
        console.log(val);
        this.favorites = val;
      }
    });
  }
  
  viewFavorite(favorite) {
    this.weather = favorite;
  }
  
}