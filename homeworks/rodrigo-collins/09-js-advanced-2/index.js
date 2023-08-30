class Serializable {
    constructor(className, supportedTypes) {
        this.className = className;
        this.supportedTypes = supportedTypes;
    }

    serialize() {
        const serializedData = {
            className: this.className,
            data: this._serializeData(this, this.supportedTypes),
        };
        return JSON.stringify(serializedData);
    }

    wakeFrom(serialized) {
        const parsedData = JSON.parse(serialized);
        if (parsedData.className !== this.className) {
            throw new Error(`Invalid serialized data for class ${this.className}`);
        }
        return this._deserializeData(parsedData.data, this.supportedTypes);
    }

    _serializeData(data, supportedTypes) {
        if (supportedTypes.null && data === null) {
            return null;
        } else if (supportedTypes.object && typeof data === 'object' && !Array.isArray(data)) {
            const serializedObj = {};
            for (const key in data) {
                if (data.hasOwnProperty(key) && data.propertyIsEnumerable(key)) {
                    serializedObj[key] = this._serializeData(data[key], supportedTypes);
                }
            }
            return serializedObj;
        } else if (supportedTypes.array && Array.isArray(data)) {
            return data.map(item => this._serializeData(item, supportedTypes));
        } else if (supportedTypes.number && typeof data === 'number') {
            return Number.isNaN(data) ? 'NaN' : (Object.is(data, -0) ? 0 : data);
        } else if (supportedTypes.string && typeof data === 'string') {
            return data;
        } else if (supportedTypes.Date && data instanceof Date) {
            return { _Serializable_Date: true, value: data.getTime() };
        } else {
            throw new Error('Unsupported data type');
        }
    }

    _deserializeData(serializedData, supportedTypes) {
        if (supportedTypes.null && serializedData === null) {
            return null;
        } else if (supportedTypes.object && typeof serializedData === 'object' && !Array.isArray(serializedData)) {
            const deserializedObj = {};
            for (const key in serializedData) {
                if (serializedData.hasOwnProperty(key)) {
                    deserializedObj[key] = this._deserializeData(serializedData[key], supportedTypes);
                }
            }
            return deserializedObj;
        } else if (supportedTypes.array && Array.isArray(serializedData)) {
            return serializedData.map(item => this._deserializeData(item, supportedTypes));
        } else if (supportedTypes.number && typeof serializedData === 'number') {
            return serializedData;
        } else if (supportedTypes.string && typeof serializedData === 'string') {
            return serializedData;
        } else if (supportedTypes.Date && serializedData._Serializable_Date) {
            return new Date(serializedData.value);
        } else {
            throw new Error('Unsupported serialized data type');
        }
    }
}

class CustomSerializable extends Serializable {
    constructor(data) {
        super('CustomSerializable', {
            null: true,
            object: true,
            array: true,
            number: true,
            string: true,
            Date: true,
        });
        this.data = data;
    }
}

const obj = new CustomSerializable({
    num: 42,
    str: 'Hello',
    arr: [1, 2, 3],
    date: new Date(),
});

const serializedObj = obj.serialize();
console.log('Serialized:', serializedObj);

const deserializedObj = new CustomSerializable().wakeFrom(serializedObj);
console.log('Deserialized:', deserializedObj);
