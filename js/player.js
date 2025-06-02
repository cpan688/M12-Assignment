let selectedKey = null;
class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
    getAlbumByKey =  function(selectedKey) {
        let pos = selectedKey.indexOf('-');
        let artist = selectedKey.slice(0, pos).trim();
        let title = selectedKey.slice(pos + 1).trim();   
        // console.log(`Selected Artist: ${artist} Album: ${title}` )
        let album = this.albums.find(album => album.artist === artist 
            && album.title === title);
        // console.log(`Inside getAlbumByKey, album object: ${album}`);
        return album;
}}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played++;
    }
    display = function() {
        return `${this.artist} : ${this.title}.<br>The album has been played ${this.played} times.`
    }
}

const albums = [
    { artist: 'The Beatles', album: 'Abbey Road' },
    { artist: 'Pink Floyd', album: 'The Dark Side of the Moon' },
    { artist: 'Bruce Springsteen', album: 'Born to Run' },
    { artist: 'Nirvana', album: 'Never Mind' },
    { artist: 'Fleetwood Mac', album: 'Rumours' },
];

const jukebox = new Jukebox()

const dropdown = document.getElementById('albumDropdown');
const dropdownButton = document.getElementById('dropdownMenuButton');
const selectedAlbumSpan = document.getElementById('selectedAlbum');

const playButton = document.getElementById('playButton');
const playStatusSpan = document.getElementById('playStatus');

const favoriteButton = document.getElementById('favoriteButton');
const favoriteAlbumSpan = document.getElementById('favoriteAlbum');

albums.forEach(item => {
    const album = new Album(item.artist, item.album);
    jukebox.addAlbum(album);

    const li = document.createElement('li');
    li.innerHTML = `<a class="dropdown-item" href="#" data-key="${item.artist} - ${item.album}">
                        ${item.artist} - ${item.album}
                    </a>`;
    dropdown.appendChild(li);
});

// Handle album selection
dropdown.addEventListener('click', (e) => {
if (e.target.matches('.dropdown-item')) {
    e.preventDefault();
    selectedKey = e.target.getAttribute('data-key');
    dropdownButton.textContent = selectedKey;
    selectedAlbumSpan.textContent = selectedKey;
    playStatusSpan.textContent = 'Ready to play';
}
});

// Handle Play button
playButton.addEventListener('click', () => {
    if (!selectedKey) {
        playStatusSpan.textContent = 'Please select an album first.';
        return;
    }
    const album = jukebox.getAlbumByKey(selectedKey);
    album.play();
    // playStatusSpan.textContent = `Now Playing: ${album.display()}`;
    playStatusSpan.textContent = `Now Playing: ${selectedKey}`;
});

// Handle Show Favorite Album button
favoriteButton.addEventListener('click', () => {
    favoriteAlbumSpan.innerHTML = jukebox.favoriteAlbum();
//   favoriteAlbumSpan.textContent = jukebox.favoriteAlbum();
});

// Handle Reset button
resetButton.addEventListener('click', () => {
    dropdownButton.textContent = 'Select Artist/Album to Play';
    selectedAlbumSpan.textContent = 'None';
    playStatusSpan.textContent = 'Select an album to play...';
    favoriteAlbumSpan.textContent = 'None';
    // li.remove();
});