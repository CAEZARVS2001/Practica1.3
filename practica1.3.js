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

  resize(newSize) {  // 4.a. Metodo resize para resimensionar la ventana que acepta como parametro un tipo size
    this.size.resize(newSize.width, newSize.height);
  }

  mover(newPosition){  //5.a. Metodo para mover la ventana

    this.position = newPosition;
  }

}

function changeWindow(programWindow) {   //6. funcion changeWindow que cambia la ventana de un programa
  // Cambiar el tamaño de la ventana
  programWindow.size.resize(400, 300);
  
  // Cambiar la posición de la ventana
  programWindow.position.move(100, 150);
  
  // Devolver la instancia de ProgramWindow con los cambios aplicados
  return programWindow;
}