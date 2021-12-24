import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.client.findFirst({
      where: { 
        username
      }
    });

    if(!client) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, client.password);

    if(!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({username}, "232c001b86447ebcac1ec24414b12737", {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}