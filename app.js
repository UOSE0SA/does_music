// 音乐数据
const musicData = [
    {
        id: 1,
        title: "野花香",
        artist: "莫斯满/老猫",
        cover: "🌺",
        duration: 205,
        audioUrl: "assets/id1/id1.mp3",
        inAlbum: true,
        album: "多元风格精选集"
    },
    {
        id: 2,
        title: "Apollo",
        artist: "TJ.hangneil",
        cover: "🌕",
        duration: 159,
        audioUrl: "assets/id1/id2.mp3",
        inAlbum: true,
        album: "多元风格精选集"
    },
    {
        id: 3,
        title: "raputa",
        artist: "sasakure.UK&TJ.hangneil",
        cover: "🌑",
        duration: 187,
        audioUrl: "assets/id1/id3.mp3",
        inAlbum: true,
        album: "多元风格精选集"
    },
    {
        id: 4,
        title: "酒醉的蝴蝶",
        artist: "崔伟立",
        cover: "🦋",
        duration: 206,
        audioUrl: "assets/id1/id4.mp3",
        inAlbum: true,
        album: "多元风格精选集"
    },
    {
        id: 5,
        title: "Grievous Lady",
        artist: "Team Grimoire&Laur",
        cover: "🎹",
        duration: 238,
        audioUrl: "assets/id1/id5.mp3",
        inAlbum: true,
        album: "多元风格精选集"
    },
    {
        id: 6,
        title: "稻香",
        artist: "周杰伦",
        cover: "🌾",
        duration: 223,
        audioUrl: "assets/id2/id6.mp3",
        inAlbum: true,
        album: "周杰伦精选集"
    },
    {
        id: 7,
        title: "夜曲",
        artist: "周杰伦",
        cover: "🌃",
        duration: 215,
        audioUrl: "assets/id2/id7.mp3",
        inAlbum: true,
        album: "周杰伦精选集"
    },
    {
        id: 8,
        title: "晴天",
        artist: "周杰伦",
        cover: "☀️",
        duration: 269,
        audioUrl: "assets/id2/id8.mp3",
        inAlbum: true,
        album: "周杰伦精选集"
    },
    {
        id: 9,
        title: "爱在西元前",
        artist: "周杰伦",
        cover: "🏛️",
        duration: 236,
        audioUrl: "assets/id2/id9.mp3",
        inAlbum: true,
        album: "周杰伦精选集"
    },
    {
        id: 10,
        title: "简单爱",
        artist: "周杰伦",
        cover: "💗",
        duration: 268,
        audioUrl: "assets/id2/id10.mp3",
        inAlbum: true,
        album: "周杰伦精选集"
    },
    {
        id: 11,
        title: "双截棍",
        artist: "周杰伦",
        cover: "🥋",
        duration: 204,
        audioUrl: "assets/id2/id11.mp3",
        inAlbum: true,
        album: "周杰伦精选集"
    },
    {
        id: 12,
        title: "Designant.",
        artist: "Designant",
        cover: "🐜",
        duration: 181,
        audioUrl: "assets/id3/id12.mp3",
        inAlbum: true,
        album: "Arcaea精选集"
    },
    {
        id: 13,
        title: "是妈妈是女儿",
        artist: "黄绮珊&希林娜依高",
        cover: "👵",
        duration: 376,
        audioUrl: "assets/id3/id13.mp3",
        inAlbum: false
    },
    {
        id: 14,
        title: "Tesitfy.",
        artist: "void&星熊南巫",
        cover: "🔪",
        duration: 215,
        audioUrl: "assets/id3/id14.mp3",
        inAlbum: true,
        album: "Arcaea精选集"
    },
    {
        id: 15,
        title: "1BPM",
        artist: "DJ Myosuke",
        cover: "💺",
        duration: 241,
        audioUrl: "assets/id3/id15.mp3",
        inAlbum: false
    },
    {
        id: 16,
        title: "伤不起",
        artist: "王麟",
        cover: "💔",
        duration: 227,
        audioUrl: "assets/id3/id16.mp3",
        inAlbum: false
    },
    {
        id: 17,
        title: "Tempestissimo",
        artist: "t+pazolite",
        cover: "🌧️",
        duration: 138,
        audioUrl: "assets/id3/id17.mp3",
        inAlbum: true,
        album: "Arcaea精选集",
        hasBeenPlayed: false
    },
    {
        id: 18,
        title: "Aegleseeker",
        artist: "Slientromm&Frums",
        cover: "📖",
        duration: 149,
        audioUrl: "assets/id3/id18.mp3",
        videoUrl: "assets/id3/id18.mp4", // 假设的视频文件路径
        inAlbum: true,
        album: "Arcaea精选集",
        hasBeenPlayed: false,
        isHidden: true // 新增属性，用于标记是否隐藏
    },
];

