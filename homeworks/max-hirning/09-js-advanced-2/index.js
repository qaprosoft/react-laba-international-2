class Serializable {
  constructor() {}

  serialize() {
    return JSON.stringify(
      {
        __class__: this.constructor.name, // safe children class name
        __type__: this.getType(this),
        ...this,
      },
      (key, value) => {
        if (value instanceof Function || value instanceof Symbol || value instanceof Error) { // check if our value pass our condition
          throw new Error('Non-serializable property found');
        }
        if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
          return value.toString();
        }
        return value;
      }
    );
  }

  getType(data) {
    const dataType = typeof data.data;
    if(dataType === "object") {
      if(data.data instanceof Date) return "Date";
    }
    return dataType;
  }

  wakeFrom(serialized) {
    const data = JSON.parse(serialized);
    if (data && data.__class__) {
      console.log(data);
      if(data.__class__ === this.constructor.name) { // check if our data children class name match our children class name
        if(data.__type__ === "Date") {
          return new this.constructor(new Date(data.data));
        }
        return new this.constructor(data.data);
      } else {
        throw new Error('Invalid class data in the serialized string');
      }
    } else {
      throw new Error('Invalid serialized data');
    }
  }
}

class UserDTO extends Serializable {
  constructor(options) {
    super();
    
    this.data = options;
  }

  printInfo() {
    console.log(typeof this.data)
    return this.data;
  }
}


let tolik = new UserDTO(new Date());

// console.log(tolik.printInfo()); //A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z

const serialized = tolik.serialize();
console.log(serialized);
tolik = null;

const resurrectedTolik = new UserDTO().wakeFrom(serialized);

// console.log(resurrectedTolik instanceof UserDTO); // true
console.log(resurrectedTolik.printInfo()); // A. Nashovich - 2020327, 1999-01-02T00:00:00.000Z


// console.log("new Date()" instanceof Date)