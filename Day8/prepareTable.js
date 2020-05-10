const pool = require('./dbConnection');
const fs = require('fs');

exports.prepareTable = () => {
    const sql = 'DROP TABLE IF EXISTS music_list; CREATE TABLE music_list (music_id int primary key auto_increment, title varchar(100), artist varchar(50), genre varchar(50), date varchar(50));';
    pool.query(sql).then(ret => { // sql 실행 성공시
        jsonToDB(); // DB에 데이터 넣기
        console.log('musicList 준비 완료');
    }).catch(err => { // sql 실행 실패시
        console.log('musicList 준비 실패 :', err);
        pool.end(); // 종료
    });
}

// >> json에 있는 데이터를 DB에 저장
async function jsonToDB() {
    const data = fs.readFileSync('./model/data.json');
    const musics = JSON.parse(data);

    for (var music of musics) {
        await musicdata(music);
    }
}

async function musicdata(music) {
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'INSERT INTO music_list SET ?;';
        const data = { title : music.title, artist : music.artist, genre : music.genre, date : music.date};
        const result = await conn.query(sql, data);
        console.log('추가된 데이터:', music.title);
    } catch (error) {
        console.error(error);
    } finally {
        if ( conn )
            conn.release();
    } 
}
// <<