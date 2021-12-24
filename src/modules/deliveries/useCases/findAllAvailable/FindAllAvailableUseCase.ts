import { prisma } from "../../../../database/prismaClient";


export class FindAllAvailableUseCase {
  async execute() {
    const availableDeliveries = await prisma.delivery.findMany({
      where: {
        end_at: null
      } 
    });

    return availableDeliveries;
  }
}