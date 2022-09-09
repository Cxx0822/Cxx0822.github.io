const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	  {
        name: '断点',
        artist: '张敬轩',
        url: 'http://music.163.com/song/media/outer/url?id=189323.mp3',
        cover: 'http://p1.music.126.net/UwB8YHn4BWODYj_CuGt37w==/109951163520357845.jpg',
      },
  
	  
	  {
        name: '回梦游仙',
        artist: '骆集益',
        url: 'http://music.163.com/song/media/outer/url?id=28786838.mp3',
        cover: 'http://p2.music.126.net/0pni7yz15rknO9gE-9gJGQ==/18763165929885295.jpg',
      },

      {
        name: '千年缘',
        artist: '心然',
        url: 'http://music.163.com/song/media/outer/url?id=314315.mp3',
        cover: 'http://p1.music.126.net/dQl5FK6hkjrrr5Ph6tBbkQ==/18778559092796622.jpg',
      }

    ]
});

