# Práctica 7 - Digitalizando la colección de música de los abuelos

## Tareas Previas

1. Aceptar la asignación de GitHub Classroom asociada a esta práctica.
2. Aprender a utilizar los módulos Inquirer.js y Lowdb.
3. Incluir documentación mediante el uso de TypeDoc y adoptar una metodología de desarrollo dirigido por pruebas/comportamiento.
4. Tratar de respetar los principios SOLID de diseño orientado a objetos.
5. Hacer uso durante el desarrollo de todas las herramientas relacionadas con el cubrimiento del código (Coveralls), integración contínua (Github Actions) y calidad del código (Sonar Cloud).

## Introducción

En esta práctica, la primera grupal de la asignatura, tendrá que llevar a cabo un diseño orientado a objetos del modelo de datos de un sistema de información que permita almacenar una biblioteca de música. Esta biblioteca de música debe guardar una serie de canciones, géneros musicales, albums, grupos y artistas donde cada elemento tiene sus atributos correspondientes; toda está información se tendrá que guardar en una playlist. En las playlists existentes en la biblioteca los usuarios van a poder visualizar toda la información asociada a una playlist, como lo son el nombre de la playlist, los géneros incluidos y la duración de dicha playlist en horas, minutos y segundos. En la playlist también se debería navegar por está para ver las canciones que se incluyen en está siguiendo una serie de criterios para ordenar la información y por último un usuario debería poder crear alguna playlist y borrar su propia playlist.

## Implementación de las Clases Principales

En está primera parte se comentará todo lo relacionada con la implementación que se ha elegido para realizar la biblioteca de música que se pretende conseguir.

Antes de empezar podemos observar todo el contenido del directorio ```src``` donde se encuentra todo nuestro código. Podemos ver 3 directorios principales, por un lado tenemos el directorio ```DefinitiveHierarchy``` donde se encuentran las clases base del proyecto, por otro lado el directorio ```GestorClass``` donde se encuentra la clase gestor y por último el directorio ```InquirerFiles``` donde se encuentra todo lo relacionado con Inquirer.

```
📦src
 ┣ 📂DefinitiveHierarchy
 ┃ ┣ 📂Collectionables
 ┃ ┣ 📂PrincipalClases
 ┃ ┗ 📂SortFunctions
 ┣ 📂GestorClass
 ┣ 📂InquirerFiles
```

### Jerarquía de Clases 

En el directorio de ```DefinitiveHierarchy``` se encuentran las clases base, donde nos encontramos con las clases principales, las colecciones y las clases que definen las distintas ordenaciones.

#### Clases Principales

Las clases Principales las encontramos en el directorio ```PrincipalClases``` y son las siguientes:

```
📦DefinitiveHierarchy
 ┣ 📂Collectionables
 ┣ 📂PrincipalClases
 ┃ ┣ 📜album.ts
 ┃ ┣ 📜artist.ts
 ┃ ┣ 📜groups.ts
 ┃ ┣ 📜musicGenre.ts
 ┃ ┣ 📜playlist.ts
 ┃ ┗ 📜song.ts
 ┗ 📂SortFunctions
```

Las principales clases se encuentran en los ficheros ```album.ts```, ```artist.ts```, ```groups.ts```, ```musicGenre.ts```, ```playlist.ts``` y ```song.ts```. La clase base dentro de este directorio es ```Artist```, ya que todas las demás clases van a utilizar objectos de tipo ```Artist``` para algunos de sus atributos. 

La jerarquía quedaría de la siguiente manera:

```
Clase base
📜artist.ts

📜musicGenre.ts
 ┣ 📜artist.ts
 ┣ 📜groups.ts

📜song.ts
 ┣ 📜musicGenre.ts
 ┣ 📜artist.ts

📜album.ts
 ┣ 📜artist.ts
 ┣ 📜groups.ts
 ┣ 📜musicGenre.ts
 ┣ 📜song.ts

📜playlist.ts
 ┣ 📜artist.ts
 ┣ 📜groups.ts
 ┣ 📜musicGenre.ts
 ┣ 📜song.ts

Leyenda:
📜clase_que_usa_el_objeto
 ┣ 📜tipo_del_objeto_que_usa_la_clase
```

