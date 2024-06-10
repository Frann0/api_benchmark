import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

const main = async () => {
  try {
    for (let i = 0; i < 100000; i++) {
      try {
        const t = prisma.user.create({
          data: {
            name: faker.person.fullName(),
            email: faker.internet.email(),
          },
        });
      } catch (error) {
        console.error(`Error creating user ${i}: ${error}`);
      }
    }
    for (let i = 0; i < 100000; i++) {
      prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
        },
      });
    }

    for (let i = 0; i < 100000; i++) {
      prisma.orders.create({
        data: {
          userId: Math.floor(Math.random() * 100000),
          productId: Math.floor(Math.random() * 100000),
          quantity: Math.floor(Math.random() * 10),
        },
      });
    }
  } catch (error) {
    console.error(`Error seeding: ${error}`);
  }
};

main()
  .then(async () => {
    console.log("Seeding completed");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
