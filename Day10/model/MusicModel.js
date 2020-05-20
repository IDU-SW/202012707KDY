const fs = require('fs');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('musics', 'dev', 'cometrue', {
    dialect: 'mysql', host :'127.0.0.1'
})

class MusicList extends Sequelize.Model {}
MusicList.init({
    music_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: Sequelize.STRING,
    artist: Sequelize.STRING,
    genre: Sequelize.STRING,
    date: Sequelize.STRING
}, {tableName: 'music_list', sequelize})

class MusicInfo extends Sequelize.Model {}
MusicInfo.init({
    info_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    list_music_id: Sequelize.INTEGER,
    video_link: Sequelize.STRING
}, {tableName: 'music_info', sequelize})

class Music {
    constructor() {
        try{
            this.prepareTable();
        } catch (err){
            console.error(err);
        }
    }

    async prepareTable() {
        try {
            await MusicList.sync({force:true});
            await MusicInfo.sync({force:true});

            MusicList.hasOne(MusicInfo, {
                foreignKey:'list_music_id'
            })
            await this.jsonToDB();
        }catch (err){
            console.log('musicList 준비 실패 :', err);
        }
    }

    async jsonToDB() {
        const data = fs.readFileSync('./model/data.json');
        const musics = JSON.parse(data);
        for(var music of musics){
            await this.musicdata(music);
        }
    }

    async musicdata(music){
        try{
            const mret = await MusicList.create({
                title: music.title,
                artist: music.artist,
                genre: music.genre,
                date: music.date,
            }, {logging: false});

            const iret = await MusicInfo.create({
                video_link: music.video_link
            }, {logging: false});

            const newData = mret.dataValues;

            await mret.setMusicInfo(iret);

            console.log(newData);
            console.log('Create success');
        } catch (err) {
            console.log('ERROR : ', err);
        }
    }

    async getMusicList() {
        let rtn;
        await MusicList.findAll({include:[{model:MusicInfo}]})
        .then( results => {
            for (var item of results) {
                console.log('id:', item.music_id, ', title:', item.title, ', artist:', item.artist, ', genre:', item.genre, ', date:', item.date);
            }
            rtn = results;
        })
        .catch( error => {
            console.error('Error :', error);
        });
        return rtn;
    }

    // 상세보기
    async getMusicDetail(musicId) {
        try {
            let results = await MusicList.findAll({where: {music_id:musicId}, include:[{model:MusicInfo}]});
            for (var item of results) {
                console.log('id : ', item.music_id, ' title : ', item.title);
            }
            if ( results ) {
                return results[0];
            }
            else {
                console.log('no data');
            }
        }
        catch (error) {
            console.log('Error : ', error);
        }
    }

    // 추가
    async addMusic(title, artist, genre, date, video_link) {
        let newMusic = {title, artist, genre, date, video_link};
        console.log(newMusic);
        try {
            const newData = await this.musicdata(newMusic);
            console.log(newData);
            console.log('Create success');
            return newMusic;
        }
        catch (error) {
            console.log('Error : ', error);
        }
    }

    // 삭제
    async delMusic(musicId) {
        try {
            let results = await MusicList.findAll({where: {music_id:musicId}, include:[{model:MusicInfo}]});

            let result = await MusicList.destroy({ where:{music_id:musicId}, include:[{model:MusicInfo}]});
            
            for (var item of results) {
                console.log('Remove item id : ', item.music_id, ', title : ', item.title);
            }
            if ( results ) {
                console.log('Remove success :', result);
                return results[0];
            }
            else {
                console.log('no data');
            }
        }
        catch (error) {
            console.log('Remove Error :', error);
        }
    }
    
    // 수정
    async editMusic(musicId, title, artist, genre, date, video_link) {
        try {
            let music = await MusicList.findByPk(musicId);
            music.title = title;
            music.artist = artist;
            music.genre = genre;
            music.date = date;
            let ret = await music.save();

            let music_v = await MusicInfo.findByPk(musicId);
            music_v.video_link = video_link;
            let ret_v = await music_v.save();

            let changedMusic = ret.dataValues;
            let changedMusic_v = ret_v.dataValues;
            console.log('ret :',changedMusic, "ret_v: ", changedMusic_v);

            let results = await MusicList.findAll({where: {music_id:musicId}, include:[{model:MusicInfo}]});
            return results[0];
        }
        catch (error) {
            console.log('Error :', error);
        }
    }
}

module.exports = new Music();