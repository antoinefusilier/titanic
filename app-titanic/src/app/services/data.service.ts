import { Injectable } from '@angular/core';

import { Papa } from 'ngx-papaparse';

import { csvDataTrain } from '../data';


@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private papa: Papa) {

    this.papa.parse(csvDataTrain, {
      delimiter: ",",	// auto-detect
      newline: "\r",	// auto-detect
      quoteChar: '"',
      escapeChar: '"',
      header: true,
      transformHeader: undefined,
      dynamicTyping: false,
      preview: 0,
      encoding: "",
      worker: false,
      comments: false,
      step: undefined,
      complete: (result) => {
        console.log('Parsed: ', result.data);
      },
      error: undefined,
      download: false,
      downloadRequestHeaders: undefined,
      // downloadRequestBody: undefined,
      skipEmptyLines: false,
      chunk: undefined,
      // chunkSize: undefined,
      fastMode: undefined,
      beforeFirstChunk: undefined,
      withCredentials: undefined,
      transform: undefined,
      // delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP
    });
  }



  // https://askcodez.com/comment-telecharger-un-fichier-csv-et-de-les-lire-a-laide-de-angular2.html

  // https://stackoverflow.com/questions/55221136/angular-6-get-csv-response-from-httpclient

}