// 专辑数据
const albums = [
    {
        id: 1,
        title: "多元风格精选集",
        artist: "Various Artists",
        cover: "🎵",
        description: "多种风格音乐作品集合",
        songs: [1, 2, 3, 4, 5],
        releaseDate: "2025-5-5"
    },
    {
        id: 2,
        title: "周杰伦精选集",
        artist: "周杰伦",
        cover: "🎤",
        description: "周杰伦经典歌曲精选",
        songs: [6, 7, 8, 9, 10, 11],
        releaseDate: "2023-5-05"
    },
    {
        id: 3,
        title: "Arcaea精选集",
        artist: "lowiro",
        cover: "🎹",
        description: "限定曲包  1.0 至 2.0",
        songs: [5, 12, 14, 17, 18],
        releaseDate: "2025-5-05"
    }
];

// 用户数据
const userData = {
    likedSongs: [1, 3, 6, 8],
    playlists: [
        {
            id: 1,
            name: "我的最爱",
            songs: [1, 3, 6],
            cover: "❤️"
        },
        {
            id: 2,
            name: "工作背景音乐",
            songs: [2, 5],
            cover: "💼"
        }
    ]
};

// 播放器状态
const playerState = {
    audio: new Audio(),
    video: document.createElement('video'),
    currentSong: null,
    isPlaying: false,
    volume: 0.7,
    isMuted: false,
    currentPlaylist: [],
    currentIndex: -1,
    repeatMode: 'list',
    hasPlayedAegleseekerVideo: false
};

// DOM元素
const searchInput = document.getElementById('searchInput');
const albumContainer = document.getElementById('featuredAlbums');
const musicLibrary = document.getElementById('musicLibrary');
const playerTitle = document.getElementById('playerTitle');
const playerArtist = document.getElementById('playerArtist');
const playerCover = document.getElementById('playerCover');
const playBtn = document.getElementById('playBtn');
const repeatBtn = document.getElementById('repeatBtn');
const likeBtn = document.getElementById('likeBtn');
const addToPlaylistBtn = document.getElementById('addToPlaylistBtn');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const mainContainer = document.getElementById('mainContainer');
const detailSidebar = document.getElementById('detailSidebar');
const detailContent = document.getElementById('detailContent');
const overlay = document.getElementById('overlay');

// 初始化
document.addEventListener('DOMContentLoaded', function () {
    renderAlbums();
    renderMusicLibrary();

    playerState.audio.volume = playerState.volume;
    playerState.video.volume = playerState.volume;

    // 事件监听
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        renderAlbums(searchTerm);
        renderMusicLibrary(searchTerm);
    });

    playBtn.addEventListener('click', togglePlay);
    repeatBtn.addEventListener('click', toggleRepeatMode);
    likeBtn.addEventListener('click', toggleLike);
    addToPlaylistBtn.addEventListener('click', showPlaylistSelector);

    progressContainer.addEventListener('click', function (e) {
        if (!playerState.currentSong) return;
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = playerState.audio.duration || 1;
        playerState.audio.currentTime = (clickX / width) * duration;
    });

    menuBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', closeAllSidebars);

    document.querySelectorAll('.sidebar-menu li').forEach(item => {
        item.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            showDetailSidebar(target);
        });
    });

    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            toggleSection(target);
        });
    });

    playerState.audio.addEventListener('timeupdate', updateProgress);
    playerState.audio.addEventListener('ended', handleSongEnded);
    playerState.audio.addEventListener('loadedmetadata', function () {
        durationEl.textContent = formatTime(playerState.audio.duration);
    });

    playerState.video.addEventListener('timeupdate', updateProgress);
    playerState.video.addEventListener('ended', handleVideoEnded);
    playerState.video.addEventListener('loadedmetadata', function () {
        durationEl.textContent = formatTime(playerState.video.duration);
    });

    updateLikeButton();
});

