-- CreateTable
CREATE TABLE `Hall` (
    `idHall` VARCHAR(36) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `maxiQuantity` SMALLINT UNSIGNED NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Hall_name_key`(`name`),
    PRIMARY KEY (`idHall`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventType` (
    `idEventType` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `EventType_name_key`(`name`),
    PRIMARY KEY (`idEventType`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventTypeHall` (
    `idEventTypeOnHall` VARCHAR(191) NOT NULL,
    `idHall` VARCHAR(36) NOT NULL,
    `idEventType` VARCHAR(36) NOT NULL,

    PRIMARY KEY (`idEventTypeOnHall`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventService` (
    `idEventService` VARCHAR(36) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `price` DECIMAL(18, 2) NOT NULL,

    UNIQUE INDEX `EventService_name_key`(`name`),
    PRIMARY KEY (`idEventService`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventTypeEventService` (
    `idEventTypeEventService` VARCHAR(191) NOT NULL,
    `idEventType` VARCHAR(36) NOT NULL,
    `idEventService` VARCHAR(36) NOT NULL,

    PRIMARY KEY (`idEventTypeEventService`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `idUser` VARCHAR(191) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `names` VARCHAR(100) NULL,
    `surnames` VARCHAR(100) NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `idAddress` VARCHAR(191) NOT NULL,
    `streetName` VARCHAR(100) NULL,
    `streetNumber` SMALLINT UNSIGNED NULL,
    `zipCode` VARCHAR(15) NULL,
    `neighborhood` VARCHAR(150) NULL,
    `floor` VARCHAR(15) NULL,
    `apartment` VARCHAR(15) NULL,
    `city` VARCHAR(100) NULL,
    `state` VARCHAR(100) NULL,
    `country` VARCHAR(100) NULL,

    PRIMARY KEY (`idAddress`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserAddress` (
    `idUserAddress` VARCHAR(191) NOT NULL,
    `idUser` VARCHAR(36) NOT NULL,
    `idAddress` VARCHAR(36) NOT NULL,

    PRIMARY KEY (`idUserAddress`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `idReservation` VARCHAR(191) NOT NULL,
    `start` DATETIME(3) NULL,
    `end` DATETIME(3) NULL,

    PRIMARY KEY (`idReservation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EventTypeHall` ADD CONSTRAINT `EventTypeHall_idHall_fkey` FOREIGN KEY (`idHall`) REFERENCES `Hall`(`idHall`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventTypeHall` ADD CONSTRAINT `EventTypeHall_idEventType_fkey` FOREIGN KEY (`idEventType`) REFERENCES `EventType`(`idEventType`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventTypeEventService` ADD CONSTRAINT `EventTypeEventService_idEventType_fkey` FOREIGN KEY (`idEventType`) REFERENCES `EventType`(`idEventType`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventTypeEventService` ADD CONSTRAINT `EventTypeEventService_idEventService_fkey` FOREIGN KEY (`idEventService`) REFERENCES `EventService`(`idEventService`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAddress` ADD CONSTRAINT `UserAddress_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAddress` ADD CONSTRAINT `UserAddress_idAddress_fkey` FOREIGN KEY (`idAddress`) REFERENCES `Address`(`idAddress`) ON DELETE RESTRICT ON UPDATE CASCADE;
