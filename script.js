TinyTurtle.apply(window);
function square(width) {
    forward(width);
    left(90);
    forward(width);
    left(90);
    forward(width);
    left(90);
    forward(width);
}

square(40);
square(55);
square(55);
square(40);
square(25);
square(25);
square(25);
square(25);


stamp();
function triangle() { 
    forward(45);
    right(120);
    forward(45);
    right(120);
    forward(45);  
}
triangle();
triangle();
triangle();
stamp();


