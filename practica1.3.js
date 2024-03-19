class Size {        //1. Clase Size
  constructor(width = 80, height = 60){
    this.width = width;
    this.width = heigth;
  }

  resize(newWidth, newHeigth){
    this.width = newWidth;
    this.heigth = newHeigth;
  }
}

class Position {     //2. Clase Position
  constructor(x = 0, y= 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newx;
    this.y = newy;
  }
}

class ProgramWindonw {  //3. Clase Programwindow
  constructor() {
    this.screenSize = new Size (800, 600);
    this.size = new Size ();
    this.position = new Position();
  }
}
