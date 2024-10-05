-- CreateTable
CREATE TABLE `tb_board` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `writer` VARCHAR(191) NOT NULL,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedDate` DATETIME(3) NULL,
    `hits` INTEGER NOT NULL DEFAULT 0,
    `recommends` INTEGER NOT NULL DEFAULT 0,
    `contents` VARCHAR(191) NOT NULL,
    `comments` INTEGER NOT NULL DEFAULT 0,
    `category` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
