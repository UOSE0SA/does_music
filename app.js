// app.js - 完整版本（含进度条功能）
const playerState = {
    audio: new Audio(),
    currentSong: null,
    isPlaying: false,
    volume: 0.7,
    isMuted: false,
    currentPlaylist: [],
    currentIndex: -1,
    repeatMode: 'list'
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
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const mainContainer = document.getElementById('mainContainer');
const detailSidebar = document.getElementById('detailSidebar');
const detailContent = document.getElementById('detailContent');
const overlay = document.getElementById('overlay');

// 进度条相关元素
const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

// 初始化
document.addEventListener('DOMContentLoaded', function () {
    renderAlbums();
    renderMusicLibrary();

    playerState.audio.volume = playerState.volume;

    // 事件监听
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        renderAlbums(searchTerm);
        renderMusicLibrary(searchTerm);
    });

    playBtn.addEventListener('click', togglePlay);
    repeatBtn.addEventListener('click', toggleRepeatMode);

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

    // 音频事件监听
    playerState.audio.addEventListener('timeupdate', updateProgress);
    playerState.audio.addEventListener('loadedmetadata', updateDuration);
    playerState.audio.addEventListener('ended', handleSongEnded);

});

// ======================
// 播放控制功能
// ======================

function playSong(song, playlist = null) {
    playerState.currentSong = song;
    playerState.audio.src = song.audioUrl;
    
    // 重置进度显示
    progressBar.style.width = '0%';
    currentTimeEl.textContent = '00:00';
    
    if (playlist) {
        playerState.currentPlaylist = playlist;
        playerState.currentIndex = playlist.findIndex(s => s.id === song.id);
    }
    
    playerState.audio.play()
        .then(() => {
            playerState.isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            updatePlayerInfo();
        })
}

// 引入樱花特效函数
function startSakuraEffect() {
    const container = document.createElement('div');
    container.id = 'sakura-container';
    document.body.appendChild(container);

    function createSakura() {
        const sakura = document.createElement('div');
        sakura.classList.add('sakura');
        sakura.style.left = Math.random() * window.innerWidth + 'px';
        sakura.style.animationDuration = (Math.random() * 10 + 5) + 's';
        document.getElementById('sakura-container').appendChild(sakura);

        setTimeout(() => {
            sakura.remove();
        }, 15000);
    }

    setInterval(createSakura, 500);
}

function stopSakuraEffect() {
    const container = document.getElementById('sakura-container');
    if (container) {
        container.remove();
    }
}

// 定义播放器对象，用于管理所有方法和属性
const musicPlayer = {
    bar: null,
    container: null,
    currentTimeEl: null,
    durationEl: null,
    
    // 初始化播放器
    init() {
        this.bar = document.getElementById('progressBar');
        this.container = document.getElementById('progressContainer');
        this.currentTimeEl = document.getElementById('currentTime');
        this.durationEl = document.getElementById('duration');
        
        // 绑定事件处理函数，确保上下文正确
        this.container.addEventListener('click', (e) => this.handleClick(e));
        playerState.audio.addEventListener('timeupdate', () => this.updateProgress());
        playerState.audio.addEventListener('ended', () => this.handleSongEnded());
        playerState.audio.addEventListener('loadedmetadata', () => this.updateDuration());
    },
    
    // 处理进度条点击事件
    handleClick(e) {
        const progressWidth = this.container.clientWidth;
        const clickPosition = e.offsetX;
        const seekTime = (clickPosition / progressWidth) * playerState.audio.duration;
        playerState.audio.currentTime = seekTime;
    },
    
    // 更新进度条和时间显示
    updateProgress() {
        const progress = (playerState.audio.currentTime / playerState.audio.duration) * 100;
        this.bar.style.width = `${progress}%`;
        
        // 更新当前时间显示
        this.currentTimeEl.textContent = this.formatTime(playerState.audio.currentTime);
        
        // 检查樱花特效触发条件
        if (playerState.currentSong && 
            playerState.currentSong.title === '花开的时候你就来看我' && 
            playerState.audio.currentTime >= 59) {
            startSakuraEffect();
        }
    },
    
    // 处理歌曲结束事件
    handleSongEnded() {
        stopSakuraEffect();
        
        // 自动播放下一首
        const currentIndex = playerState.songs.findIndex(song => 
            song.id === playerState.currentSong.id
        );
        const nextIndex = (currentIndex + 1) % playerState.songs.length;
        loadSong(playerState.songs[nextIndex]);
        playSong();
    },
    
    // 更新歌曲总时长显示
    updateDuration() {
        this.durationEl.textContent = this.formatTime(playerState.audio.duration);
    },
    
    // 格式化时间为 MM:SS 格式
    formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
};

