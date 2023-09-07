/*
  Warnings:

  - You are about to drop the column `userID` on the `TripReservation` table. All the data in the column will be lost.
  - Added the required column `userId` to the `TripReservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TripReservation" DROP CONSTRAINT "TripReservation_userID_fkey";

-- AlterTable
ALTER TABLE "TripReservation" DROP COLUMN "userID",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TripReservation" ADD CONSTRAINT "TripReservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;
