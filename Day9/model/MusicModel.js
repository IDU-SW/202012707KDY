const pool = require('../dbConnection');
const {prepareTable} = require('../prepareTable');

class Music {
    constructor() {
        try{
            prepareTable();
        } catch (err){
            console.error(err);
        }
    }

    async getMusicList() {
        let conn;
        try {
            conn = await pool.getConnection();

            // 모든 정보 select
            const sql = 'SELECT * FROM music_list';
            const [rows, metadata] = await conn.query(sql);
            conn.release();
            return rows;
        } catch (error) {
            console.error(error);
        } finally {
            if ( conn ) // 커넥션 반환
                conn.release();
        }
    }

    // 상세보기
    async getMusicDetail(musicId) {
        let conn;
        try {
            conn = await pool.getConnection();

            // 특정 정보 select
            const sql = 'SELECT * FROM music_list WHERE music_id = ?;';
            const [rows, metadata] = await conn.query(sql, musicId);
            console.log('보려고하는 음악 정보:', rows[0].title);
            conn.release();
            return rows[0];
        } catch (error) {
            console.error(error);
        } finally {
            if ( conn )
                conn.release();
        }
    }

    // 추가
    async addMusic(title, artist, genre, date) {
        let conn;
        let newMusic = {title, artist, genre, date};
        try {
            conn = await pool.getConnection();

            // 정보 insert
            const sql = 'INSERT INTO music_list SET ?;';
            const ret = await conn.query(sql, newMusic);
            console.log('추가된 음악:', title);
            conn.release();
            return newMusic;
        } catch (error) {
            console.error(error);
        } finally {
            if ( conn )
                conn.release();
        }
    }

    // 삭제
    async delMusic(musicId) {
        let conn;
        try {
            conn = await pool.getConnection();

            // 삭제될 정보 select
            const sql1 = 'SELECT title FROM music_list WHERE music_id = ?;';
            const [rows, metadata] = await conn.query(sql1, musicId);

            // 정보 delete
            const sql = 'DELETE FROM music_list WHERE music_id = ?;';
            const ret = await conn.query(sql, musicId);
            console.log('삭제된 음악:', rows[0].title);
            conn.release();
            return rows[0];
        } catch (error) {
            console.error(error);
        } finally {
            if ( conn )
                conn.release();
        }
    }
    
    // 수정
    async editMusic(musicId, title, artist, genre, date) {
        let conn;
        let editMusic = {title, artist, genre, date};
        try {
            conn = await pool.getConnection();

            // 정보 update
            const sql = 'UPDATE music_list SET ? WHERE music_id = ?;';
            const ret = await conn.query(sql, [editMusic, musicId]);

            // 수정된 정보 select
            const sql2 = 'SELECT * FROM music_list WHERE music_id = ?;';
            const [rows, metadata] = await conn.query(sql2, musicId);

            console.log('수정된 음악 번호:', musicId);
            conn.release();
            return rows[0];
        } catch (error) {
            console.error(error);
        } finally {
            if ( conn )
                conn.release();
        }
    }
}

module.exports = new Music();