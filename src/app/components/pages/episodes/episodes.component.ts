import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Episode } from '@app/shared/interfaces/episode.interface';


@Component({
    selector:'app-episode',
    template:`
      <div class="rounded-custom card-grid">
        <div class="">
            <img
              src="assets/img/Imagen-no-found.png"
              [alt]="episode.name"
              class="card-img-top"
            />
        </div>
        <div class="main-tex-car">
          
            <h2>{{ episode.name | slice: 0:15}}</h2>
            <h3 class="text-muted">Episodio: {{ episode.episode }}</h3>
            <h3 class="text-muted">Dato: {{ episode.air_data }}</h3>
            <div type="button" [routerLink]="" class="btn-link-custom">Ver Detalle</div>
          </div>
        </div>`,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class EpisodeComponent{
    @Input() episode:Episode;
}