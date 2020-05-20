const express = require('express');
const router = express.Router();
const musics = require('../model/MusicModel');

router.get('/musics', showMusicList); // 리스트
router.get('/musics/:musicId', showMusicDetail); // 상세
router.post('/musics', addMusic); // 음악 추가
router.get('/music/add', addMusicForm); // 음악 추가 폼
router.delete('/musics/:musicId', delMusic); // 음악 삭제
router.get('/musics/edit/:musicId', editMusicForm); // 음악 수정 폼
router.put('/musics/:musicId', editMusic); // 음악 수정

module.exports = router;

// 전체 목록 보기
async function showMusicList(req, res) {
    const musicList = await musics.getMusicList();
    const result = { data:musicList, count:musicList.length };
    res.render('MusicsList', {title:"음악 목록",  list:musicList, count:musicList.length });
}

// 상세 보기
async function showMusicDetail(req, res) {
    try {
        const musicId = req.params.musicId;
        const info = await musics.getMusicDetail(musicId);
        console.log(info.MusicInfo.dataValues);
        res.render('MusicsDetail', {title:"음악 상세", view:info, v_info:info.MusicInfo.dataValues});
    }
    catch ( error ) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:"상세보기 실패,,,,"});
    }
}

// 추가 폼
async function addMusicForm(req, res) {
    res.render('MusicAdd', {title:"음악 추가"});
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
    const video_link = req.body.video_link;

    try {
        const result = await musics.addMusic(title, artist, genre, date, video_link);
        res.render('MusicSuccess', {title:"음악 추가 완료 ^3^", view: result});
    }
    catch (error) {
        res.status(500).send({error:'음악 추가에 실패했습니다.'});
    }
}

// 삭제
async function delMusic(req, res) {
    try {
        const musicId = req.params.musicId; // id 가져오기
        const result = await musics.delMusic(musicId);
        res.render('Success', {title:"노래 ["+result.title+"]의 정보가 삭제되었습니다."});
    }
    catch ( error ) {
        res.status(400).send({error:'음악 삭제에 실패했습니다~'});
    }
}

// 수정 폼
async function editMusicForm(req, res) {
    try {
        const musicId = req.params.musicId;
        const info = await musics.getMusicDetail(musicId);
        res.render('MusicsEdit', {title:"음악 수정", view:info, v_info:info.MusicInfo.dataValues});
    }
    catch ( error ) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:'음악 수정에 실패했습니다ㅠ0ㅠ'});
    }
}

// 수정
async function editMusic(req, res) {
    try {
        const musicId = req.params.musicId; // id 가져오기
        const title = req.body.title;
        const artist = req.body.artist;

        if (!title || !artist) {
            res.status(400).send({error:'title 과 artist는 필수값입니다.'});
            return;
        }
        
        const genre = req.body.genre;
        const date = req.body.date;
        const video_link = req.body.video_link;
        const result = await musics.editMusic(musicId, title, artist, genre, date, video_link);
        result.video_link = result.MusicInfo.dataValues.video_link;
        res.render('MusicSuccess', {title:"음악 수정완료 ^3^", view: result});
    }
    catch ( error ) {
        res.status(400).send({error:'음악 정보 수정에 실패했습니다~'});
    }
}