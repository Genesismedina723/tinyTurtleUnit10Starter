TinyTurtle.apply(window, [undefined, 400, 400]);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}

function triangle(x) {
    forward(x);
    right(120);
    forward(x);
    right(120);
    forward(x);
}

function rectangle(x) {
 forward(x);
 right(75);
 forward(x);
 right(75);
}

function house(x){
    forwards(x);
   right(50); 
} 

function pentagon(x) {
forward (x);
right(50);

}


function hexagon(x) {
    forwars(x);
    right(60);
    
}
// Type your function call below
rectangle(70);
stamp();

triangle(75);
stamp();

house(70);
stamp();

pentagon(50);
stamp();

hexagon(50);
stamp();

square(50);
stamp();