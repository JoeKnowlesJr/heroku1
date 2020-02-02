export class User {
  constructor(
  public id: string,
  public firstName: string,
  public lastName: string,
  public email: string,
  public password: string,
  public company: string,
  public phone: string,
  public token: string
) {}

  static none() {
    return new User(
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
    );
  }
}
