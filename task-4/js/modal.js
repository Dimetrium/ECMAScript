var modalWindow = {

  initBlock: function () {
    block = document.getElementById('blockscreen');
    block.style.display = 'inline';
    setTimeout(function () {
      block.style.opacity = '0.5';
    }, 10)
    block.onclick = function () {
      modalWindow.close();
    };
  },
  initWin: function () {
    win = document.getElementById('modal-window');
    buttonClose = document.getElementById('btn-close');
    win.style.display = 'block';
    setTimeout(function () {
      win.style.top = '0';
    }, 10);
    buttonClose.onclick = function () {
      modalWindow.close();
    };
  },
  close: function () {
    blockClose = document.getElementById('blockscreen');
    winClose = document.getElementById('modal-window');
    setTimeout(function () {
      winClose.style.top = '-270px';
      blockClose.style.opacity = '0';
    }, 10);
    setTimeout(function () {
      blockClose.style.display = 'none';
    }, 900);
  },
  show: function () {
    modalWindow.initBlock();
    modalWindow.initWin();
  }
};