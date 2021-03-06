# Migration `watch-20200111164905`

This migration has been generated by Brandon Lee at 1/11/2020, 4:49:06 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "jocasta_schema"."Post" (
  "content" text    ,
  "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  "id" text  NOT NULL  ,
  "published" boolean  NOT NULL DEFAULT false ,
  "title" text  NOT NULL DEFAULT '' ,
  "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  PRIMARY KEY ("id")
);

CREATE TABLE "jocasta_schema"."User" (
  "email" text  NOT NULL DEFAULT '' ,
  "id" text  NOT NULL  ,
  "name" text    ,
  "password" text  NOT NULL DEFAULT '' ,
  PRIMARY KEY ("id")
);

ALTER TABLE "jocasta_schema"."Post" ADD COLUMN "author" text    REFERENCES "jocasta_schema"."User"("id") ON DELETE SET NULL;

CREATE UNIQUE INDEX "User.email" ON "jocasta_schema"."User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..watch-20200111164905
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,26 @@
+generator photon {
+  provider = "photonjs"
+}
+
+datasource db {
+  provider = "postgresql"
+  url      = "postgresql://brandonlee:Srf32pstgrs@localhost:5432/jocasta?schema=jocasta_schema"
+}
+
+model Post {
+  id        String   @default(cuid()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  published Boolean  @default(false)
+  title     String
+  content   String?
+  author    User?
+}
+
+model User {
+  id       String  @default(cuid()) @id
+  email    String  @unique
+  password String
+  name     String?
+  posts    Post[]
+}
```


