class Serializable {
  serialize() {
    const serializedData = {
      _type: this.constructor.name,
      _data: this.#serializeData(this),
    };
    return JSON.stringify(serializedData, (key, value) => {
      if (typeof value === 'number' && isNaN(value)) return 'NaN';
      if (value === Infinity) return 'Infinity';
      if (value === -Infinity) return '-Infinity';
      return value;
    });
  }

  wakeFrom(serialized) {
    const parsedData = JSON.parse(serialized, (key, value) => {
      if (value === 'NaN') return NaN;
      if (value === 'Infinity') return Infinity;
      if (value === '-Infinity') return -Infinity;
      return value;
    });
    if (parsedData._type !== this.constructor.name)
      throw new Error('Incompatible type of deserialization');

    const data = this.#deserializeData(parsedData._data);
    for (const key in data) this[key] = data[key];

    return this;
  }

  #serializeData(data) {
    if (data === null || ['number', 'string'].includes(typeof data)) {
      return data;
    } else if (Array.isArray(data)) {
      return data.map(item => this.#serializeData(item));
    } else if (data instanceof Date) {
      return {_date: data.getTime()};
    } else if (typeof data === 'object') {
      const serializedObj = {};
      for (const key in data) {
        serializedObj[key] = this.#serializeData(data[key]);
      }
      return serializedObj;
    }
  }

  #deserializeData(data) {
    if (data === null || ['number', 'string'].includes(typeof data)) {
      return data;
    } else if (Array.isArray(data)) {
      return data.map(item => this.#deserializeData(item));
    } else if (typeof data === 'object') {
      if (data._date !== undefined) return new Date(data._date);

      const deserializedObj = {};
      for (const key in data) {
        deserializedObj[key] = this.#deserializeData(data[key]);
      }
      return deserializedObj;
    }
  }
}
