import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { Observable } from 'rxjs';

import { TrackHttpError } from '@shared/models/trackHttpError';
import { EpisodeService } from '@shared/services/episode.service';
import { Episode } from '@shared/interfaces/episode.interface';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {
  episode$: Observable<Episode | TrackHttpError>;

  constructor(private route:ActivatedRoute, private episodeSvc:EpisodeService, private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.episode$ = this.episodeSvc.getDetailsEpisode(id);
    });
  }

  onGoBack():void{
    this.location.back();
  }

}
