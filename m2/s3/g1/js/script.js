class User {
    constructor(firstName, lastName, age, location, genre) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
        this.genre = genre;
        this.genreEnd = null;
        this.longName = `${this.firstName} ${this.lastName}`;
        this.determineGenre();
    }

    determineGenre() {
        if (this.genre === 'M') this.genreEnd = 'o';
        if (this.genre === 'F') this.genreEnd = 'a';
    }

    isOlderThan(user) {
        if (this.age > user.age) return `${this.longName} è più vecchi${this.genreEnd} di ${user.longName}`;
        if (this.age < user.age) return `${user.longName} è più vecchi${user.genreEnd} di ${this.longName}`;
        if (this.age === user.age) return `${this.longName} e ${user.longName} hanno la stessa età`;
    }
}

const user1 = new User('Giulio', 'Marinelli', 32, 'Latisana', 'M');
const user2 = new User('Mario', 'Rossi', 24, 'Roma', 'M');
const user3 = new User('Giampierugo', 'Spalletti', 60, 'Ferrara', 'M');
const user4 = new User('Valentina', 'Padrini', 31, 'Udine', 'F');
const user5 = new User('Elisabetta', 'Baci', 35, 'Bibione', 'F');
console.table(user1, user2, user3, user4, user5);
console.log(user1.isOlderThan(user2) + '\n' + user1.isOlderThan(user3) + '\n' + user2.isOlderThan(user5) + '\n' + user4.isOlderThan(user1));

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    hasPetTheSameOwner(pet) {
        return this.ownerName === pet.ownerName ? true : false;
    }
}

const cane = new Pet('Pippo', 'Gianfranco', 'cane', 'golden retriever');
const cane1 = new Pet('Chanel', 'Gianfranco', 'cane', 'golden retriever');
const cane2 = new Pet('Dodo', 'Marialuisa', 'cane', 'meticcio');
console.log(cane.hasPetTheSameOwner(cane1));
console.log(cane1.hasPetTheSameOwner(cane2));

class App {
    constructor(id) {
        this.firstListTag = 'ol';
        this.secondListTag = 'ul';
        this.id = id;
        this.form = 'form';
        this.formFieldsIds = ['petName', 'ownerName', 'species', 'breed'];
        this.placeholders = ['Nome dell\'animale...', 'Proprietario dell\'animale...', 'specie dell\'animale...', 'razza dell\'animale...'];
        this.init();
    }
    init() {
        const app = document.getElementById(this.id);
        const form = document.createElement('form');
        form.id = this.form;
        this.formFieldsIds.forEach((el, ind) => {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = el;
            input.placeholder = this.placeholders[ind];
            form.append(input);
        })
        const button = document.createElement('button');
        button.innerText = 'Invia';
        button.id = 'submit';
        form.append(button);
        app.append(form);
        const list = document.createElement(this.firstListTag);
        list.id = 'list';
        app.append(list);
        this.formSubmitControl();
    }
    getFormElement() {
        return document.getElementById('form');
    }
    getPetName() {
        return document.getElementById('petName').value;
    }
    getOwnerName() {
        return document.getElementById('ownerName').value;
    }
    getSpecies() {
        return document.getElementById('species').value;
    }
    getBreed() {
        return document.getElementById('breed').value;
    }
    formSubmitControl() {
        this.getFormElement().addEventListener('submit', (e) => {
            e.preventDefault();
            const obj = new Pet(this.getPetName(), this.getOwnerName(), this.getSpecies(), this.getBreed());
            this.getFormElement().reset()
            this.addItemToList(obj);
        })
    }

    addItemToList(obj) {
        const li = document.createElement('li');
        li.innerHTML = '<strong>Nuovo animale aggiunto</strong>';
        const firstList = document.getElementById('list');
        const secondList = document.createElement(this.secondListTag);
        const liTexts = [obj.petName, obj.ownerName, obj.species, obj.breed];
        liTexts.forEach((el, ind) => {
            const li = document.createElement('li');
            li.innerHTML = `${this.placeholders[ind].replace('...', '')}: <em>${el}</em>`;
            secondList.append(li);
        })
        li.append(secondList);
        firstList.append(li);
    }
}

new App('app');