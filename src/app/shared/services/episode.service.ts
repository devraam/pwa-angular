import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';

import { Episode } from '@shared/interfaces/episode.interface';
import { environment } from '@environment/environment';
import { TrackHttpError } from '@shared/models/trackHttpError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(private http: HttpClient) {}

  searchEpisodes(query = '', page = 200):Observable<Episode[] | TrackHttpError> {
    const filter = `${environment.baseUrlAPI}episode/?name=${query}&page=${page}`;
    return this.http.get<Episode[]>(filter)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }

  getDetailsEpisode(id: number) {
    return this.http.get<Episode>(`${environment.baseUrlAPI}episode/${id}`)
    .pipe(catchError((err) => this.handleHttpError(err)));
  }


  private handleHttpError(
    error:HttpErrorResponse
  ):Observable<TrackHttpError>{

    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrienving data.';
    return throwError(dataError);
  }
}
