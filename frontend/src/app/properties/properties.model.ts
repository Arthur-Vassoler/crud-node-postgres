export class PorpertiesModel {
  public id: number;
  public address: string;
  public title: string;
  public type: number;
  public bedrooms: number;
  public suites: number;
  public description: string;

  constructor() {
    this.id = 0;
    this.address = "";
    this.title = "";
    this.type = 1;
    this.bedrooms = 0;
    this.suites = 0;
    this.description = "";
  }
}