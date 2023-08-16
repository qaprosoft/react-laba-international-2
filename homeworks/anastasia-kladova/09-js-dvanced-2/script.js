class Serializable {
    serialize() {

    }

    wakeFrom(serialized) {
        
    }
}

class UserDTO extends Serializable {
    constructor({firstName, lastName, phone, birth}) {
      super();
  
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this.birth = birth;
    }
  
    printInfo() {
      console.log(
        `${this.firstName[0]}. ${this.lastName} - ${
          this.phone
        }, ${this.birth.toISOString()}`,
      );
    }
  }

  class Post extends Serializable {
    constructor({content, date, author}) {
      super();
  
      this.content = content;
      this.date = date;
      this.author = author;
    }
  }