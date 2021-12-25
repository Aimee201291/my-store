const username: string = 'nicobytes';
const username2: string | number = 1;

const sum = (a: number, b: number) => {
    return a + b;
}

sum(1,2);

class Person {
    age: number;
    lastName: string;

    constructor(age: number, lastName: string) {
        this.age = age;
        this.lastName = lastName;
    }
}

const nico = new Person(15, 'Molina');

//Como por defecto las variables son públicas es posible hacer:
nico.age; //Si age fuera privada, no podría hacer esto


//La clase Person se podría escribir como la siguiente clase Person2
//Al ser age y lastName variables públicas, ya los convierte en atributos públicos de la clase
//y el valor que le envíe al constructor se asigna
class Person2 {
    
    constructor(public age: number, public lastName: string) {}

}