// 渲染专辑
function renderAlbums(searchTerm = '') {
    albumContainer.innerHTML = '';

    albums.forEach(album => {
        const albumSongs = musicData.filter(song => 
            album.songs.includes(song.id) && 
            (!searchTerm || 
             song.title.toLowerCase().includes(searchTerm) || 
             song.artist.toLowerCase().includes(searchTerm) ||
             song.album.toLowerCase().includes(searchTerm)) &&
            !song.isHidden // 过滤掉隐藏的歌曲
        );
        
        if (albumSongs.length === 0 && searchTerm) return;
        
        const albumEl = document.createElement('div');
        albumEl.className = 'album-item';
        albumEl.innerHTML = `
            <div class="album-header">
                <div class="album-cover">${album.cover}</div>
                <div class="album-info">
                    <div class="album-title">${album.title}</div>
                    <div class="album-artist">${album.artist}</div>
                    <div class="album-description">${album.description}</div>
                </div>
            </div>
            <div class="album-songs">
                <table class="song-list">
                    <thead>
                        <tr>
                            <th class="song-number">#</th>
                            <th>标题</th>
                            <th>歌手</th>
                            <th class="song-duration">时长</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${albumSongs.map((song, index) => {
                            const displayTitle = song.title;
                            const displayArtist = song.artist;
                            const displayDuration = formatTime(song.duration);
                            return `
                            <tr>
                                <td class="song-number">${index + 1}</td>
                                <td>
                                    <span class="play-song-btn" data-id="${song.id}">▶</span>
                                    <span class="song-title">${displayTitle}</span>
                                </td>
                                <td class="song-artist">${displayArtist}</td>
                                <td class="song-duration">${displayDuration}</td>
                            </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        albumEl.querySelectorAll('.play-song-btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                const songId = parseInt(this.getAttribute('data-id'));
                const song = musicData.find(s => s.id === songId);
                playSong(song, albumSongs);
            });
        });
        
        albumContainer.appendChild(albumEl);
    });
}

// 渲染音乐库
function renderMusicLibrary(searchTerm = '') {
    const filteredSongs = searchTerm 
        ? musicData.filter(song => 
            song.title.toLowerCase().includes(searchTerm) || 
            song.artist.toLowerCase().includes(searchTerm) ||
            song.album.toLowerCase().includes(searchTerm)) &&
            !song.isHidden // 过滤掉隐藏的歌曲
        : musicData.filter(song =>!song.isHidden); // 过滤掉隐藏的歌曲
    
    musicLibrary.innerHTML = `
        <div class="album-item">
            <div class="album-songs">
                <table class="song-list">
                    <thead>
                        <tr>
                            <th class="song-number">#</th>
                            <th>标题</th>
                            <th>歌手</th>
                            <th>专辑</th>
                            <th class="song-duration">时长</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filteredSongs.map((song, index) => {
                            const displayTitle = song.title;
                            const displayArtist = song.artist;
                            const displayDuration = formatTime(song.duration);
                            return `
                            <tr>
                                <td class="song-number">${index + 1}</td>
                                <td>
                                    <span class="play-song-btn" data-id="${song.id}">▶</span>
                                    <span class="song-title">${displayTitle}</span>
                                </td>
                                <td class="song-artist">${displayArtist}</td>
                                <td class="song-album">${song.album}</td>
                                <td class="song-duration">${displayDuration}</td>
                            </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    musicLibrary.querySelectorAll('.play-song-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const songId = parseInt(this.getAttribute('data-id'));
            const song = musicData.find(s => s.id === songId);
            playSong(song, musicData);
        });
    });
}

