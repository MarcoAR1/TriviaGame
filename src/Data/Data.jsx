class Data {
  constructor(data) {
    this.data = {};
  }
  insert(nombre, data) {
    this.data[nombre] = data;
  }
  get(name) {
    return this.data[name];
  }

  getData() {
    return this.data;
  }
}
const info = new Data();

export default info;