Los atributos se van a representar usando la siguiente tabla: 

|   Clases   |   Atributo   |      Atributo       |       Atributo        |        Atributo         |       Atributo         |         Atributo             |
|------------|--------------|---------------------|-----------------------|-------------------------|------------------------|------------------------------|
| Artist     | name: string | group: string       | genre: string         | album: string           | publishedSongs: string | monthlyListeners: number     |
| Group      | name: string | artists: Artist     | genre: string         | albums: string          | yearCreation: number   | monthlyListener: number      |
| MusicGenre | name: string | artists: Artist     | groups: Group         | albums: string          | songs: string          |                              |
| Song       | name: string | author: Artist      | genre: MusicGenre     | songDuration: string    | single: boolean        | reproductionsNumber: number  |
| Album      | name: string | artists: Artist     | genre: MusicGenre     | yearPublication: number | songs: ```Song[]```    | groups: Group                |
| Playlist   | name: string | songs: ```Song[]``` | genre: MusicGenre     | duration: number        |                        |                              |

Algunos atributos interesantes son ```songs: Song[]``` y ```single: boolean```. Los atributos ```songs``` son basicamente una array de objetos de tipos ```Song```, ya que en las clases ```Playlist``` y ```Album``` necesitan un conjunto de objetos de tipo ```Song```. El atríbuto ```single``` indica si una canción es un single o pertence a algún album, basicamente se va a usar un booleano que indica ```true``` si la canción es un single y ```false``` si el single pertenece a un album.

#### Colecciones

Las colecciones las encontramos en el directorio ```Collectionables``` y son las siguientes:

```
📦DefinitiveHierarchy
 ┣ 📂Collectionables
 ┃ ┣ 📜artistCollection.ts
 ┃ ┣ 📜basicstreamablecollection.ts
 ┃ ┣ 📜genreCollection.ts
 ┃ ┣ 📜songCollection.ts
 ┃ ┗ 📜streamable.ts
 ┣ 📂PrincipalClases
 ┗ 📂SortFunctions
```

Estas clases se han creado simplemente para poder guardar un conjunto de artistas, géneros y canciones. Estas colecciones también nos ayudarán a organizar mejor la información de cada uno de los conjuntos y poder acceder a la información que queramos de cada conjunto.

La clase base en este caso sería ```BasicStreamableCollection<T>``` y está clase extiende a la interfaz streameable que define el método ```getName()``` que debe estar en todas las colecciones. En está clase base se usa el tipo genérico ```<T>``` para poder definir el tipo que queramos para crear cualquier colección.

Las clases ```ArtistsCollection```, ```GenreCollection``` y ```SongCollection```, usan los mismos atríbutos que en las clases Principales ```Artist```, ```MusicGenre``` y ```Song``` ya que las colecciones usan objetos del tipo correspondiente. En las colecciones se definen una serie de métodos para poder acceder a los atríbutos de cada objeto dentro del array del tipo objeto que sea. También se han creado métodos para poder eliminar objetos de la array del tipo que sea.

#### Funciones de ordenación

Las funciones de ordenación las encontramos en el directorio ```SortFunctions``` y son las siguientes:

```
📦DefinitiveHierarchy
 ┣ 📂Collectionables
 ┣ 📂PrincipalClases
 ┗ 📂SortFunctions
 ┃ ┣ 📜abstractSort.ts
 ┃ ┣ 📜albumSort.ts
 ┃ ┣ 📜albumYearSort.ts
 ┃ ┣ 📜artistNameSort.ts
 ┃ ┣ 📜durationSongSort.ts
 ┃ ┣ 📜genreSort.ts
 ┃ ┣ 📜groupNameSort.ts
 ┃ ┣ 📜playlistSort.ts
 ┃ ┣ 📜reproductionNumberSort.ts
 ┃ ┣ 📜singleFilter.ts
 ┃ ┗ 📜titleSongSort.ts
```

