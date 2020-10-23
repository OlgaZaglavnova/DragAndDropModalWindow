const modalWindowClose = document.getElementById('closeModal');
const modalWindowBck = document.getElementById('modalBackground');
// const modalWindow = document.querySelector('.modalWindow');
const modalsOKbtn = document.querySelector('.modalsOKbtn');
const modalsCount = document.querySelector('.modalsCount');
const button = document.querySelector('.button');

button.addEventListener('click', (e) => {
    modalWindowBck.classList.remove('hidden');
});

modalWindowClose.addEventListener('click', (e) => {
    modalWindowBck.classList.add('hidden');
});

// let modalWindowTop = modalWindow.getBoundingClientRect().top;
// let modalWindowLeft = modalWindow.getBoundingClientRect().left;
// console.log('ModalWindow.top', modalWindowTop);
// console.log('ModalWindow.left', modalWindowLeft);

// let xStart = 0;
// let yStart = 0;
// let xFin = 0;
// let yFin = 0;
// let deltaX = 0;
// let deltaY = 0;

// modalWindow.addEventListener('mousedown', (e) => {
//     xStart = e.x;
//     yStart = e.y;
//     console.log('mousedown', xStart, yStart);
// });
// modalWindow.addEventListener('mouseup', (e) => {
//     xFin = e.x;
//     yFin = e.y;
//     console.log('mouseup', xFin, yFin);
//     deltaX = xFin - xStart;
//     deltaY = yFin - yStart;
//     modalWindowLeft = modalWindowLeft + deltaX;
//     modalWindowTop = modalWindowTop + deltaY;
//     console.log('mouseup deltaX=', deltaX);
//     console.log('mouseup deltaY=', deltaY);
//     modalWindow.style.top=modalWindowTop+"px";
//     modalWindow.style.left=modalWindowLeft+"px";
// });

modalsOKbtn.addEventListener('click', (e) => {
    console.log(modalsCount.value);
    let windowsCount = modalsCount.value;
    for (let i = 1; i <= windowsCount; i++){
        let tmpDiv = document.createElement('div');
        tmpDiv.id = i + "window";
        tmpDiv.className = "dynamicModal";
        tmpDiv.innerText = `Модальное окно №${i}`;
        let tmpCloseDiv = document.createElement('div');
        tmpCloseDiv.id = i +"close";
        tmpCloseDiv.className = "closeModal";
        tmpCloseDiv.innerText = "*";
        document.body.appendChild(tmpDiv);
        tmpDiv.appendChild(tmpCloseDiv);
        const iwin = document.getElementById(`${i}window`);
        iwin.style.top = 100*i + "px";
        iwin.style.left = 100*i + "px";
        document.getElementById(`${i}close`).addEventListener('click', (e) => {
            document.body.removeChild(iwin);
        });
        console.log('created window #', i)
    }
})

const modalWindow = document.getElementById('modalWindow');

modalWindow.onmousedown = function(e) {

  let coords = getCoords(modalWindow);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  modalWindow.style.position = 'absolute';
//   document.body.appendChild(modalWindow);
  moveAt(e);

  modalWindow.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    modalWindow.style.left = e.pageX - shiftX + 'px';
    modalWindow.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  modalWindow.onmouseup = function() {
    document.onmousemove = null;
    modalWindow.onmouseup = null;
  };

}

modalWindow.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}


