import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: { 
        username
      }
    });

    if(!deliveryman) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = compare(password, deliveryman.password);

    if(!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({username}, "232c001b86887ebcac1ec24414b12737", {
      subject: deliveryman.id,
      expiresIn: "1d"
    });

    return token;
  }
}