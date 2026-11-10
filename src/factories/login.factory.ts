import { LoginUser } from '../models/loginUser.model';
import { testUser1 } from '../test-data/user.data';

export function loginData(): LoginUser {
  return { email: testUser1.email, password: testUser1.password };
}
