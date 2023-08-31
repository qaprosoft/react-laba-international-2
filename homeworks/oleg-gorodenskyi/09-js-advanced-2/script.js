class Serializable {
    serialize() {
        return JSON.stringify(this);
    }

    static wakeFrom(serialized) {
        const data = JSON.parse(serialized);
        const instance = new this(data); 
        return instance;
    }
}