// 播放歌曲
function playSong(song, playlist = null) {
    playerState.currentSong = song;
    if (song.id === 18 &&!playerState.hasPlayedAegleseekerVideo) {
        song.hasBeenPlayed = true;
        playerState.video.src = song.videoUrl;
        playerState.video.autoplay = true;
        playerState.video.loop = false;
        playerState.video.muted = false;
        playerState.video.style.position = 'fixed';
        playerState.video.style.top = 0;
        playerState.video.style.left = 0;
        playerState.video.style.width = '100%';
        playerState.video.style.height = '100%';
        playerState.video.style.zIndex = 1000;
        playerState.video.controls = false;
        document.body.appendChild(playerState.video);

        // 淡入效果
        let opacity = 0;
        const fadeInInterval = setInterval(() => {
            opacity += 0.05;
            playerState.video.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(fadeInInterval);
            }
        }, 50);

        playerState.video.play()
           .then(() => {
                playerState.isPlaying = true;
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                updatePlayerInfo();
                updateLikeButton();
            })
           .catch(error => {
                console.error("播放视频失败:", error);
                showToast("播放视频失败，请检查视频链接");
            });
    } else if (song.id === 17) {
        song.hasBeenPlayed = true;
        playerState.audio.src = song.audioUrl;
        if (playlist) {
            playerState.currentPlaylist = playlist;
            playerState.currentIndex = playlist.findIndex(s => s.id === song.id);
        }
        playerState.audio.play()
           .then(() => {
                playerState.isPlaying = true;
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                updatePlayerInfo();
                updateLikeButton();
            })
           .catch(error => {
                console.error("播放失败:", error);
                showToast("播放失败，请检查音频链接");
            });
    } else {
        playerState.audio.src = song.audioUrl;
        if (playlist) {
            playerState.currentPlaylist = playlist;
            playerState.currentIndex = playlist.findIndex(s => s.id === song.id);
        }
        playerState.audio.play()
           .then(() => {
                playerState.isPlaying = true;
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                updatePlayerInfo();
                updateLikeButton();
            })
           .catch(error => {
                console.error("播放失败:", error);
                showToast("播放失败，请检查音频链接");
            });
    }
}

// 更新播放器信息
function updatePlayerInfo() {
    if (!playerState.currentSong) return;

    const displayTitle = playerState.currentSong.title;
    const displayArtist = playerState.currentSong.artist;
    const displayDuration = formatTime(playerState.currentSong.duration);

    playerTitle.textContent = displayTitle;
    playerArtist.textContent = displayArtist;
    playerCover.textContent = playerState.currentSong.cover;
    durationEl.textContent = displayDuration;
}

// 切换播放/暂停
function togglePlay() {
    if (!playerState.currentSong) {
        const firstSong = musicData.find(s =>!s.isHidden); // 找到第一首非隐藏的歌曲
        if (firstSong) playSong(firstSong, musicData);
        return;
    }

    if (playerState.isPlaying) {
        if (playerState.currentSong.id === 18 &&!playerState.hasPlayedAegleseekerVideo) {
            // 视频不可暂停，这里不做操作
        } else {
            playerState.audio.pause();
        }
        playerState.isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        if (playerState.currentSong.id === 18 &&!playerState.hasPlayedAegleseekerVideo) {
            // 视频自动播放，这里不做操作
        } else {
            playerState.audio.play()
               .then(() => {
                    playerState.isPlaying = true;
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                });
        }
    }
}

