import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.deleteMany();
   const user = await prisma.user.create({
        data: {
            name: "Shivam",
            email: "Shivam@gmail.com",
            age: 23,
            userPreference: {
                create: {
                    emailUpdates: true
                }
            }
        }
    })
    console.log(user);
}

main().catch((error) => {
    console.log(error);
}).finally(async () => {
    await prisma.$disconnect();
})