// 初始化播放器
window.onload = () => {
    musicPlayer.init();
};

function togglePlay() {
    if (!playerState.currentSong) {
        const firstSong = musicData[0];
        if (firstSong) playSong(firstSong, musicData);
        return;
    }

    if (playerState.isPlaying) {
        playerState.audio.pause();
        playerState.isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        playerState.audio.play()
            .then(() => {
                playerState.isPlaying = true;
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            });
    }
}

function handleSongEnded() {
    if (playerState.repeatMode === 'one') {
        playerState.audio.currentTime = 0;
        playerState.audio.play();
    } else {
        playNextSong();
    }
}

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

// ======================
// 进度条功能
// ======================

function updateProgress() {
    if (!playerState.currentSong || !playerState.audio.duration) return;
    
    const { currentTime, duration } = playerState.audio;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(currentTime);
}

function updateDuration() {
    if (playerState.audio.duration === Infinity) {
        durationEl.textContent = '∞';
    } else {
        durationEl.textContent = formatTime(playerState.audio.duration);
    }
}

progressContainer.addEventListener('click', function(e) {
    if (!playerState.currentSong || !playerState.audio.duration) return;
    
    const rect = this.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const duration = playerState.audio.duration;
    
    const newTime = (clickX / width) * duration;
    playerState.audio.currentTime = newTime;
    
    // 立即更新UI
    progressBar.style.width = `${(newTime / duration) * 100}%`;
    currentTimeEl.textContent = formatTime(newTime);
});

// ======================
// 播放器信息更新
// ======================

function updatePlayerInfo() {
    if (!playerState.currentSong) return;
    
    playerTitle.textContent = playerState.currentSong.title;
    playerArtist.textContent = playerState.currentSong.artist;
    
    const cover = playerState.currentSong.cover;
    const isImage = cover.match(/\.(jpg|jpeg|png|gif|webp)$/i) || 
                   cover.startsWith('http') || 
                   cover.startsWith('assets/') || 
                   cover.startsWith('./');
    
    playerCover.innerHTML = '';
    if (isImage) {
        const img = document.createElement('img');
        img.src = cover;
        img.alt = playerState.currentSong.title;
        img.onerror = function() {
            playerCover.textContent = '🎵';
        };
        playerCover.appendChild(img);
    } else {
        playerCover.textContent = cover;
    }
}

// ======================
// 播放模式控制
// ======================
const REPEAT_MODES = {
    LIST: 'list',
    ONE: 'one',
    RANDOM: 'random'
};

function toggleRepeatMode() {
    const modes = Object.values(REPEAT_MODES);
    const currentIndex = modes.indexOf(playerState.repeatMode);
    playerState.repeatMode = modes[(currentIndex + 1) % modes.length];
    
    // 更新按钮状态
    repeatBtn.textContent = {
        [REPEAT_MODES.LIST]: '🔁',
        [REPEAT_MODES.ONE]: '🔂',
        [REPEAT_MODES.RANDOM]: '🔀'
    }[playerState.repeatMode];
    
    repeatBtn.title = {
        [REPEAT_MODES.LIST]: '列表循环',
        [REPEAT_MODES.ONE]: '单曲循环',
        [REPEAT_MODES.RANDOM]: '随机播放'
    }[playerState.repeatMode];
}

// ======================
// 播放队列管理
// ======================
function handleSongEnded() {
    switch(playerState.repeatMode) {
        case REPEAT_MODES.ONE:
            playerState.audio.currentTime = 0;
            playerState.audio.play();
            break;
            
        case REPEAT_MODES.RANDOM:
            playRandomSong();
            break;
            
        default: // LIST模式
            playNextSong();
    }
}

