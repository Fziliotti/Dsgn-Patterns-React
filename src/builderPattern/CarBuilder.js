export default class CarBuilder {
  constructor(name, brand) {
    this._name = name
    this._brand = brand
  }

  setColor(color) {
    this.color = color
    return this
  }

  setHeight(height) {
    this.height = height
    return this
  }

  build() {
    if (!('color' in this)) {
      throw new Error('Color is missing')
    }
    if (!('height' in this)) {
      throw new Error('Height is missing')
    }
    return new CarBuilder(this.name, this.color, this.height, this.brand)
  }
}