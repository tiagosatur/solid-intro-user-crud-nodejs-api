import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
