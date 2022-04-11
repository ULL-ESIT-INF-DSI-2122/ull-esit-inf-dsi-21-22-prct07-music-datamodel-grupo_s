"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleFilter = void 0;
const songCollection_1 = require("../Collectionables/songCollection");
/**
 * Class that filters if a song is a single or not
 */
class SingleFilter {
    constructor(songs) {
        this.songs = songs;
    }
    filter() {
        const songArray = [];
        for (let i = 0; i < this.songs.getColectionlength(); i++) {
            if (this.songs.getnObject(i).getSingle() === true) {
                console.log(this.songs.getnObject(i).getName());
                songArray.push(this.songs.getnObject(i));
            }
        }
        const result = new songCollection_1.SongCollection(songArray);
        return result;
    }
}
exports.SingleFilter = SingleFilter;
