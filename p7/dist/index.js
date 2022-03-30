"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const artist_1 = require("../src/Definitivos-Jerarquia/Principal-Clases/artist");
const groups_1 = require("../src/Definitivos-Jerarquia/Principal-Clases/groups");
const musicGenre_1 = require("../src/Definitivos-Jerarquia/Principal-Clases/musicGenre");
const song_1 = require("../src/Definitivos-Jerarquia/Principal-Clases/song");
const album_1 = require("../src/Definitivos-Jerarquia/Principal-Clases/album");
const artistCollection_1 = require("../src/Definitivos-Jerarquia/Collectionables/artistCollection");
const BadBunny = new artist_1.Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new artist_1.Artist('Bruno', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Iluminati = new groups_1.Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);
const Trap = new musicGenre_1.MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Reggae = new musicGenre_1.MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
const Chambea = new song_1.Song('Chambea', BadBunny, 5, Trap, '2', 2016015);
const Touralmundo = new album_1.Album('Touralmundo', Iluminati, BadBunny, 2016, Trap, Chambea);
const artistCollection = new artistCollection_1.ArtistsCollection([BadBunny, Bruno]);
console.log(artistCollection.getName('Bruno'));
console.log(artistCollection.getName('BadBunny'));
