"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const artist_1 = require("./Definitivos-Jerarquia/Principal-Clases/artist");
const groups_1 = require("./Definitivos-Jerarquia/Principal-Clases/groups");
const musicGenre_1 = require("./Definitivos-Jerarquia/Principal-Clases/musicGenre");
const song_1 = require("./Definitivos-Jerarquia/Principal-Clases/song");
const album_1 = require("./Definitivos-Jerarquia/Principal-Clases/album");
const artistCollection_1 = require("./Definitivos-Jerarquia/Collectionables/artistCollection");
const songCollection_1 = require("./Definitivos-Jerarquia/Collectionables/songCollection");
const genreCollection_1 = require("./Definitivos-Jerarquia/Collectionables/genreCollection");
const BadBunny = new artist_1.Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new artist_1.Artist('Bruno', 'Arberto', 'Reggae', 'Touralmundo', '2', 12);
const Iluminati = new groups_1.Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);
const Trap = new musicGenre_1.MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Reggae = new musicGenre_1.MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Chambea = new song_1.Song('Chambea', BadBunny, 5, Trap, '2', 2016015);
const Touralmundo = new album_1.Album('Touralmundo', Iluminati, BadBunny, 2016, Trap, Chambea);
const artistCollection = new artistCollection_1.ArtistsCollection([Bruno, BadBunny]);
const Netflix = new song_1.Song('Netflix', Bruno, 5, Trap, '2', 2016015);
const collection = new songCollection_1.SongCollection([Netflix, Chambea]);
const pruebagenerocol = new genreCollection_1.GenreCollection([Trap, Reggae]);
console.log(artistCollection.getName('BadBunny'));
console.log(artistCollection.getGroup('Iluminati'));
console.log(artistCollection.getGenre('Reggae'));
console.log(artistCollection.getAlbum('Touralmundo'));
console.log(artistCollection.getPublishedSongs('BadBunny'));
console.log(artistCollection.getMonthlyListeners('BadBunny'));
console.log(artistCollection);
const DonDiablo = new artist_1.Artist('Don Diablo', 'Don Diablo', 'House Music', 'Future', '100', 1000000);
artistCollection.addArtist(DonDiablo);
console.log(artistCollection);
console.log();
console.log(collection.getSongAuthor(BadBunny));
console.log();
console.log();
console.log(pruebagenerocol.getGenre('Trap'));
console.log();
console.log();
console.log(artistCollection.getArtist('BadBunny'));
