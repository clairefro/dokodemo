-- CreateTable
CREATE TABLE "WatchedDemo" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "demoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WatchedDemo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WatchedDemo" ADD CONSTRAINT "WatchedDemo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchedDemo" ADD CONSTRAINT "WatchedDemo_demoId_fkey" FOREIGN KEY ("demoId") REFERENCES "Demo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
