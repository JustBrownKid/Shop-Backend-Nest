-- CreateTable
CREATE TABLE "otps" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "otps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blogs" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255),
    "content" TEXT NOT NULL,
    "tag_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cache" (
    "key" VARCHAR(255) NOT NULL,
    "value" TEXT NOT NULL,
    "expiration" INTEGER NOT NULL,

    CONSTRAINT "cache_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "cache_locks" (
    "key" VARCHAR(255) NOT NULL,
    "owner" VARCHAR(255) NOT NULL,
    "expiration" INTEGER NOT NULL,

    CONSTRAINT "cache_locks_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "failed_jobs" (
    "id" BIGSERIAL NOT NULL,
    "uuid" VARCHAR(255) NOT NULL,
    "connection" TEXT NOT NULL,
    "queue" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "exception" TEXT NOT NULL,
    "failed_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "failed_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hirings" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "sections" JSON NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "hirings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_batches" (
    "id" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "total_jobs" INTEGER NOT NULL,
    "pending_jobs" INTEGER NOT NULL,
    "failed_jobs" INTEGER NOT NULL,
    "failed_job_ids" TEXT NOT NULL,
    "options" TEXT,
    "cancelled_at" INTEGER,
    "created_at" INTEGER NOT NULL,
    "finished_at" INTEGER,

    CONSTRAINT "job_batches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" BIGSERIAL NOT NULL,
    "queue" VARCHAR(255) NOT NULL,
    "payload" TEXT NOT NULL,
    "attempts" SMALLINT NOT NULL,
    "reserved_at" INTEGER,
    "available_at" INTEGER NOT NULL,
    "created_at" INTEGER NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "address" TEXT NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "latitude" DECIMAL(10,7),
    "longitude" DECIMAL(10,7),
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "migrations" (
    "id" SERIAL NOT NULL,
    "migration" VARCHAR(255) NOT NULL,
    "batch" INTEGER NOT NULL,

    CONSTRAINT "migrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" BIGSERIAL NOT NULL,
    "order_id" BIGINT NOT NULL,
    "product_id" BIGINT NOT NULL,
    "color_name" VARCHAR(255),
    "color_value" VARCHAR(255),
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" BIGSERIAL NOT NULL,
    "cusName" VARCHAR(255) NOT NULL,
    "cusPhone" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "note" VARCHAR(255),
    "total_price" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "status" VARCHAR(255) NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "password_reset_tokens" (
    "email" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0),

    CONSTRAINT "password_reset_tokens_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "personal_access_tokens" (
    "id" BIGSERIAL NOT NULL,
    "tokenable_type" VARCHAR(255) NOT NULL,
    "tokenable_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "token" VARCHAR(64) NOT NULL,
    "abilities" TEXT,
    "last_used_at" TIMESTAMP(0),
    "expires_at" TIMESTAMP(0),
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "personal_access_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" BIGSERIAL NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "vendor" VARCHAR(255) NOT NULL,
    "sku" VARCHAR(255) NOT NULL,
    "stock" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "category_id" BIGINT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "colors" JSON,
    "description" JSON,
    "warranty" JSON,
    "specification" JSON,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" VARCHAR(255) NOT NULL,
    "user_id" BIGINT,
    "ip_address" VARCHAR(45),
    "user_agent" TEXT,
    "payload" TEXT NOT NULL,
    "last_activity" INTEGER NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "role" VARCHAR(50) NOT NULL DEFAULT 'user',
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "remember_token" VARCHAR(100),
    "created_at" TIMESTAMP(0),
    "updated_at" TIMESTAMP(0),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "failed_jobs_uuid_unique" ON "failed_jobs"("uuid");

-- CreateIndex
CREATE INDEX "jobs_queue_index" ON "jobs"("queue");

-- CreateIndex
CREATE UNIQUE INDEX "order_items_order_id_product_id_color_name_unique" ON "order_items"("order_id", "product_id", "color_name");

-- CreateIndex
CREATE UNIQUE INDEX "personal_access_tokens_token_unique" ON "personal_access_tokens"("token");

-- CreateIndex
CREATE INDEX "personal_access_tokens_expires_at_index" ON "personal_access_tokens"("expires_at");

-- CreateIndex
CREATE INDEX "personal_access_tokens_tokenable_type_tokenable_id_index" ON "personal_access_tokens"("tokenable_type", "tokenable_id");

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_unique" ON "products"("sku");

-- CreateIndex
CREATE INDEX "sessions_last_activity_index" ON "sessions"("last_activity");

-- CreateIndex
CREATE INDEX "sessions_user_id_index" ON "sessions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_unique" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_unique" ON "users"("email");

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_tag_id_foreign" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_foreign" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_id_foreign" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_foreign" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
