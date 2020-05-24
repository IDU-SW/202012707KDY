const MusicCon = require('./connect');

const fs = require('fs');

class Music {
    constructor() {
        try{
            this.jsonToDB();
        } catch (err){
            console.log('musicList 준비 실패 :', err);
        }
    }

    // 초기 데이터 입력
    async jsonToDB() {
        const data = fs.readFileSync('./model/data.json');
        const musics = JSON.parse(data);
        for(var music of musics){
            await this.musicdata(music);
        }
    }

    async musicdata(music){
        try {
            const result = await MusicCon.create({ title: music.title, artist: music.artist, genre: music.genre, date: music.date });
            console.log('음악 추가 성공! :', result);
        }
        catch ( error ) {
            console.log('Creation Error :', error);
        }
    }
    // 초기 데이터 입력 끝 

    // 음악 목록 보기
    async getMusicList() {
        let value;
        await MusicCon.find({})
        .then (docs => {
            for(var item of docs) {
                console.log('음악 목록보기] title:', item.title, ', artist:', item.artist, ', genre:', item.genre, ', date:', item.date);
            }
            value = docs;
        })
        .catch (error => {
            console.error('ERROR : ', error);
        });
        return value;
    }

    // 음악 상세보기
    async getMusicDetail(musicId) {
        let value;
        await MusicCon.find({_id: musicId })
        .then (docs => {
            for(var item of docs){
                console.log("선택된 노래 정보 : " + item.title);
            }
            value = docs;
        })
        .catch (error => {
            console.error('ERROR : ', error);
        });
        return value[0];
    }

    // 음악 추가
    async addMusic(title, artist, genre, date) {
        let newMusic = {title, artist, genre, date};
        console.log(newMusic);
        try {
            await this.musicdata(newMusic);
            console.log('음악 추가 성공!');
            return newMusic;
        }
        catch (error) {
            console.log('Error : ', error);
        }
    }

    // 음악 삭제
    async delMusic(musicId) {
        let value;
        await MusicCon.find({_id: musicId }).then (docs => {
            for(var item of docs){
                console.log(item.title + ' 삭제 처리중..');
            }
            value = docs;
        })
        .catch (error => {
            console.error('ERROR : ', error);
        });

        try {
            const doc = await MusicCon.findOne({ _id: musicId });
            if ( ! doc ) {
                console.log('정보를 찾을 수 없습니다.'+_id);
                return;
            }
            await doc.remove();
            console.log('['+ value[0].title +'] 의 정보가 삭제되었습니다.');
            return value[0];
        } catch (error) {
            console.error('Error :', error);        
        }
    }
    
    // 음악 수정
    async editMusic(musicId, title, artist, genre, date) {
        try {
            const doc = await MusicCon.findOne({ _id: musicId });
            if ( ! doc ) {
                console.log('정보를 찾을 수 없습니다.'+_id);
                return;
            }
            doc.title = title;
            doc.artist = artist;
            doc.genre = genre;
            doc.date = date;
            await doc.save();
            console.log('['+ doc.title +'] 의 정보가 수정되었습니다.');
            return doc;
        } catch (error) {
            console.error('Error :', error);        
        }
    }
}

module.exports = new Music();