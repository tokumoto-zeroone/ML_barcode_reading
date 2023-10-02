// カメラから画像をキャプチャする
navigator.mediaDevices.getUserMedia({ video: {
    width: { ideal: 500 },
	height: { ideal: 300 },}
 }).then(function (stream) {
    // カメラストリームをビデオ要素に関連付ける
    const video = document.querySelector('video');
    video.srcObject = stream;
    video.play();

    // バーコードリーダーライブラリを初期化
    const codeReader = new ZXing.BrowserMultiFormatReader();

    // バーコードを読み取るコード
    codeReader.decodeFromVideoDevice(null, 'video', (result, err) => {
      if (result) {
        console.log('バーコードが読み取られました');
        var textbox = document.getElementById("read_result");
        textbox.value = result.text;
      } else {
	      if (err instanceof ZXing.NotFoundException) {
	        console.log('No QR code found.');
	      }

	      if (err instanceof ZXing.ChecksumException) {
	        console.log('A code was found, but it\'s read value was not valid.');
	      }

	      if (err instanceof ZXing.FormatException) {
	        console.log('A code was found, but it was in a invalid format.');
	      }
      }
    });
  })
  .catch(function (error) {
    console.error('カメラアクセスエラー:', error);
  });