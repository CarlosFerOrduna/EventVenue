/*
  Warnings:

  - You are about to drop the column `maxiQuantity` on the `Hall` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Hall` DROP COLUMN `maxiQuantity`,
    ADD COLUMN `maxQuantity` SMALLINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `password` VARCHAR(191) NOT NULL;
