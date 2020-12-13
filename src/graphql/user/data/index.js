export class UserClass {
  constructor(Encrypter,UserQuery) {
    this.encrypter = Encrypter
    this.userQuery = UserQuery;
  }

  getUserByMail(params) {
    return this.userQuery.getOneByMail(params);
  }
  getUserById({ _id }) {
    return this.userQuery.getOneById({ _id });
  }
  async createUser({ email, password, name }) {
    const cryptPass = await this.encrypter.encrypt(password)
    return this.userQuery.create({ email, password:cryptPass, name });
  }
}
