import { ENUM_CRYPTER } from "./ENUM/encrypter.enum";
import bcrypt from "bcrypt";

export class BcrypAdapter {
  encrypt(itemToEncrypt) {
    return bcrypt.hash(itemToEncrypt, ENUM_CRYPTER.BCRYPT_HASH);
  }

  compare(itemToEncrypt, hashEncrypt) {
    return bcrypt.compare(itemToEncrypt, hashEncrypt);
  }
}
