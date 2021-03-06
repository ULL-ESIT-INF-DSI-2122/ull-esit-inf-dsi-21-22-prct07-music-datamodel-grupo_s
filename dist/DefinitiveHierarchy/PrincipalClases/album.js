"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
/**
 * This class represents the structure of the
 * album objects
 */
class Album {
    /**
     * Creates an album object
     * @param name Album name
     * @param artist Artist name
     * @param yearPublication Album publication year
     * @param genre Album music genre
     * @param songs Album songs
     * @param group Group name
     */
    constructor(name, artist, yearPublication, genre, songs, group) {
        this.name = name;
        this.artist = artist;
        this.yearPublication = yearPublication;
        this.genre = genre;
        this.songs = songs;
        this.group = group;
    }
    /**
     * Gets the album name
     * @return Album name
     */
    getName() {
        return this.name;
    }
    /**
     * Gets a group object
     * @return Group object
     */
    getGroup() {
        return this.group;
    }
    /**
     * Gets an artist object
     * @return Artist Object
     */
    getArtist(ArtistName) {
        for (let i = 0; i < this.artist.length; i++) {
            if (this.artist[i].getName() === ArtistName) {
                return this.artist[i];
            }
        }
        return this.artist[0];
    }
    /**
     * Gets the year publication year
     * @return Album publication year
     */
    getYearPublication() {
        return this.yearPublication;
    }
    /**
     * Gets a music genre object
     * @return Music genre Object
     */
    getGenre(GenreName) {
        // return this.genre;
        for (let i = 0; i < this.genre.length; i++) {
            if (this.genre[i].getName() === GenreName) {
                return this.genre[i];
            }
        }
        return this.genre[0];
    }
    /**
     * Gets a song name
     * @return Song name
     */
    getSongs(song) {
        return this.songs.filter((s) => s.getName() === song.getName());
    }
}
exports.Album = Album;
