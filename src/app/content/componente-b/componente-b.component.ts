import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { pkDetail } from '../pokemonDetail';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.scss']
})
export class ComponenteBComponent implements OnInit {
  url :string = ""
  pokemonDetail: pkDetail = new pkDetail();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pkService : PokemonService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        this.url= params.url;
        this.getDetails(this.url);
      },err =>{console.log(err)}
    )
  }

  getDetails(url:string){
    this.pkService.getPokemonDetails(url).subscribe((res : pkDetail)=>{
      this.pokemonDetail = res
      console.log(this.pokemonDetail)
    })
  }
}
