/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import {GeneralSort} from './abstractSort';
import {Album} from '../PrincipalClases/album';

export class AlbumSort extends GeneralSort<Album> {
  constructor(protected album: Album[]) {
    super();
  }
  greaterSort(): Album[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.album.length; i++) {
      auxiliary.push(this.album[i].getName());
    }
    auxiliary.sort();
    let result: Album[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.album.length; j++) {
        if (this.album[j].getName() === auxiliary[i]) {
          result.push(this.album[j]);
        }
      }
    }

    return result;
  }
  lowerSort(): Album[] {
    let auxiliary: string[] = [];
    for (let i = 0; i < this.album.length; i++) {
      auxiliary.push(this.album[i].getName());
    }
    auxiliary.sort().reverse();
    let result: Album[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.album.length; j++) {
        if (this.album[j].getName() === auxiliary[i]) {
          result.push(this.album[j]);
        }
      }
    }

    return result;
  }
}