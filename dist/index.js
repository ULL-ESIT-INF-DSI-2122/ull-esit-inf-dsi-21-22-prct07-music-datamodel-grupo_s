"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
// import {SongDurationSort} from './Definitivos-Jerarquia/SortFunctions/durationSongSort';
// const Iluminati = new Group('Iluminati', BadBunny, 2016, 'Reggae', 'Touralmundo', 12);
// const Trap = new MusicGenre('Trap', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
// const Reggae = new MusicGenre('Reggae', Iluminati, BadBunny, 'Touralmundo', 'Chambea');
// // eslint-disable-next-line no-unused-vars
// // const Touralmundo = new Album('Touralmundo', Iluminati, BadBunny, 2016, Trap, Chambea);
// const genreCollectionOBJ = new GenreCollection([Trap, Reggae]);
// // SONG COLLECTION
// const Chambea = new Song('Chambea', BadBunny, '5:30', Trap, true, 2016015);
// const Netflix = new Song('Netflix', Bruno, '5:10', Trap, false, 2016010);
// const ThisFeeling = new Song('This Feeling', Bruno, '5:20', Trap, true, 2016015);
// const ALV = new Song('ALV', Bruno, '5:40', Trap, true, 2016015);
// const songCollectionOBJ = new SongCollection([Netflix, ThisFeeling, Chambea, ALV]);
// // ALBUM COLLECTION
// const albumOBJ = new Album('ALV', Iluminati, BadBunny, 2001, Trap, [ALV, Chambea]);
// const albumOBJ1 = new Album('ErPepe', Iluminati, BadBunny, 2001, Trap, [ALV, Chambea]);
// const albumSortOBJ = new AlbumSort([albumOBJ, albumOBJ1]);
/** ********** NO BORREN ESTO ************/
const artist_1 = require("./DefinitiveHierarchy/PrincipalClases/artist");
const artistCollection_1 = require("./DefinitiveHierarchy/Collectionables/artistCollection");
const jsonTodoCollection_1 = require("./InquirerFiles/jsonTodoCollection");
const process_1 = require("process");
// Artist objects
const BadBunny = new artist_1.Artist('BadBunny', 'Iluminati', 'Reggae', 'Touralmundo', '2', 12);
const Bruno = new artist_1.Artist('Bruno', 'Arberto', 'Reggae', 'Touralmundo', '2', 12);
const artistCollectionOBJ = new artistCollection_1.ArtistsCollection([Bruno, BadBunny]);
const collectionArtists = new jsonTodoCollection_1.JsonTodoCollection([Bruno, BadBunny]);
function displayTodoList() {
    console.log(`ARTIST COLLECTION`);
    for (let i = 0; i < collectionArtists.getArtistsCollectionLength(); i++) {
        console.log(collectionArtists.getArtistList(i));
    }
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Artist";
    Commands["Toggle"] = "Artist Added Default";
    Commands["Purge"] = "Remove New Added Artists";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    let ArtistName = ``;
    let groupName = ``;
    let genre = ``;
    let album = ``;
    let publishedSongs = ``;
    let monthlyListeners = 0;
    inquirer.prompt({ type: "input", name: "ArtistName", message: "Enter Artist Name:" })
        .then((answers) => {
        ArtistName = answers["ArtistName"];
    });
    inquirer.prompt({ type: "input", name: "GroupName", message: "Enter Group Name:" })
        .then((answers) => {
        groupName = answers["GroupName"];
    });
    inquirer.prompt({ type: "input", name: "Genre", message: "Enter The Genre:" })
        .then((answers) => {
        genre = answers["Genre"];
    });
    inquirer.prompt({ type: "input", name: "Album", message: "Enter Album Name:" })
        .then((answers) => {
        album = answers["Album"];
    });
    inquirer.prompt({ type: "input", name: "PublishedSongs", message: "Enter the number of published songs:" })
        .then((answers) => {
        publishedSongs = answers["PublishedSongs"];
    });
    inquirer.prompt({ type: "input", name: "monthlyListeners", message: "Enter the number of listeners:" })
        .then((answers) => {
        monthlyListeners = answers["monthlyListeners"];
    });
    collectionArtists.addArtist(new artist_1.Artist(ArtistName, groupName, genre, album, publishedSongs, monthlyListeners));
    promptUser();
}
function promptDefault() {
    console.clear();
    console.log(`ARTIST DEFAULT COLLECTION`);
    for (let i = 0; i < collectionArtists.getArtistsCollectionLength(); i++) {
        console.log(collectionArtists.getArtistList(i));
    }
    inquirer.prompt({ type: "input", name: "Continue", message: "¿ Desea volver a la pantalla principal ? (S/N): " })
        .then((answers) => {
        /* while (answers["Continue"] !== 'S' && answers["Continue"] !== 'N') {
          inquirer.prompt({type: "input", name: "Continue", message: "¿ Desea volver a la pantalla principal ? (S/N): "});
        }*/
        if (answers["Continue"] === "S") {
            promptUser();
        }
        else {
            (0, process_1.exit)();
        }
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
    }).then((answers) => {
        switch (answers["command"]) {
            case Commands.Toggle:
                promptDefault();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Purge:
                promptUser();
                break;
            case Commands.Quit:
                console.clear();
                console.log(`<< Program Exit >>`);
                (0, process_1.exit)();
                break;
        }
    });
}
promptUser();