En este directorio se encuentran todas las ordenaciones y filtros que se deben añadir a la funcionalidad del sistema que van a utilizar los usuarios para navegar las playlists existentes o la lista de canciones. 

En está implementación tenemos una clase abstracta llamada ```GeneralSort``` donde se definen las funciones de ordenación asecendente y descendente que deben de tener el resto de clases derivadas. En está clase se definen dos métodos, el método ```greaterSort``` que ordena de forma descendente y del método ```lowerSort``` que ordena de forma ascendente.

Las ordenaciones que se deben utilizar para mostrar las diferentes listas de artistas, canciones, albums y playlists siguen los siguientes criterios:

  - Alfabéticamente por título de la canción, ascendente y descendente.
    - Esto se realiza en la clase ```TitleSongSort```
  - Alfabéticamente por nombre del álbum, ascendente y descendente.
    - Esto se realiza en la clase ```AlbumSort```
  - Alfabéticamente por nombre de la playlist, ascendente y descendente.
    - Esto se realiza en la clase ```PlaylistNameSort```
  - Por año de lanzamiento del álbum, ascendente y descendente.
    - Esto se realiza en la clase ```AlbumYearSort```
  - Por número de reproducciones totales, ascendente y descendente.
    - Esto se realiza en la clase ```ReproductionNumberSort```
  - Filtrar para mostrar únicamente los singles lanzados.
    - Esto se realiza en la clase ```SingleFilter```

Las ordenaciones que se deben utilizar para navegar por las diferentes playlists siguen los siguientes criterios:

  - Alfabéticamente por título de la canción, ascendente y descendente.
    - Esto se realiza en la clase ```TitleSongSort```
  - Alfabéticamente por nombre del grupo/artista, ascendente y descendente.
    - Esto se realiza en la clase ```GroupNameSort``` y en la clase ```ArtistNameSort```
  - Por año de lanzamiento, ascendente y descendente.
    - Esto se realiza en la clase ```AlbumYearSort```
  - Por duración de la canción, ascendente y descendente.
    - Esto se realiza en la clase ```SongDurationSort```
  - Por género musical, ascendente y descendente.
    - Esto se realiza en la clase ```GenreSort```
  - Por número de reproducciones totales, ascendente y descendente.
    - Esto se realiza en la clase ```TReproductionNumberSort```

## Clase Gestor

## Inquirer

### ¿Qué es Inquirer?

Inquirer es un paquete de NPM que proporciona de manera sencilla una forma de capturar la entrada del usuario en las aplicaciones de interfaz de línea de comandos en Node.js. Proporciona varios métodos para hacer preguntas y devolver respuestas al usuario a las que se puede acceder mediante una función ```.then``` promise.

### Implementación

## Lowdb

### ¿Qué es Lowdb?

La librería lowdb nos permite crear una pequeña base de datos local en formato JSON. Los elementos que se quieran incluir en una base de datos usando la libreria lowdb se guardan en un fichero **JSON** en el directorio que el programador decida. Esta libreria cuenta con una serie de **APIS** y **Adaptadores** que permiten a los programadores trabajar de forma sencilla a la hora de crear una pequeña base de datos. Está libreria cuenta con soporte en **TypeScript**.

### Implementación

En la implementación se ha decidido crear una serie de clases para los diferentes tipos de objetos, estas clases nos van a permitir añadir entradas a la base de datos y los ficheros relacionados se encuentran en el directorio **LowdbFiles**. Cada clase va a tener un tipo de objeto asginado para crear la base de datos de dicho objeto, en conreto los tipos de objetos que deben tener una base de datos son los siguientes: género musical, canción, grupo, artista, album y playlist.

En el directorio **JsonFiles** nos encontramos con las bases de datos que se crearon gracias a las clases del directorio **LowdbFiles**. Tenemos los ficheros ```Artist.json```, ```Genre.json```, ```Group.json```, ```Song.json``` y ```Album.json```. Estas bases de datos se han creado con la ayuda de la libreria lowdb implementada en las clases en el directorio **LowdbFiles**.

