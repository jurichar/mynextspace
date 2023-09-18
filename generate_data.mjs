import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 100; i++) {
    const name = `${faker.person.firstName()} ${faker.person.lastName()}`;
    const bio = faker.lorem.sentence();
    const age = faker.number.int({ max: 50, min: 10 });
    const email = faker.internet.email();
    const image = `https://picsum.photos/200?random=${i}`;

    const user = await prisma.user.create({
      data: {
        name,
        bio,
        age,
        email,
        image,
      },
    });

    for (let j = 0; j < faker.number.int({ min: 1, max: 5 }); j++) {
      const title = faker.lorem.sentence();
      const content = faker.lorem.paragraphs();
      const published = faker.datatype.boolean();

      await prisma.blogPost.create({
        data: {
          title,
          content,
          published,
          authorId: user.id,
        },
      });
    }
  }

  console.log("Fake data generated");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
