class Serializable {
  serialize() {
    if (this instanceof Serializable) {
      const serializedObj = JSON.stringify(
        {
          ...this,
          className: this.constructor.name,
        },
        jsonReplacer,
      );

      return serializedObj;
    }
  }

  wakeFrom(serialized) {
    const objToWakeUp = JSON.parse(serialized, jsonReviver);
    checkClassName(objToWakeUp, this.constructor);
    wakeUpProp(objToWakeUp);
    return Object.assign(this, objToWakeUp);
  }
}