```
📦JsonFIles
 ┣ 📜Artist.json
 ┣ 📜Genre.json
 ┣ 📜Group.json
 ┗ 📜Song.json
```

En el directorio **LowdbFiles** se encuentran todas las clases relacionadas con la inserción de entradas en las bases de datos. Cada clase tiene un fichero asignado para que sea más comodo trabajar con ello y de paso utilizar el principo **SOLID Single Responsibility Principle** para que cada clase tenga una única responsibilidad.

```
📦src
 ┣ 📂DefinitiveHierarchy
 ┃ ┣ 📂Collectionables
 ┃ ┣ 📂PrincipalClases
 ┃ ┗ 📂SortFunctions
 ┣ 📂GestorClass
 ┣ 📂LowdbFiles
 ┃ ┣ 📜jsonGenreCollection.ts
 ┃ ┣ 📜jsonGroupCollection.ts
 ┃ ┣ 📜jsonPlaylistCollection.ts
 ┃ ┣ 📜jsonSongCollection.ts
 ┃ ┗ 📜jsonTodoCollection.ts
```

Los ficheros contenidos en este directorio tienen el siguiente aspecto:

```typescript
type schemaType = {
    Song: {name: string; author: Artist[]; songDuration: number;
      genre: MusicGenre[]; single: boolean; reproductionsNumber: number}[]
};

export class JsonSongCollection extends SongCollection {
  private database: lowdb.LowdbSync<schemaType>;

  constructor(SongItems: Song[]) {
    super(SongItems);
    this.database = lowdb(new FileSync("JsonFiles/Song.json"));
    this.database.set("Song", SongItems).write();
  }

  restart(SongItems: SongCollection): void {
    this.database.set("Song", SongItems).write();
  }
}
```

En este caso se ha escogido la clase ```JsonSongCollection```. Está clase se va utilizar como ejemplo para explicar la implementación de las demás clases dentro del mismo directorio.

Por un lado se ha creado un tipo de datos ```schemaType``` donde se definen los principales atributos que van a contenter la base de datos de las canciones, por otro lado tenemos la propia clase ```JsonSongCollection``` que extiende a la clase ```SongCollection``` donde se crean las colecciones de canciones. 

En la clase ```JsonSongCollection``` se tienen los siguientes métodos:

  - El constructor crea el fichero json donde estará la base de datos ```Song.json``` y se añade cada canción a la base de datos, al constructor se le pasa como parámetro una array de canciones.
  - El método ```restart```, permite añadir nuevos objetos tipo ```Song``` a la base de datos.

Para el resto de clases se sigue el mismo esquema.

## Conclusión

En conclusión nos ha parecido una práctica bastante interesante, ya que nos ha permitido familiarizarnos aún más con el lenguaje de programación typescript y también nos ha permitido conocer algunas herramientas como inquirer y lowdb para el manejo de la entrada de datos por parte del usuario y de la creación de una pequeña base de datos para poder guardar la información. Otras herramientas que nos han ayudado en el desarrollo de está aplicación han sido: las github actions que nos han ayudado con la integración continua del código usando las actions de pruebas y de coveralls para asegurar que nuestro código funciona de la forma correcta y sonarcloud para asegurar la calidad de nuestro código, sonarcloud tiene en cuenta una serie de aspectos como son la fiabilidad, mantenibilidad, seguridad, cobrimiento y duplicidades en nuestro código. Sonarcloud nos muestre el numero de bugs, vulnerabilidades, líneas duplicadas, el porcentaje de cubrimiento, los *security hotspot* y los *code smells* que se encuentren en nuestro código para poder conocer las partes del código que se deben mejorar. Por último, nuestro código cumple con los principios **SOLID** de **Single Responsibility Principle** y **Open-Closed Principle**; algunos ejemplos los podemos encontrar en los directorios ```PrincipalClases```, ```Collectionables```, ```SortFunctions``` y ```LowdbFiles```.