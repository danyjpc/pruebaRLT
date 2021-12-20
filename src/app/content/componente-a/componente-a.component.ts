import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.scss']
})
export class ComponenteAComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'action'];
  pokemonList: string [] = []
  constructor(private pkService : PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.pkService.getPokemonList().subscribe((res : any)=>{
      this.pokemonList = res.results
      console.log(this.pokemonList)
    })
  }

  redirect(value){
    this.router.navigate(['content2',value]);
  }

}
