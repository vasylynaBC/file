function Human(speak, work){
    this.speak=speak;
    this.work=work;
    
}

var newHuman=new Human(true, true);

function Man(name, age){
    this.name=name;
    this.age=age;
}

Man.prototype=newHuman;

var newMan=new Man("vasia", 38);

console.log("Man speak- " + newMan.speak);

function Hunter(animal, weapon)
{
    this.animal=animal;
    this.weapon=weapon;
};

function Worker(dig, city){
    this.dig=true;
    this.city="Lviv"
};
Hunter.prototype=newMan;

Worker.prototype=newMan;

var newHunter=new Hunter("bear, fox, lion", true);

var newWorker=new Worker();

console.log('Woker live in - '+ newWorker.city + newWorker.work);

console.log('Hunter weapon on animals - '+ newHunter.weapon +  newHunter.animal);


function Woman(name, hair){
    this.name=name;
    this.hair=hair;
}

Woman.prototype=newHuman;

var newWoman=new Woman("olia", "black");

console.log("Woman speak- " + newWoman.speak);
console.log("Woman name- " + newWoman.name);

function Librarian(read, write){
    this.read=read;
    this.write=write;
};
function Nurse(medicine, injection){
    this.medicine=medicine;
    this.injection=injection;
};

Librarian.prototype=newWoman;
Nurse.prototype=newWoman;

var newNurse= new Nurse(true, true);
var newLibrarian= new Librarian(true, true);
console.log("Nurse medicine- "+ newNurse.medicine);
console.log("Librarian read- "+ newLibrarian.read);



/////// 

function Animal(count, continent){
    this.count=count;
    this.continent=continent;
};
var newAnimal= new Animal(120, "Azia");

function Herbivorous(kind, place){
    this.kind=kind;
    this.place=place;
};
 function Predator(color, predCount){
     this.color=color;
     this.predCount=predCount;
 };
Herbivorous.prototype=newAnimal;

Predator.prototype=newAnimal;
 var newHerbivorous= new Herbivorous("shakes", "river");
 var newPredator= new Predator("gray", 16);

console.log("AnimHerd where and kind: "+ newHerbivorous.continent +" "+ newHerbivorous.kind);
console.log("AnimPred color and counr: "+ newPredator.predCount +' '+ newPredator.color);


function Wolf(wolfage, massa)
{
    this.wolfage=wolfage;
    this.massa=massa;
}

function Tiger(tigerAge){
    this.tigerAge=tigerAge;
}

Wolf.prototype=newPredator;
Tiger.prototype=newPredator;
var newWolf=new Wolf(2, 5);
var newTiger=new Tiger(3);

console.log("Wolf massa, color: " + newWolf.massa + ' '+ newWolf.predCount);
console.log("Tiger age : " + newTiger.tigerAge + ' '+ newTiger.color);


function Rabbit(colorRab){
    this.colorRab=colorRab;
};
function Cow(eat){
    this.eat=eat;
}

Rabbit.prototype=newHerbivorous;
Cow.prototype=newHerbivorous;
var newRabbit= new Rabbit("green");
var newCow=new Cow(true);

 console.log("Rabbit kindand color: " + newRabbit.kind + ' '+ newRabbit.colorRab);
console.log("Cow eat and place: " + newCow.eat + ' '+ newCow.place);


/////




  function Zoo(residents, worker){
      this.residents=residents;
      this.worker= worker;
  };
var newZoo = new Zoo(true, true);

 newAnimal.prototype=newZoo;
 newHuman.prototype=newZoo;

console.log("Animal live in Zoo? - " + newAnimal.prototype.residents);
console.log("Human work in Zoo? - " + newHuman.prototype.worker);


newNurse.prototype=newCow;
newHunter.prototype=newTiger;
newLibrarian.prototype=newRabbit;
newWorker.prototype=newWolf;


console.log("Nurse medicine Cow - " + newNurse.injection + ", cow is- " +newCow.continent);
console.log("Hunter pow in Tiger - " + newHunter.weapon );
console.log("Librarian read Rabbit - " + newLibrarian.read);
console.log("Worker dig wolf - " + newWorker.dig);



