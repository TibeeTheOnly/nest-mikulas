import { PrismaClient } from '../generated/prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  const children = await Promise.all([
    prisma.child.create({
      data: {
        name: 'Alice',
        address: '123 Wonderland Ave',
        hasBeenGood: true,
      },
    }),
    prisma.child.create({
      data: {
        name: 'Charlie',
        address: '789 Chocolate Rd',
        hasBeenGood: true,
      },
    }),
    prisma.child.create({
      data: {
        name: 'Bob',
        address: '456 Builder St',
        hasBeenGood: false,
      },
    }),
  ]);

  console.log(`Created ${children.length} children.`);

  const toys = await Promise.all([
    prisma.toy.create({
      data: {
        name: 'Teddy Bear',
        material: 'plastic',
        weight: 1.2,
        childId: children[0].id,
      },
    }),
    prisma.toy.create({
      data: {
        name: 'Lego Set',
        material: 'plastic',
        weight: 2.5,
        childId: children[0].id,
      },
    }),
    prisma.toy.create({
      data: {
        name: 'Wooden Train',
        material: 'wood',
        weight: 3.0,
        childId: children[1].id,
      },
    }),
    prisma.toy.create({
      data: {
        name: 'Action Figure',
        material: 'plastic',
        weight: 0.5,
        childId: children[1].id,
      },
    }),
    prisma.toy.create({
      data: {
        name: 'Puzzle',
        material: 'wood',
        weight: 0.8,
        childId: children[0].id,
      },
    }),
    prisma.toy.create({
      data: {
        name: 'RC Car',
        material: 'metal',
        weight: 4.0,
        childId: children[1].id,
      },
    }),
  ]);

  console.log(`Created ${toys.length} toys.`);
  console.log('Database seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