// 歌曲结束处理
function handleSongEnded() {
    if (playerState.repeatMode === 'one') {
        playerState.audio.currentTime = 0;
        playerState.audio.play();
    } else {
        if (playerState.currentSong && playerState.currentSong.id === 17) {
            // 将id为18的歌曲设置为已解锁（这里假设通过设置isHidden为false来表示解锁）
            const song18 = musicData.find(s => s.id === 18);
            if (song18) {
                song18.isHidden = false;
                song18.hasBeenPlayed = true; // 标记为已播放过，这样播放时就不会再显示???
            }
            // 播放Aegleseeker
            const aegleseeker = musicData.find(s => s.id === 18);
            if (aegleseeker) {
                playSong(aegleseeker, musicData);
            }
        } else {
            playNextSong();
        }
    }
}
// 视频结束处理
function handleVideoEnded() {
    playerState.hasPlayedAegleseekerVideo = true;
    playerState.currentSong.hasBeenPlayed = true;
    // 淡出效果
    let opacity = 1;
    const fadeOutInterval = setInterval(() => {
        opacity -= 0.05;
        playerState.video.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fadeOutInterval);
            playerState.video.style.display = 'none';
            document.body.removeChild(playerState.video);
            playSong(playerState.currentSong, playerState.currentPlaylist);
        }
    }, 50);
}

// 播放下一首
function playNextSong() {
    if (playerState.currentPlaylist.length === 0) return;

    if (playerState.repeatMode === 'random') {
        playerState.currentIndex = Math.floor(Math.random() * playerState.currentPlaylist.length);
    } else {
        playerState.currentIndex++;
        if (playerState.currentIndex >= playerState.currentPlaylist.length) {
            playerState.currentIndex = 0;
        }
    }

    const nextSong = playerState.currentPlaylist[playerState.currentIndex];
    playSong(nextSong, playerState.currentPlaylist);
}

// 切换播放模式
function toggleRepeatMode() {
    const modes = ['list', 'one', 'random'];
    const icons = ['🔁', '🔂', '🔀'];
    const titles = ['列表循环', '单曲循环', '随机播放'];

    const currentIndex = modes.indexOf(playerState.repeatMode);
    const nextIndex = (currentIndex + 1) % modes.length;

    playerState.repeatMode = modes[nextIndex];
    repeatBtn.textContent = icons[nextIndex];
    repeatBtn.title = titles[nextIndex];
    repeatBtn.classList.toggle('active', playerState.repeatMode!== 'list');
}

// 更新进度条
function updateProgress() {
    const { currentTime, duration } = playerState.currentSong.id === 18 &&!playerState.hasPlayedAegleseekerVideo
       ? playerState.video
        : playerState.audio;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(currentTime);
}

// 格式化时间
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// 切换侧边栏
function toggleSidebar() {
    sidebar.classList.toggle('active');
    mainContainer.classList.toggle('sidebar-active');
}

// 显示详情侧边栏
function showDetailSidebar(target) {
    detailContent.innerHTML = '';

    if (target === 'favorites') {
        const likedSongs = musicData.filter(song => userData.likedSongs.includes(song.id));
        renderAlbumInSidebar('我喜欢的音乐', '❤️', '我喜欢的歌曲', likedSongs);
    } else if (target === 'playlists') {
        renderPlaylistsInSidebar();
    }

    detailSidebar.classList.add('active');
    overlay.classList.add('active');
}

