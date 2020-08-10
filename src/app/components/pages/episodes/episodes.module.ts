import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule} from 'ngx-infinite-scroll';

import { EpisodeListComponent } from '@episodes/episode-list/episode-list.component';
import { EpisodeDetailsComponent } from '@episodes/episode-details/episode-details.component';
import { EpisodeComponent } from '@episodes/episodes.component';


const myComponents = [
  EpisodeDetailsComponent, 
  EpisodeListComponent, 
  EpisodeComponent
];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  exports: [...myComponents],
})
export class EpisodesModule {}