function playNextSong() {
    if (playerState.currentPlaylist.length === 0) return;
    
    let newIndex = playerState.currentIndex + 1;
    
    // 处理列表循环
    if (newIndex >= playerState.currentPlaylist.length) {
        if (playerState.repeatMode === REPEAT_MODES.LIST) {
            newIndex = 0;
        } else {
            return; // 非循环模式停止播放
        }
    }
    
    playSongByIndex(newIndex);
}

function playRandomSong() {
    if (playerState.currentPlaylist.length === 0) return;
    
    // 生成不重复随机索引
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * playerState.currentPlaylist.length);
    } while (newIndex === playerState.currentIndex && playerState.currentPlaylist.length > 1);
    
    playSongByIndex(newIndex);
}

function playSongByIndex(index) {
    index = Math.max(0, Math.min(index, playerState.currentPlaylist.length - 1));
    const song = playerState.currentPlaylist[index];
    playerState.currentIndex = index;
    playSong(song, playerState.currentPlaylist);
}

// ======================
// 初始化修正
// ======================
document.addEventListener('DOMContentLoaded', function() {
    // 确保绑定ended事件
    playerState.audio.addEventListener('ended', handleSongEnded);
    
    // 其他初始化代码...
});

// ======================
// 侧边栏功能
// ======================

function toggleSidebar() {
    sidebar.classList.toggle('active');
    mainContainer.classList.toggle('sidebar-active');
}

// ======================
// 其他功能
// ======================

function toggleSection(target) {
    const section = document.getElementById(target);
    const btn = document.querySelector(`.toggle-btn[data-target="${target}"]`);

    if (section.style.maxHeight && section.style.maxHeight !== '0px') {
        section.style.maxHeight = '0px';
        section.style.padding = '0px';
        btn.innerHTML = '<i class="fas fa-plus"></i>';
    } else {
        section.style.maxHeight = '1000px';
        section.style.padding = '20px';
        btn.innerHTML = '<i class="fas fa-minus"></i>';
    }
}

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