// 播放歌曲
function playSong(song, playlist = null) {
    playerState.currentSong = song;
    if (song.id === 18 &&!playerState.hasPlayedAegleseekerVideo) {
        song.hasBeenPlayed = true;
        playerState.video.src = song.videoUrl;
        playerState.video.autoplay = true;
        playerState.video.loop = false;
        playerState.video.muted = false;
        playerState.video.style.position = 'fixed';
        playerState.video.style.top = 0;
        playerState.video.style.left = 0;
        playerState.video.style.width = '100%';
        playerState.video.style.height = '100%';
        playerState.video.style.zIndex = 1000;
        playerState.video.controls = false;
        // 添加 object-fit 属性来适配视频大小，防止拉伸
        playerState.video.style.objectFit = 'contain'; 
        document.body.appendChild(playerState.video);

        // 淡入效果
        let opacity = 0;
        const fadeInInterval = setInterval(() => {
            opacity += 0.05;
            playerState.video.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(fadeInInterval);
            }
        }, 50);

        playerState.video.play()
           .then(() => {
                playerState.isPlaying = true;
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                updatePlayerInfo();
                updateLikeButton();
            })
           .catch(error => {
                console.error("播放视频失败:", error);
                showToast("播放视频失败，请检查视频链接");
            });
    } else if (song.id === 17) {
        song.hasBeenPlayed = true;
        playerState.audio.src = song.audioUrl;
        if (playlist) {
            playerState.currentPlaylist = playlist;
            playerState.currentIndex = playlist.findIndex(s => s.id === song.id);
        }
        playerState.audio.play()
           .then(() => {
                playerState.isPlaying = true;
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                updatePlayerInfo();
                updateLikeButton();
            })
           .catch(error => {
                console.error("播放失败:", error);
                showToast("播放失败，请检查音频链接");
            });
    } else {
        playerState.audio.src = song.audioUrl;
        if (playlist) {
            playerState.currentPlaylist = playlist;
            playerState.currentIndex = playlist.findIndex(s => s.id === song.id);
        }
        playerState.audio.play()
           .then(() => {
                playerState.isPlaying = true;
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                updatePlayerInfo();
                updateLikeButton();
            })
           .catch(error => {
                console.error("播放失败:", error);
                showToast("播放失败，请检查音频链接");
            });
    }
}

// 渲染歌单到侧边栏
function renderPlaylistsInSidebar() {
    detailContent.innerHTML = `
        <h3>我的歌单</h3>
        <button class="play-all-btn" id="playAllPlaylists">
            <i class="fas fa-play"></i> 播放全部歌单
        </button>
        <div class="playlist-container">
            ${userData.playlists.map(playlist => `
                <div class="playlist-item" data-id="${playlist.id}">
                    <div class="playlist-cover">${playlist.cover}</div>
                    <div class="playlist-info">
                        <div class="playlist-name">${playlist.name}</div>
                        <div class="playlist-count">${playlist.songs.length}首</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    detailContent.querySelectorAll('.playlist-item').forEach(item => {
        item.addEventListener('click', function () {
            const playlistId = parseInt(this.getAttribute('data-id'));
            const playlist = userData.playlists.find(p => p.id === playlistId);
            const playlistSongs = musicData.filter(song => playlist.songs.includes(song.id));

            renderAlbumInSidebar(playlist.name, playlist.cover, '', playlistSongs);
        });
    });

    document.getElementById('playAllPlaylists')?.addEventListener('click', function () {
        const allSongs = [];
        const songIds = new Set();

        userData.playlists.forEach(playlist => {
            playlist.songs.forEach(songId => {
                if (!songIds.has(songId)) {
                    songIds.add(songId);
                    const song = musicData.find(s => s.id === songId);
                    if (song) allSongs.push(song);
                }
            });
        });

        if (allSongs.length > 0) {
            playSong(allSongs[0], allSongs);
            showToast(`已开始播放全部歌单 (${allSongs.length}首)`);
        } else {
            showToast('歌单中没有歌曲');
        }
    });
}

