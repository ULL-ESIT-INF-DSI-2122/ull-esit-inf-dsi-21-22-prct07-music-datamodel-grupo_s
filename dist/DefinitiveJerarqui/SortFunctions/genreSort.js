"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreSort = void 0;
const abstractSort_1 = require("./abstractSort");
const genreCollection_1 = require("../Collectionables/genreCollection");
class GenreSort extends abstractSort_1.GeneralSort {
    constructor(genreList) {
        super();
        this.genreList = genreList;
    }
    greaterSort() {
        const greaterGenreSort = [];
        let auxiliary = [];
        for (let i = 0; i < this.genreList.getColectionlength(); i++) {
            auxiliary.push(this.genreList.getnObject(i));
        }
        for (let i = 0; i < auxiliary.length; i++) {
            greaterGenreSort.push(auxiliary[i].getName());
        }
        greaterGenreSort.sort();
        auxiliary = [];
        for (let i = 0; i < this.genreList.getColectionlength(); i++) {
            auxiliary.push(this.genreList.getGenre(greaterGenreSort[i]));
        }
        console.log(greaterGenreSort);
        const result = new genreCollection_1.GenreCollection(auxiliary);
        return result;
    }
    lowerSort() {
        const greaterGenreSort = [];
        let auxiliary = [];
        for (let i = 0; i < this.genreList.getColectionlength(); i++) {
            auxiliary.push(this.genreList.getnObject(i));
        }
        for (let i = 0; i < auxiliary.length; i++) {
            greaterGenreSort.push(auxiliary[i].getName());
        }
        greaterGenreSort.sort().reverse();
        auxiliary = [];
        for (let i = 0; i < this.genreList.getColectionlength(); i++) {
            auxiliary.push(this.genreList.getGenre(greaterGenreSort[i]));
        }
        console.log(greaterGenreSort);
        const result = new genreCollection_1.GenreCollection(auxiliary);
        return result;
    }
}
exports.GenreSort = GenreSort;
