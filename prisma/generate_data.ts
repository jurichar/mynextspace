import { prisma } from '@/lib/prisma';
import { faker } from '@faker-js/faker';

async function main() {
  for (let i = 0; i < 100; i++) {
    const name = faker.person.firstName() + ' ' + faker.person.lastName();
    const bio = faker.lorem.sentence();
    const age = faker.
    const email = faker.internet.email();
    const image = `https://picsum.photos/200?random=${i}`;

    await prisma.user.create({
      data: {
        name,
        bio,
        age,
        email,
        image,
      },
    });
  }

  console.log('Fake data generated');
}
}