// 在侧边栏渲染专辑
function renderAlbumInSidebar(title, cover, description, songs) {
    detailContent.innerHTML = `
        <div class="album-header">
            <div class="album-cover">${cover}</div>
            <div class="album-info">
                <div class="album-title">${title}</div>
                <div class="album-description">${description}</div>
            </div>
        </div>
        <button class="play-all-btn" id="playAllSongs">
            <i class="fas fa-play"></i> 播放全部
        </button>
        <div class="album-songs">
            <table class="song-list">
                <thead>
                    <tr>
                        <th class="song-number">#</th>
                        <th>标题</th>
                        <th>歌手</th>
                        <th class="song-duration">时长</th>
                    </tr>
                </thead>
                <tbody>
                    ${songs.map((song, index) => {
                        const displayTitle = song.title;
                        const displayArtist = song.artist;
                        const displayDuration = formatTime(song.duration);
                        return `
                        <tr>
                            <td class="song-number">${index + 1}</td>
                            <td>
                                <span class="play-song-btn" data-id="${song.id}">▶</span>
                                <span class="song-title">${displayTitle}</span>
                            </td>
                            <td class="song-artist">${displayArtist}</td>
                            <td class="song-duration">${displayDuration}</td>
                        </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;

    detailContent.querySelectorAll('.play-song-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const songId = parseInt(this.getAttribute('data-id'));
            const song = musicData.find(s => s.id === songId);
            playSong(song, songs);
        });
    });

    document.getElementById('playAllSongs')?.addEventListener('click', function () {
        if (songs.length > 0) {
            playSong(songs[0], songs);
            showToast(`已开始播放 ${title}`);
        }
    });
}

// 关闭所有侧边栏
function closeAllSidebars() {
    sidebar.classList.remove('active');
    mainContainer.classList.remove('sidebar-active');
    detailSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// 切换喜欢状态
function toggleLike() {
    if (!playerState.currentSong) return;

    const songId = playerState.currentSong.id;
    const index = userData.likedSongs.indexOf(songId);

    if (index === -1) {
        userData.likedSongs.push(songId);
        showToast('已添加到喜欢');
    } else {
        userData.likedSongs.splice(index, 1);
        showToast('已从喜欢中移除');
    }

    updateLikeButton();
}

// 更新喜欢按钮状态
function updateLikeButton() {
    if (!playerState.currentSong) return;

    const isLiked = userData.likedSongs.includes(playerState.currentSong.id);
    likeBtn.classList.toggle('liked', isLiked);
    likeBtn.innerHTML = isLiked? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
}

// 显示歌单选择器
function showPlaylistSelector() {
    if (!playerState.currentSong) return;

    detailContent.innerHTML = `
        <h3>添加到歌单</h3>
        <div class="playlist-selector">
            ${userData.playlists.map(playlist => `
                <div class="playlist-option" data-id="${playlist.id}">
                    <div class="playlist-cover">${playlist.cover}</div>
                    <div class="playlist-name">${playlist.name}</div>
                    <div class="playlist-count">${playlist.songs.length}首</div>
                    <div class="add-status">
                        ${playlist.songs.includes(playerState.currentSong.id)? '✓ 已添加' : '+'}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    detailContent.querySelectorAll('.playlist-option').forEach(option => {
        option.addEventListener('click', function () {
            const playlistId = parseInt(this.getAttribute('data-id'));
            const playlist = userData.playlists.find(p => p.id === playlistId);
            const songId = playerState.currentSong.id;

            if (!playlist.songs.includes(songId)) {
                playlist.songs.push(songId);
                this.querySelector('.add-status').textContent = '✓ 已添加';
                showToast(`已添加到 ${playlist.name}`);
            } else {
                playlist.songs = playlist.songs.filter(id => id!== songId);
                this.querySelector('.add-status').textContent = '+';
                showToast(`已从 ${playlist.name} 移除`);
            }
        });
    });

    detailSidebar.classList.add('active');
    overlay.classList.add('active');
}

// 切换区块显示
function toggleSection(target) {
    const section = document.getElementById(target);
    const btn = document.querySelector(`.toggle-btn[data-target="${target}"]`);

    if (section.style.maxHeight && section.style.maxHeight!== '0px') {
        section.style.maxHeight = '0px';
        section.style.padding = '0px';
        btn.innerHTML = '<i class="fas fa-plus"></i>';
    } else {
        section.style.maxHeight = '1000px';
        section.style.padding = '20px';
        btn.innerHTML = '<i class="fas fa-minus"></i>';
    }
}
// 显示Toast提示
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
//只
//为
//凑
//行
//数