import { prisma } from "./prisma";

async function main() {
  await prisma.trip.createMany({
    data: [],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });