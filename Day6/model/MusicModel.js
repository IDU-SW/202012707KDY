const fs = require('fs');

class Music {
    constructor() {
        const data = fs.readFileSync('./model/data.json');
        this.musics = JSON.parse(data)
    }

    // Promise 예제
    getMusicList() {
        if (this.musics) {
            return this.musics;
        }
        else {
            return [];
        }
    }

    // 추가
    addMusic(title, artist, genre, date) {
        return new Promise((resolve, reject) => {
            let last = this.musics[this.musics.length - 1];
            let id = last.id + 1;

            let newMusic = {id, title, artist, genre, date};
            this.musics.push(newMusic);

            resolve(newMusic);
        });
    }

    // 삭제
    delMusic(musicId) {
        return new Promise((resolve, reject) => {
            for (var music of this.musics ) {
                if ( music.id == musicId ) {
                    this.musics.splice(musicId, 1);
                    resolve(music);
                    return;
                }
            }
            reject({msg:'Can not find music!', code:404});
        });
    }
    
    // 수정
    editMusic(musicId, title, artist, genre, date) {
        return new Promise((resolve, reject) => {
            let id = Number(musicId);
            let newMusic = {id, title, artist, genre, date};
            for (var music of this.musics ) {
                if ( music.id == id ) {
                    this.musics.splice(id, 1, newMusic); // id번의 내용 1개 삭제 후 newMusic의 내용 새로 추가
                    resolve(newMusic);
                    return;
                }
            }
        });
    }

    // Promise - Reject
    // 상세보기
    getMusicDetail(musicId) {
        return new Promise((resolve, reject) => {
            for (var music of this.musics ) {
                if ( music.id == musicId ) {
                    resolve(music);
                    return;
                }
            }
            reject({msg:'Can not find music!', code:404});
        });
    }
}

module.exports = new Music();