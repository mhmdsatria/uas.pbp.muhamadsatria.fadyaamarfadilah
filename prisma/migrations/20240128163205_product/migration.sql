/*
  Warnings:

  - You are about to alter the column `deskripsi` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `namaProduct` VARCHAR(191) NOT NULL,
    MODIFY `deskripsi` VARCHAR(191) NOT NULL,
    MODIFY `harga` INTEGER NOT NULL,
    MODIFY `warna` VARCHAR(191) NOT NULL,
    MODIFY `categori` VARCHAR(191) NOT NULL;
