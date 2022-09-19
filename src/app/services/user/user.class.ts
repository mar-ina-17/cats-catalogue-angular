export class User {
  private firstName: string;
  private lastName: string;
  private phone: string;

  public username: string;
  public password: string;

  public operatorEq(user: User): User {
    this.username = user.username;
    this.password = user.password;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.phone = user.phone;
    return this;
  }
}
