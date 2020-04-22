const express = require('express');
const router = express.Router();
const musics = require('../model/MusicModel');

router.get('/musics', showMusicList);
router.get('/musics/:musicId', showMusicDetail);
router.post('/musics', addMusic);
router.post('/musics/:musicId', delMusic);
router.post('/musics/edit/:musicId', editMusic);

module.exports = router;

// 전체 목록 보기
function showMusicList(req, res) {
    const musicList = musics.getMusicList();
    const result = { data:musicList, count:musicList.length };
    res.send(result);
}

// 상세 보기
async function showMusicDetail(req, res) {
    try {
        // 음악 상세 정보 Id
        const musicId = req.params.musicId;
        console.log('상세히 볼 음악 번호', musicId);
        const info = await musics.getMusicDetail(musicId);
        res.send(info);
    }
    catch ( error ) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}

// 추가
async function addMusic(req, res) {
    const title = req.body.title;
    const artist = req.body.artist;

    if (!title || !artist) {
        res.status(400).send({error:'title 과 artist는 필수값입니다.'});
        return;
    }
    
    const genre = req.body.genre;
    const date = req.body.date;

    try {
        const result = await musics.addMusic(title, artist, genre, date);
        res.send({msg:'SUCCESS : 다음 내용을 추가하였습니다.', data:result});
    }
    catch ( error ) {
        res.status(500).send(error.msg);
    }
}

// 삭제
async function delMusic(req, res) {
    try {
        const musicId = req.params.musicId; // id 가져오기
        console.log('삭제할 음악 번호', musicId); // console에 id찍어주기
        const result = await musics.delMusic(musicId);
        res.send({msg:'SUCCESS : 다음 내용이 삭제되었습니다.', data:result});
    }
    catch ( error ) {
        res.status(400).send({error:'음악 삭제에 실패했습니다~'});
    }
}

// 수정
async function editMusic(req, res) { // 삭제 후 다시 추가
    try {
        const musicId = req.params.musicId; // id 가져오기
        console.log('수정할 음악 번호', musicId); // console에 id찍어주기

        const title = req.body.title;
        const artist = req.body.artist;

        if (!title || !artist) {
            res.status(400).send({error:'title 과 artist는 필수값입니다.'});
            return;
        }
        
        const genre = req.body.genre;
        const date = req.body.date;
        const result = await musics.editMusic(musicId, title, artist, genre, date);
        res.send({msg:'SUCCESS, '+musicId+'번의 내용이 변경되었습니다.', data:result});
    }
    catch ( error ) {
        res.status(400).send({error:'음악 정보 수정에 실패했습니다~'});
    }
}