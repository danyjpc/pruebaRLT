import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=20'

  constructor(private http :HttpClient) { }

  getPokemonList(){
    return this.http.get(this.url, httpOptions)
  }
  getPokemonDetails(url){
    return this.http.get(url, httpOptions)
  }
}
