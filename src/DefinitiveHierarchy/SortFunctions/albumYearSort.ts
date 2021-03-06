/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import {GeneralSort} from './abstractSort';
import {Album} from '../PrincipalClases/album';

/**
 * Class that sorts albums objects by year
 */
export class AlbumYearSort extends GeneralSort<Album> {
  /**
   * Recieves an album array
   */
  constructor(protected album: Album[]) {
    super();
  }
  /**
   * Ascendent ordenation of the album by year
   * @returns Album array with sorted album by year
   */
  greaterSort(): Album[] {
    let auxiliary: number[] = [];
    for (let i = 0; i < this.album.length; i++) {
      auxiliary.push(this.album[i].getYearPublication());
    }
    auxiliary.sort();
    let result: Album[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.album.length; j++) {
        if (this.album[j].getYearPublication() === auxiliary[i]) {
          result.push(this.album[j]);
        }
      }
    }

    return result;
  }
  /**
   * Descendent ordenation of the album by year
   * @returns Album array with sorted album by year
   */
  lowerSort(): Album[] {
    let auxiliary: number[] = [];
    for (let i = 0; i < this.album.length; i++) {
      auxiliary.push(this.album[i].getYearPublication());
    }
    auxiliary.sort().reverse();
    let result: Album[] = [];
    for (let i = 0; i < auxiliary.length; i++) {
      for (let j = 0; j < this.album.length; j++) {
        if (this.album[j].getYearPublication() === auxiliary[i]) {
          result.push(this.album[j]);
        }
      }
    }

    return result;
  }
}
