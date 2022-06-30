import { Injectable } from '@angular/core';

import { Papa } from 'ngx-papaparse';

import { csvDataTrain } from '../data';


@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private papa: Papa) {


  }

  getData(){
    return this.papa.parse(csvDataTrain, {
      delimiter: "",	// auto-detect
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
        // console.log('Parsed: ', result.data);
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
  generateDocId(length: number) {
    var chain = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var password = "";
    var lgt = length;

    // Condition afin de définir un password de 10 caratère si le paramètre de la fonction randomPassword()n'a pas été défini
    if (!lgt) {
      lgt = 10;
    }

    for (let i = 0; i < lgt; i++) {

      // Ou charAt returne le caractère de la position demandé par le paramètre
      // Ou Math.floor() renverra un entier, permet de controler et éviter les nombre décimaux
      // Ou Math.random() renverra un nombre entier de façon "random" compris entre 0 et le * max(défini ci-dessous)
      // Ou chain.length défini le Max du Math.random
      password = password.concat(chain.charAt(Math.floor(Math.random() * chain.length)));

    }
    return password;
  }


  // https://askcodez.com/comment-telecharger-un-fichier-csv-et-de-les-lire-a-laide-de-angular2.html

  // https://stackoverflow.com/questions/55221136/angular-6-get-csv-response-from-httpclient

}
