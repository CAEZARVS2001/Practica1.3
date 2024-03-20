class Size {        //1. Clase Size
  constructor(width = 80, height = 60){
    if(width <= 1 || height <= 1){ // Verifica si el tamaño es inválido
      this.Width = 1;
      this.Heigth = 1;
      console.log(`El tamaño es inválido, se inicializo la ventana con el minimo tamaño: (1,1)`);
    }else{
      this.Width = width;
      this.Heigth = height;
    }
  }
  // Modifica el tamaño de la ventana
  resize(newWidth = 80, newHeigth = 60){
    if(width <= 1 || height <= 1){ // Verifica si el tamaño es inválido
      this.Width = 1;
      this.Heigth = 1;
      console.log(`El tamaño es inválido, se inicializo la ventana con el minimo tamaño: (1,1)`);
    }else{
      this.Width = width;
      this.Heigth = height;
    }
  }
  // Muestra el tamaño de la ventana
  showSize(){
    console.log(`La ventana tiene un Width: ${this.Width} y un Height: ${this.Heigth}`);
  }
}

class Position {     //2. Clase Position
  constructor(x = 0, y = 0) {
    if(x < 0 || y < 0){ // Verifica si la posición es inválida
      this.X = 0;
      this.Y = 0;
      console.log(`No se aceptan valores negativos, se inicializo la posición en (0,0)`);  
    }else{ // La posición es válida
      this.X = x;
      this.Y = y;
    }
  }
  // Modifica la posición de la ventana
  move(newX, newY) {
    if(newX < 0 || newY < 0){ // Verifica si la posición es inválida
      this.X = 0;
      this.Y = 0;
      console.log(`No se aceptan valores negativos, se inicializo la posición en (0,0)`);  
    }else{ // La posición es válida
      this.X = newX;
      this.Y = newY;
    }
  }
  // Muestra la posición de la ventana
  showPosition(){
    console.log(`La posición es: (${this.X}, ${this.Y})`);
  }
}

class ProgramWindow {  //3. Clase Programwindow
  constructor() {
    this.screenSize = new Size (800, 600);
    this.size = new Size ();
    this.position = new Position();
  }
  // 4. Modificar el tamaño de la ventana del programa
  resize(newSize){  
    if((newSize.Width > (this.screenSize.Width - this.position.X)) && (newSize.Heigth > (this.screenSize.Heigth - this.position.Y))){
      newSize.resize(this.screenSize.Width - this.position.X, this.screenSize.Heigth - this.position.Y);
      this.size = newSize;
    }else if((newSize.Width <= (this.screenSize.Width - this.position.X)) && (newSize.Heigth > (this.screenSize.Heigth - this.position.Y))){
      newSize.resize(newSize.Width, this.screenSize.Heigth - this.position.Y);
      this.size = newSize;
    }else if((newSize.Width > (this.screenSize.Width - this.position.X)) && (newSize.Heigth <= (this.screenSize.Heigth - this.position.Y))){
      newSize.resize(this.screenSize.Width - this.position.X, newSize.Heigth);
      this.size = newSize;
    }else{
      this.size = newSize;
    }
  }
  // 5. Mueve la posición de la ventana del programa
  move(newPosition){
    if((newPosition.X > (this.screenSize.Width - this.size.Width)) && (newPosition.Y > (this.screenSize.Heigth - this.size.Heigth))){
        newPosition.move(this.screenSize.Width - this.size.Width, this.screenSize.Heigth - this.size.Heigth);
        this.position = newPosition;
    }else if((newPosition.X > (this.screenSize.Width - this.size.Width)) && (newPosition.Y <= (this.screenSize.Heigth - this.size.Heigth))){
        newPosition.move(this.screenSize.Width - this.size.Width, newPosition.Y);
        this.position = newPosition;
    }else if((newPosition.X <= (this.screenSize.Width - this.size.Width)) && (newPosition.Y > (this.screenSize.Heigth - this.size.Heigth))){
        newPosition.move(newPosition.X, this.screenSize.Width - this.size.Width);
        this.position = newPosition;
    }else{
        this.position = newPosition;
    }
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

// Crear una ventana de tamaño size
const v1 = new Size(1080, 764);
v1.showSize();
v1.resize();
v1.showSize();
console.log();

// Crear una ventana con cierta posición
const v2 = new Position();
v2.showPosition(); 
v2.move(100,200);
v2.showPosition();

// Crear una ventana del programa
const ventana = new ProgramWindow();

// Mostrar el tamaño de la pantalla
console.log("\nEl tamaño de la pantalla es:");
ventana.screenSize.showSize();

// Modificar el tamaño de la ventana
console.log("\nEl tamaño actual de la ventana es:")
ventana.size.showSize();
ventana.resize(new Size(400, 400));
console.log("El nuevo tamaño es:");
ventana.size.showSize();

// Modificar la posición de la ventana del programa
console.log("\nLa posición actual de la ventana es:")
ventana.position.showPosition();
ventana.move(new Position(200, 100));
console.log("La nueva posición es:");
ventana.position.showPosition();
console.log();

// Ejecutar la función changeWindow
const programWindow1 = new ProgramWindow();
changeWindow(programWindow1);
programWindow1.size.showSize();
programWindow1.position.showPosition();