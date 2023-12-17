-- CreateTable
CREATE TABLE `todo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `todoText` VARCHAR(191) NOT NULL,
    `completed` BOOLEAN NOT NULL,
    `userID` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `todo` ADD CONSTRAINT `todo_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
