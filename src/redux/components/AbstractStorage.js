export class AbstractStorage {
  contructor() {
    this._storage = undefined;
  }

  get storage(){ return this._storage }
  set storage( value ){ this._storage = value }
}