function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(Math.abs(seconds) / 60);
    const secs = Math.floor(Math.abs(seconds) % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// 专辑和音乐库渲染函数
function renderAlbums(searchTerm = '') {
    albumContainer.innerHTML = '';
    
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'album-scroll-container';
    
    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'album-details-container';
    
    albumContainer.appendChild(scrollContainer);
    albumContainer.appendChild(detailsContainer);
    
    albums.forEach(album => {
        const albumSongs = musicData.filter(song => 
            album.songs.includes(song.id) && 
            (!searchTerm || 
             song.title.toLowerCase().includes(searchTerm) || 
             song.artist.toLowerCase().includes(searchTerm) ||
             song.album.toLowerCase().includes(searchTerm))
        );
        
        if (albumSongs.length === 0 && searchTerm) return;
        
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card';
        albumCard.dataset.id = album.id;
        
        let albumCoverHTML;
        if (album.cover.match(/\.(jpg|jpeg|png|gif|webp)$/i) || 
            album.cover.startsWith('http') || 
            album.cover.startsWith('assets/') || 
            album.cover.startsWith('./')) {
            albumCoverHTML = `<img src="${album.cover}" alt="${album.title}" onerror="this.parentNode.innerHTML='🎵'">`;
        } else {
            albumCoverHTML = `<div>${album.cover}</div>`;
        }
        
        albumCard.innerHTML = `
            <div class="album-card-cover">${albumCoverHTML}</div>
            <div class="album-card-info">
                <div class="album-card-title">${album.title}</div>
                <div class="album-card-artist">${album.artist}</div>
            </div>
        `;
        
        const albumDetail = document.createElement('div');
        albumDetail.className = 'album-detail';
        albumDetail.id = `albumDetail-${album.id}`;
        
        albumDetail.innerHTML = `
            <div class="album-header">
                <div class="album-cover">${albumCoverHTML}</div>
                <div class="album-info">
                    <div class="album-title">${album.title}</div>
                    <div class="album-artist">${album.artist}</div>
                    <div class="album-description">${album.description}</div>
                </div>
            </div>
            <div class="album-songs">
                <button class="play-all-btn">
                    <i class="fas fa-play"></i> 播放全部
                </button>
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
                        ${albumSongs.map((song, index) => `
                            <tr>
                                <td class="song-number">${index + 1}</td>
                                <td>
                                    <span class="play-song-btn" data-id="${song.id}">▶</span>
                                    <span class="song-title">${song.title}</span>
                                </td>
                                <td class="song-artist">${song.artist}</td>
                                <td class="song-duration">${formatTime(song.duration)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        albumCard.addEventListener('click', function() {
            document.querySelectorAll('.album-detail').forEach(detail => {
                detail.classList.remove('active');
            });
            
            albumDetail.classList.add('active');
            
            setTimeout(() => {
                albumDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
        
        albumDetail.querySelector('.play-all-btn').addEventListener('click', () => {
            if (albumSongs.length > 0) {
                playSong(albumSongs[0], albumSongs);
                showToast(`开始播放专辑: ${album.title}`);
            }
        });
        
        albumDetail.querySelectorAll('.play-song-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const songId = parseInt(this.dataset.id);
                const song = musicData.find(s => s.id === songId);
                playSong(song, albumSongs);
            });
        });
        
        scrollContainer.appendChild(albumCard);
        detailsContainer.appendChild(albumDetail);
    });
}

function renderMusicLibrary(searchTerm = '') {
    const filteredSongs = searchTerm 
        ? musicData.filter(song => 
            song.title.toLowerCase().includes(searchTerm) || 
            song.artist.toLowerCase().includes(searchTerm) ||
            song.album.toLowerCase().includes(searchTerm))
        : musicData;
    
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
                        ${filteredSongs.map((song, index) => `
                            <tr>
                                <td class="song-number">${index + 1}</td>
                                <td>
                                    <span class="play-song-btn" data-id="${song.id}">▶</span>
                                    <span class="song-title">${song.title}</span>
                                </td>
                                <td class="song-artist">${song.artist}</td>
                                <td class="song-album">${song.album}</td>
                                <td class="song-duration">${formatTime(song.duration)}</td>
                            </tr>
                        `).join('')}
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

// 进度条功能模块
const progress = {
    init() {
        this.bar = document.getElementById('progressBar');
        this.container = document.getElementById('progressContainer');
        this.currentTimeEl = document.getElementById('currentTime');
        this.durationEl = document.getElementById('duration');
        
        // 绑定事件
        this.container.addEventListener('click', (e) => this.handleClick(e));
        playerState.audio.addEventListener('timeupdate', () => this.update());
        playerState.audio.addEventListener('loadedmetadata', () => this.updateDuration());
    },

    handleClick(e) {
        if (!playerState.currentSong) return;
        
        // 精确计算点击位置
        const rect = this.container.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = clickX / rect.width;
        
        // 设置播放时间
        const newTime = percent * playerState.audio.duration;
        playerState.audio.currentTime = newTime;
        
        // 立即更新显示
        this.bar.style.width = `${percent * 100}%`;
        this.currentTimeEl.textContent = this.formatTime(newTime);
    },

    update() {
        if (!playerState.currentSong) return;
        
        const currentTime = playerState.audio.currentTime;
        const duration = playerState.audio.duration;
        
        // 有效性检查
        if (isNaN(currentTime)) return;
        if (duration <= 0) return;
        
        // 更新进度
        const percent = currentTime / duration;
        this.bar.style.width = `${percent * 100}%`;
        this.currentTimeEl.textContent = this.formatTime(currentTime);
    },

    updateDuration() {
        const duration = playerState.audio.duration;
        this.durationEl.textContent = this.formatTime(duration);
    },

    formatTime(seconds) {
        if (isNaN(seconds)) return "00:00";
        const absSec = Math.floor(Math.abs(seconds));
        return `${Math.floor(absSec/60).toString().padStart(2,'0')}:${(absSec%60).toString().padStart(2,'0')}`;
    }
};

// 初始化时调用
document.addEventListener('DOMContentLoaded', () => progress.init());