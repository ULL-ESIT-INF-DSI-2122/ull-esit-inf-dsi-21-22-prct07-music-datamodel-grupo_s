"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAlbumCollection = void 0;
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
/**
 * Album data base class
 */
class JsonAlbumCollection {
    /**
     * Creates the JSON file that contains the album data base
     * @param albumItems Album array
     */
    constructor(albumItems) {
        this.database = (0, lowdb_1.default)(new FileSync_1.default("JsonFiles/Album.json"));
        this.database.set("Album", albumItems).write();
    }
    /**
     * Adds new entries to the album data
     * @param albumItem Album object
     */
    restart(albumItem) {
        this.database.set("Album", albumItem).write();
    }
}
exports.JsonAlbumCollection = JsonAlbumCollection;
