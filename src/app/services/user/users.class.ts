export class User {
  private firstName: string;
  private lastName: string;
  private phone: string;

  public username: string;
  public password: string;

  constructor(fN: string, lN: string, p: string, u: string, pass: string) {
    this.firstName = fN;
    this.lastName = lN;
    this.phone = p;
    this.username = u;
    this.password = pass;
  }
}
