import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';


@Component({
    selector:'app-character',
    template:`
      <div class="rounded-custom card-grid">
        <div class="">
            <img
              [src]="character.image"
              [alt]="character.name"
              class="card-img-top"
            />
        </div>
       
        <div class="main-tex-card">
          <h2>{{ character.name | slice: 0:15}}</h2>
          <h3 class="">{{ character.gender}}</h3>
          <h3 class="text-muted">Especie: {{ character.species }}</h3>          
          <div type="button" [routerLink]="['/character-details', character.id]" class="btn-link-custom">Ver Detalle</div>
        </div>
        </div>
        `,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class CharacterComponent{
    @Input() character:Character;
}