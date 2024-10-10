/*
 Navicat Premium Data Transfer

 Source Server         : Local
 Source Server Type    : MySQL
 Source Server Version : 100138 (10.1.38-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : sikonim

 Target Server Type    : MySQL
 Target Server Version : 100138 (10.1.38-MariaDB)
 File Encoding         : 65001

 Date: 10/10/2024 21:55:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for aspirasis
-- ----------------------------
DROP TABLE IF EXISTS `aspirasis`;
CREATE TABLE `aspirasis`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nta` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nama` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `judul` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `s_text` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL COMMENT '10=initial 20=review 30=process',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of aspirasis
-- ----------------------------
INSERT INTO `aspirasis` VALUES (3, '0', 'test', 'tEST', 'daedad', NULL, 20, '2024-09-01 00:53:48', '2024-09-01 00:53:48');
INSERT INTO `aspirasis` VALUES (4, '10517141', 'TEST', 'APAPUN', 'test', NULL, 10, '2024-09-01 04:30:26', '2024-09-01 04:30:26');
INSERT INTO `aspirasis` VALUES (5, '10517141', 'test', 'aoawe', 'dwadaw', 'redvelvetz@example.com', 10, '2024-09-01 15:41:17', '2024-09-01 15:41:17');
INSERT INTO `aspirasis` VALUES (6, '10517141', 'ri', 'test', 'testttgannnbaruu', 'R@gmail,com', 10, '2024-09-04 13:24:28', '2024-09-04 13:24:28');

-- ----------------------------
-- Table structure for berkas_programs
-- ----------------------------
DROP TABLE IF EXISTS `berkas_programs`;
CREATE TABLE `berkas_programs`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nta` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nta_tujuan` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `judul` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `s_text` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `file_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `type_doc` int NOT NULL COMMENT '10 pengajuan 20 laporan',
  `status` int NULL DEFAULT NULL COMMENT '10 initial 20 validated',
  `kategori_berkas` int NULL DEFAULT NULL,
  `created_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of berkas_programs
-- ----------------------------
INSERT INTO `berkas_programs` VALUES (1, '123123', '1', 'Test', 'test', '/storage/uploads/berkas/1725158379_sample2.pdf', 10, 20, 1, NULL, '2024-09-01 02:08:13', '2024-09-01 02:39:39');
INSERT INTO `berkas_programs` VALUES (2, '123123', '1', 'Test', '', '/storage/uploads/berkas/1725157065_sample2.pdf', 20, 30, 2, NULL, '2024-09-01 02:17:45', '2024-09-01 11:30:37');
INSERT INTO `berkas_programs` VALUES (3, '0', '1', 'test', 'test', NULL, 10, 10, NULL, NULL, '2024-09-03 16:48:15', '2024-09-03 16:48:15');
INSERT INTO `berkas_programs` VALUES (4, '0', '1', 'test', 'test', NULL, 10, 10, NULL, NULL, '2024-09-04 02:55:14', '2024-09-04 02:55:14');
INSERT INTO `berkas_programs` VALUES (5, '0', '1', 'test', 'tes', NULL, 10, 10, NULL, NULL, '2024-09-04 02:57:45', '2024-09-04 02:57:45');
INSERT INTO `berkas_programs` VALUES (6, '0', '1', 'test', 'test', NULL, 10, 10, NULL, NULL, '2024-09-04 03:00:31', '2024-09-04 03:00:31');
INSERT INTO `berkas_programs` VALUES (7, '0', '1', 'test', 'naon weh', NULL, 10, 10, NULL, NULL, '2024-09-04 03:01:34', '2024-09-04 03:01:34');
INSERT INTO `berkas_programs` VALUES (8, '0', '1', 'test', 'naon weh', NULL, 10, 10, 9, NULL, '2024-09-04 03:04:44', '2024-09-04 03:04:44');

-- ----------------------------
-- Table structure for divisi
-- ----------------------------
DROP TABLE IF EXISTS `divisi`;
CREATE TABLE `divisi`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nm_divisi` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `hari_piket` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of divisi
-- ----------------------------
INSERT INTO `divisi` VALUES (1, 'Pendidikan dan Pengembangan', 'Senin', '2024-09-03 17:27:58', NULL);
INSERT INTO `divisi` VALUES (2, 'Hubungan Masyarakat', 'Selasa', NULL, NULL);
INSERT INTO `divisi` VALUES (3, 'Informasi Komunikasi Media', 'Rabu', NULL, NULL);
INSERT INTO `divisi` VALUES (4, 'Sosial Rohani', 'Kamis', NULL, NULL);
INSERT INTO `divisi` VALUES (5, 'Program kerja lainnya (diketik sendiri)', 'Jumat', NULL, NULL);
INSERT INTO `divisi` VALUES (6, 'Dana Usaha', 'Sabtu', NULL, NULL);
INSERT INTO `divisi` VALUES (8, 'Divisi Keuangan', NULL, '2024-09-04 02:44:27', '2024-09-04 02:44:27');

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `failed_jobs_uuid_unique`(`uuid` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for houses
-- ----------------------------
DROP TABLE IF EXISTS `houses`;
CREATE TABLE `houses`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `house_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of houses
-- ----------------------------
INSERT INTO `houses` VALUES (1, 'Pet House 1', 'House 1', '2024-01-12 07:17:06', '2024-01-12 07:17:06');
INSERT INTO `houses` VALUES (2, 'Pet House 2', 'House 2', '2024-01-17 05:04:49', '2024-01-17 05:04:59');

-- ----------------------------
-- Table structure for kategori_berkas
-- ----------------------------
DROP TABLE IF EXISTS `kategori_berkas`;
CREATE TABLE `kategori_berkas`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nm_kategori` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of kategori_berkas
-- ----------------------------
INSERT INTO `kategori_berkas` VALUES (1, 'LDK (Latihan Dasar Pendidikan dan Pendidikan dan Pengembangan', NULL, NULL);
INSERT INTO `kategori_berkas` VALUES (2, 'SIMICUP', NULL, NULL);
INSERT INTO `kategori_berkas` VALUES (3, 'SEMINAR', NULL, NULL);
INSERT INTO `kategori_berkas` VALUES (4, 'PKM (Pendidikan Kepada Masyarakat)', NULL, NULL);
INSERT INTO `kategori_berkas` VALUES (5, 'Program kerja lainnya (diketik sendiri)', NULL, NULL);
INSERT INTO `kategori_berkas` VALUES (6, 'Program Pelatihan', '2024-09-04 03:00:31', '2024-09-04 03:00:31');
INSERT INTO `kategori_berkas` VALUES (7, 'Lomba 17an', '2024-09-04 03:01:34', '2024-09-04 03:01:34');
INSERT INTO `kategori_berkas` VALUES (9, 'Lomba ESPORT', '2024-09-04 03:04:44', '2024-09-04 03:04:44');

-- ----------------------------
-- Table structure for menus_access
-- ----------------------------
DROP TABLE IF EXISTS `menus_access`;
CREATE TABLE `menus_access`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `header_menu` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `menu_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `method` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `param_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `parameter` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 80 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of menus_access
-- ----------------------------
INSERT INTO `menus_access` VALUES (33, 'Dashboard', 'Dashboard', 'dashboard', 'VIEW', '/dashboard', NULL, '2023-11-02 04:07:03', '2024-08-31 12:38:07');
INSERT INTO `menus_access` VALUES (34, 'Hak Akses', 'User List', 'userlist', 'VIEW', '/userlist', NULL, '2023-11-02 04:07:03', '2024-08-31 12:37:38');
INSERT INTO `menus_access` VALUES (35, 'Hak Akses', 'Role & Permission', 'userrole', 'VIEW', '/userrole', NULL, '2023-11-02 04:07:03', '2024-08-31 12:37:51');
INSERT INTO `menus_access` VALUES (37, NULL, NULL, 'getAccessMenu', 'JSON', '/getAccessMenu', NULL, '2023-11-02 04:07:03', '2023-11-02 04:07:03');
INSERT INTO `menus_access` VALUES (38, NULL, NULL, 'getRole', 'JSON', '/getRole', NULL, '2023-11-02 05:42:00', '2023-11-02 05:42:00');
INSERT INTO `menus_access` VALUES (39, NULL, NULL, 'getAccessRole', 'JSON', '/getAccessRole', NULL, '2023-11-02 05:42:00', '2023-11-02 05:42:00');
INSERT INTO `menus_access` VALUES (40, NULL, NULL, 'getRoleMenuAccess', 'JSON', '/getRoleMenuAccess', NULL, '2023-11-02 07:26:19', '2023-11-02 07:26:19');
INSERT INTO `menus_access` VALUES (41, NULL, NULL, 'saveUserAccessRole', 'JSON', '/saveUserAccessRole', NULL, '2023-11-02 08:22:18', '2023-11-02 08:22:18');
INSERT INTO `menus_access` VALUES (43, NULL, NULL, 'updateMenuAccessName', 'JSON', '/updateMenuAccessName', NULL, '2023-11-03 04:29:37', '2023-11-03 04:29:37');
INSERT INTO `menus_access` VALUES (44, NULL, NULL, 'getUserList', 'JSON', '/getUserList', NULL, '2023-11-03 06:14:59', '2023-11-03 06:14:59');
INSERT INTO `menus_access` VALUES (45, NULL, NULL, 'saveUser', 'JSON', '/saveUser', NULL, '2023-11-03 06:49:26', '2023-11-03 06:49:26');
INSERT INTO `menus_access` VALUES (46, NULL, NULL, 'deleteUser', 'JSON', '/deleteUser', NULL, '2023-11-03 07:14:35', '2023-11-03 07:14:35');
INSERT INTO `menus_access` VALUES (47, NULL, NULL, 'deleteGlobal', 'JSON', '/deleteGlobal', NULL, '2024-01-02 04:27:57', '2024-01-02 04:27:57');
INSERT INTO `menus_access` VALUES (49, NULL, NULL, 'saveRole', 'JSON', '/saveRole', NULL, '2024-01-02 08:39:29', '2024-01-02 08:39:29');
INSERT INTO `menus_access` VALUES (54, NULL, NULL, 'loadGlobal', 'JSON', '/loadGlobal', NULL, '2024-01-09 08:47:13', '2024-01-09 08:47:13');
INSERT INTO `menus_access` VALUES (56, NULL, NULL, 'getOverviewProfit', 'JSON', '/getOverviewProfit', NULL, '2024-01-10 08:04:02', '2024-01-10 08:04:02');
INSERT INTO `menus_access` VALUES (57, NULL, NULL, 'getOverviewTransaction', 'JSON', '/getOverviewTransaction', NULL, '2024-01-10 09:27:39', '2024-01-10 09:27:39');
INSERT INTO `menus_access` VALUES (63, NULL, NULL, 'getOverviewLastTransaction', 'JSON', '/getOverviewLastTransaction', NULL, '2024-01-24 14:38:28', '2024-01-24 14:38:28');
INSERT INTO `menus_access` VALUES (64, 'Laporan', 'Laporan Keuangan', 'report', 'VIEW', '/report', NULL, '2024-01-30 02:37:25', '2024-01-30 02:37:55');
INSERT INTO `menus_access` VALUES (68, 'Pengurus', 'Daftar Pengurus', 'pengurus', 'VIEW', '/pengurus', NULL, '2024-08-31 00:50:59', '2024-08-31 12:36:36');
INSERT INTO `menus_access` VALUES (69, NULL, NULL, 'savePengurus', 'JSON', '/savePengurus', NULL, '2024-08-31 01:08:57', '2024-08-31 01:08:57');
INSERT INTO `menus_access` VALUES (70, 'Aspirasi', 'Daftar Aspirasi', 'aspirasi', 'VIEW', '/aspirasi', NULL, '2024-08-31 01:23:31', '2024-08-31 01:24:32');
INSERT INTO `menus_access` VALUES (71, NULL, NULL, 'saveAspirasi', 'JSON', '/saveAspirasi', NULL, '2024-08-31 07:19:53', '2024-08-31 07:19:53');
INSERT INTO `menus_access` VALUES (72, 'Pengurus', 'Daftar Uang Kas', 'uangKas', 'VIEW', '/uangKas', NULL, '2024-08-31 08:14:53', '2024-08-31 12:37:00');
INSERT INTO `menus_access` VALUES (73, NULL, NULL, 'saveUangKas', 'JSON', '/saveUangKas', NULL, '2024-08-31 09:15:39', '2024-08-31 09:15:39');
INSERT INTO `menus_access` VALUES (74, 'Pengurus', 'Daftar Presensi', 'presensi', 'VIEW', '/presensi', NULL, '2024-08-31 09:47:49', '2024-08-31 12:37:12');
INSERT INTO `menus_access` VALUES (75, NULL, NULL, 'savePresensi', 'JSON', '/savePresensi', NULL, '2024-08-31 09:47:49', '2024-08-31 09:47:49');
INSERT INTO `menus_access` VALUES (76, 'Pengurus', 'Berkas Program', 'berkasProgram', 'VIEW', '/berkasProgram', NULL, '2024-09-01 01:33:03', '2024-09-01 01:33:31');
INSERT INTO `menus_access` VALUES (77, NULL, NULL, 'saveBerkasProgram', 'JSON', '/saveBerkasProgram', NULL, '2024-09-01 01:33:03', '2024-09-01 01:33:03');
INSERT INTO `menus_access` VALUES (78, NULL, NULL, 'setAspirasi', 'JSON', '/setAspirasi', NULL, '2024-09-01 11:49:02', '2024-09-01 11:49:02');
INSERT INTO `menus_access` VALUES (79, NULL, NULL, 'saveDivisi', 'JSON', '/saveDivisi', NULL, '2024-09-03 17:26:29', '2024-09-03 17:26:29');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (16, '2024_01_09_022858_create_transaction_table', 1);
INSERT INTO `migrations` VALUES (17, '2024_01_09_022859_create_package_table', 1);
INSERT INTO `migrations` VALUES (18, '2024_01_09_022930_create_transaction_detail_table', 1);
INSERT INTO `migrations` VALUES (19, '2024_01_09_022859_create_house_table', 2);
INSERT INTO `migrations` VALUES (21, '2023_10_22_061549_create_aspirasis_table', 3);
INSERT INTO `migrations` VALUES (22, '2023_10_22_061549_create_uang_kas_table', 4);
INSERT INTO `migrations` VALUES (23, '2023_10_22_061549_create_presensis_table', 5);
INSERT INTO `migrations` VALUES (24, '2023_10_22_061549_create_berkas_programs__table', 6);

-- ----------------------------
-- Table structure for notifications
-- ----------------------------
DROP TABLE IF EXISTS `notifications`;
CREATE TABLE `notifications`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `send_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `role_receive` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `notif_type` int NOT NULL,
  `desc_text` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `read_status` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of notifications
-- ----------------------------

-- ----------------------------
-- Table structure for packages
-- ----------------------------
DROP TABLE IF EXISTS `packages`;
CREATE TABLE `packages`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `file_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `package_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of packages
-- ----------------------------
INSERT INTO `packages` VALUES (2, NULL, 'Paket A', '150000', 'PN', 'Penitipan', '2024-01-09 09:14:32', '2024-02-18 09:35:02');
INSERT INTO `packages` VALUES (3, NULL, 'Paket B', '50000', 'GR', 'Grooming', '2024-01-11 03:40:57', '2024-01-11 03:40:57');
INSERT INTO `packages` VALUES (5, 'images/3UD75DPB0OdeJuIWYuOScmiq9YYr5paSYNqgtvjW.jpg', 'test', '13', 'GR', 'test', '2024-02-18 09:48:09', '2024-02-18 09:59:09');

-- ----------------------------
-- Table structure for password_reset_tokens
-- ----------------------------
DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE `password_reset_tokens`  (
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of password_reset_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for personal_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `personal_access_tokens_token_unique`(`token` ASC) USING BTREE,
  INDEX `personal_access_tokens_tokenable_type_tokenable_id_index`(`tokenable_type` ASC, `tokenable_id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for pets
-- ----------------------------
DROP TABLE IF EXISTS `pets`;
CREATE TABLE `pets`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `pet_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of pets
-- ----------------------------
INSERT INTO `pets` VALUES (1, 'Anjing', '2024-01-12 07:17:06', '2024-01-12 07:17:06');
INSERT INTO `pets` VALUES (2, 'Kucing', '2024-01-17 05:04:49', '2024-01-17 05:04:59');

-- ----------------------------
-- Table structure for presensis
-- ----------------------------
DROP TABLE IF EXISTS `presensis`;
CREATE TABLE `presensis`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nta` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi_tugas` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lokasi` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL COMMENT '10 = checkin 20 = checkout',
  `checkin` timestamp NULL DEFAULT NULL,
  `checkout` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of presensis
-- ----------------------------
INSERT INTO `presensis` VALUES (9, '1', 'hghjgjghj', 'Cinta Mulya, Sumedang, West Java, Java, 45363, Indonesia', 10, '2024-08-31 13:22:24', NULL, '2024-08-31 13:22:24', '2024-08-31 13:22:24');
INSERT INTO `presensis` VALUES (10, '0', 'testes', 'Cinta Mulya, Sumedang, West Java, Java, 45363, Indonesia', 20, '2024-09-01 00:43:19', '2024-09-01 09:52:24', '2024-09-01 16:52:38', '2024-09-01 09:52:24');
INSERT INTO `presensis` VALUES (11, '0', 'apawe', 'Jalan Flamboyan 3, Citeureup, Cimahi, West Java, Java, 40513, Indonesia', 10, '2024-09-06 06:48:21', NULL, '2024-09-06 06:48:21', '2024-09-06 06:48:21');

-- ----------------------------
-- Table structure for setting_aspirasis
-- ----------------------------
DROP TABLE IF EXISTS `setting_aspirasis`;
CREATE TABLE `setting_aspirasis`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `isopen` tinyint NULL DEFAULT 0,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of setting_aspirasis
-- ----------------------------
INSERT INTO `setting_aspirasis` VALUES (1, 1, '2024-09-01 11:56:24');

-- ----------------------------
-- Table structure for transaction_details
-- ----------------------------
DROP TABLE IF EXISTS `transaction_details`;
CREATE TABLE `transaction_details`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `transaction_id` bigint UNSIGNED NOT NULL,
  `package_id` bigint UNSIGNED NOT NULL,
  `pet_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `pet_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `house_id` bigint NULL DEFAULT NULL,
  `karyawan_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `transaction_details_transaction_id_foreign`(`transaction_id` ASC) USING BTREE,
  INDEX `transaction_details_package_id_foreign`(`package_id` ASC) USING BTREE,
  CONSTRAINT `transaction_details_package_id_foreign` FOREIGN KEY (`package_id`) REFERENCES `packages` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `transaction_details_transaction_id_foreign` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of transaction_details
-- ----------------------------
INSERT INTO `transaction_details` VALUES (2, 33, 3, 'Rexy', 'Dog', '2024-01-24 15:06:49', '2024-01-24 15:06:49', NULL, 14);
INSERT INTO `transaction_details` VALUES (3, 33, 3, 'Dexy', 'Cat', '2024-01-24 15:06:49', '2024-01-24 15:06:49', NULL, 14);
INSERT INTO `transaction_details` VALUES (4, 34, 3, 'Test', 'Cat', '2024-01-24 15:40:04', '2024-01-24 15:40:04', NULL, 14);
INSERT INTO `transaction_details` VALUES (5, 34, 3, 'Pet2', 'Dog', '2024-01-24 15:40:04', '2024-01-24 15:40:04', NULL, 14);
INSERT INTO `transaction_details` VALUES (6, 34, 3, 'Pet3', 'Cat', '2024-01-24 15:40:04', '2024-01-24 15:40:04', NULL, 14);
INSERT INTO `transaction_details` VALUES (7, 35, 3, 'Test', 'Dog', '2024-01-30 03:40:25', '2024-01-30 03:40:25', NULL, 14);
INSERT INTO `transaction_details` VALUES (8, 36, 3, 'des', 'de', '2024-01-30 03:43:02', '2024-01-30 03:43:02', NULL, 14);
INSERT INTO `transaction_details` VALUES (9, 37, 3, 'dea', 'dog', '2024-01-30 03:45:56', '2024-01-30 03:45:56', NULL, 14);
INSERT INTO `transaction_details` VALUES (10, 41, 3, 'Test', '2', '2024-02-21 19:48:35', '2024-02-21 19:48:35', NULL, 14);
INSERT INTO `transaction_details` VALUES (11, 42, 2, 'Test', 'Anjing', '2024-02-21 19:53:36', '2024-02-21 19:53:36', 1, 14);
INSERT INTO `transaction_details` VALUES (14, 45, 3, 'test', 'Anjing', '2024-02-27 02:02:39', '2024-02-27 02:02:39', NULL, 14);
INSERT INTO `transaction_details` VALUES (15, 45, 3, 'test', 'Anjing', '2024-02-27 02:02:39', '2024-02-27 02:02:39', NULL, 14);
INSERT INTO `transaction_details` VALUES (19, 50, 2, 'test', 'Anjing', '2024-02-27 03:53:08', '2024-02-27 03:53:08', 1, NULL);
INSERT INTO `transaction_details` VALUES (20, 51, 3, 'test', 'Kucing', '2024-02-27 04:22:43', '2024-02-27 04:22:43', NULL, 14);
INSERT INTO `transaction_details` VALUES (21, 52, 3, 'test', 'Anjing', '2024-02-27 04:23:17', '2024-02-27 04:23:17', NULL, 14);
INSERT INTO `transaction_details` VALUES (22, 53, 3, 'test', 'Anjing', '2024-02-27 05:47:49', '2024-02-27 05:47:49', NULL, 14);
INSERT INTO `transaction_details` VALUES (23, 54, 3, 'st', 'Anjing', '2024-02-27 05:48:30', '2024-02-27 05:48:30', NULL, 14);
INSERT INTO `transaction_details` VALUES (24, 55, 2, 'test', 'Anjing', '2024-02-28 00:24:12', '2024-02-28 00:24:12', 2, NULL);
INSERT INTO `transaction_details` VALUES (25, 56, 3, 'test', 'Anjing', '2024-02-28 00:49:32', '2024-02-28 00:49:32', NULL, 14);
INSERT INTO `transaction_details` VALUES (26, 57, 3, 'test', '1', '2024-02-29 02:25:17', '2024-02-29 02:25:17', NULL, 14);

-- ----------------------------
-- Table structure for transactions
-- ----------------------------
DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `no_transaction` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `transaction_start_date` datetime NOT NULL,
  `transaction_end_date` datetime NULL DEFAULT NULL,
  `transaction_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` int NOT NULL COMMENT '10 = done 20 = booked 30 = proses 40 = unpaid 50 = cancel',
  `created_by` bigint UNSIGNED NULL DEFAULT NULL,
  `price_total` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `customer_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `phone` varchar(18) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `karyawan_id` bigint NULL DEFAULT NULL,
  `bukti` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `transactions_created_by_foreign`(`created_by` ASC) USING BTREE,
  CONSTRAINT `transactions_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 58 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of transactions
-- ----------------------------
INSERT INTO `transactions` VALUES (33, 'TR/24012024/00002', '2024-01-24 04:00:00', NULL, 'GR', 10, 2, '100000', '2024-01-24 15:06:49', '2024-01-24 15:09:49', 'Riki', '+628231231231', NULL, 'Cimahi', '', NULL, NULL);
INSERT INTO `transactions` VALUES (34, 'TR/24012024/00003', '2024-01-25 00:00:00', NULL, 'GR', 10, NULL, '150000', '2024-01-24 15:40:04', '2024-01-24 15:41:34', 'Riki', '+628231231231', NULL, 'Cimahi', '', NULL, NULL);
INSERT INTO `transactions` VALUES (35, 'TR/30012024/00001', '2024-01-30 00:00:00', NULL, 'GR', 20, 2, '50000', '2024-01-30 03:40:25', '2024-01-30 03:40:25', 'Riki', '+628231231231', NULL, 'Cimahi', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (36, 'TR/30012024/00002', '2024-01-30 02:00:00', NULL, 'GR', 20, 2, '50000', '2024-01-30 03:43:02', '2024-01-30 03:43:02', 'Riki', '+628231231231', NULL, 'Cimahi', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (37, 'TR/30012024/00003', '2024-01-31 00:00:00', NULL, 'GR', 20, 2, '50000', '2024-01-30 03:45:56', '2024-01-30 03:45:56', 'Riki', '+628231231231', NULL, 'Cimahi', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (41, 'TR/21022024/00001', '2024-02-22 00:00:00', NULL, 'GR', 20, 2, '50000', '2024-02-21 19:48:35', '2024-02-21 19:48:35', 'Riki', '+628231231231', NULL, 'Cimahi', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (42, 'TR/21022024/00002', '2024-02-21 00:00:00', '2024-02-25 00:00:00', 'PN', 20, 2, '150000', '2024-02-22 19:53:36', '2024-02-21 19:53:36', 'Riki', '+628231231231', NULL, 'Cimahi', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (45, 'TR/27022024/00001', '2024-02-28 00:00:00', NULL, 'GR', 50, NULL, '100000', '2024-02-27 02:02:39', '2024-02-27 02:07:49', 'Riki', '+628231231231', NULL, 'Cimahi', '', NULL, 'images/QN9Am93MKDSEeGtzxnIQko9bBmm607ds7aEIW0Nr.jpg');
INSERT INTO `transactions` VALUES (46, 'TR/24012024/00002', '2024-02-27 09:00:00', NULL, 'GR', 10, 2, '100000', '2024-01-24 15:06:49', '2024-01-24 15:09:49', 'Riki', '+628231231231', NULL, 'Cimahi', '', NULL, NULL);
INSERT INTO `transactions` VALUES (50, 'TR/27022024/00002', '2024-02-27 10:00:00', '2024-02-29 10:30:00', 'PN', 20, 2, '150000', '2024-02-27 03:53:08', '2024-02-27 03:53:08', 'Riki', '+628231231231', NULL, 'Cimahi', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (51, 'TR/27022024/00003', '2024-02-28 00:00:00', NULL, 'GR', 40, NULL, '50000', '2024-02-27 04:22:43', '2024-02-27 04:22:43', 'Riki', '080800831312', NULL, 'test', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (52, 'TR/27022024/00004', '2024-02-28 00:00:00', NULL, 'GR', 40, NULL, '50000', '2024-02-27 04:23:17', '2024-02-27 04:23:17', 'Riki', '080800831312', NULL, 'test', NULL, NULL, 'images/Z3qXxrcH2kBloe37BPIxvQfqgEYIQTRBMSAW28eE.jpg');
INSERT INTO `transactions` VALUES (53, 'TR/27022024/00005', '2024-02-28 00:00:00', NULL, 'GR', 40, NULL, '50000', '2024-02-27 05:47:49', '2024-02-27 05:47:49', 'Riki', '080800831312', NULL, 'test', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (54, 'TR/27022024/00006', '2024-02-28 00:00:00', NULL, 'GR', 40, NULL, '50000', '2024-02-27 05:48:30', '2024-02-27 05:48:30', 'Riki', '080800831312', NULL, 'test', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (55, 'TR/28022024/00001', '2024-02-27 00:00:00', '2024-02-29 00:00:00', 'PN', 20, 2, '150000', '2024-02-28 00:24:12', '2024-02-28 00:24:12', 'Riki', '+628231231231', NULL, 'Cimahi', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (56, 'TR/28022024/00002', '2024-02-29 09:00:00', NULL, 'GR', 40, NULL, '50000', '2024-02-28 00:49:32', '2024-02-28 00:49:32', 'Riki', '+628231231231', NULL, 'Cimahi', NULL, NULL, NULL);
INSERT INTO `transactions` VALUES (57, 'TR/29022024/00001', '2024-03-01 09:00:00', NULL, 'GR', 20, 2, '50000', '2024-02-29 02:25:17', '2024-02-29 02:25:17', 'Riki', '+628231231231', NULL, 'Cimahi', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for uang_kas
-- ----------------------------
DROP TABLE IF EXISTS `uang_kas`;
CREATE TABLE `uang_kas`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nta` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nominal` double(8, 2) NOT NULL,
  `file_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL COMMENT '10 = initial 20 = validated',
  `expense` tinyint NULL DEFAULT 0 COMMENT '0 = deposit 1= expense',
  `deskripsi` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of uang_kas
-- ----------------------------
INSERT INTO `uang_kas` VALUES (1, '0', 10000.00, 'images/cjzUqPlgJPIrCYra5qhsMO7OlZs4H8vnWRYTyUm7.png', 20, 0, NULL, '2024-08-31 09:21:53', '2024-08-31 12:21:40');
INSERT INTO `uang_kas` VALUES (14, '0', 500000.00, NULL, 10, 0, NULL, '2024-09-03 15:37:38', '2024-09-06 07:27:46');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_active` int NULL DEFAULT 0,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `phone` varchar(18) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `nta` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `file_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `tahun_angkatan` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `kelas` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `divisi` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email` ASC) USING BTREE,
  INDEX `users_role_id_foreign`(`role_id` ASC) USING BTREE,
  UNIQUE INDEX `users_nta_unique`(`nta` ASC) USING BTREE,
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `users_roles` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (2, 'Redvelvetz', 6, 'redvelvetz@example.com', NULL, '$2y$10$Y5e60GWMFODqS0M0fUQ8p..mWP/GMCwEu.DkcuIOdC68P46rTnOLS', NULL, '2023-10-22 06:45:20', '2024-10-10 14:40:50', 1, NULL, NULL, '0', 'images/twqhtrHT7lCBImTwVhvjBpbITX25gcvmsMaXk58w.jpg', '', '', 2);

-- ----------------------------
-- Table structure for users_access
-- ----------------------------
DROP TABLE IF EXISTS `users_access`;
CREATE TABLE `users_access`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `menu_access_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL,
  `i_create` int NOT NULL DEFAULT 0,
  `i_update` int NOT NULL DEFAULT 0,
  `i_delete` int NOT NULL DEFAULT 0,
  `i_view` int NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `users_access_menu_access_id_foreign`(`menu_access_id` ASC) USING BTREE,
  INDEX `users_access_user_id_foreign`(`role_id` ASC) USING BTREE,
  CONSTRAINT `users_access_menu_access_id_foreign` FOREIGN KEY (`menu_access_id`) REFERENCES `menus_access` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `users_access_user_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `users_roles` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 113 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of users_access
-- ----------------------------
INSERT INTO `users_access` VALUES (9, 33, 6, 0, 0, 0, 1, '2023-11-02 09:03:17', '2023-11-23 21:01:42');
INSERT INTO `users_access` VALUES (11, 34, 6, 0, 0, 0, 1, '2023-11-02 09:03:28', '2023-12-14 10:05:41');
INSERT INTO `users_access` VALUES (13, 35, 6, 0, 0, 0, 1, '2023-11-02 09:03:39', '2023-11-02 09:03:39');
INSERT INTO `users_access` VALUES (62, 64, 6, 0, 0, 0, 1, '2024-01-30 02:38:06', '2024-01-30 02:38:06');
INSERT INTO `users_access` VALUES (72, 68, 6, 0, 0, 0, 1, '2024-08-31 00:52:00', '2024-08-31 00:52:00');
INSERT INTO `users_access` VALUES (73, 68, 12, 0, 0, 0, 0, '2024-08-31 00:52:00', '2024-08-31 00:52:00');
INSERT INTO `users_access` VALUES (74, 68, 13, 0, 0, 0, 0, '2024-08-31 00:52:00', '2024-08-31 00:52:00');
INSERT INTO `users_access` VALUES (75, 68, 14, 0, 0, 0, 1, '2024-08-31 00:52:00', '2024-08-31 12:33:56');
INSERT INTO `users_access` VALUES (76, 70, 6, 0, 0, 0, 1, '2024-08-31 01:25:11', '2024-08-31 01:25:11');
INSERT INTO `users_access` VALUES (77, 70, 12, 0, 0, 0, 1, '2024-08-31 01:25:11', '2024-09-04 11:49:10');
INSERT INTO `users_access` VALUES (78, 70, 13, 0, 0, 0, 1, '2024-08-31 01:25:11', '2024-09-04 11:49:11');
INSERT INTO `users_access` VALUES (79, 70, 14, 0, 0, 0, 1, '2024-08-31 01:25:11', '2024-08-31 12:34:06');
INSERT INTO `users_access` VALUES (80, 72, 6, 0, 0, 0, 1, '2024-08-31 08:15:54', '2024-08-31 08:15:54');
INSERT INTO `users_access` VALUES (81, 72, 12, 0, 0, 0, 1, '2024-08-31 08:15:54', '2024-09-04 11:50:08');
INSERT INTO `users_access` VALUES (82, 72, 13, 0, 0, 0, 1, '2024-08-31 08:15:54', '2024-09-04 11:50:08');
INSERT INTO `users_access` VALUES (83, 72, 14, 0, 0, 0, 1, '2024-08-31 08:15:54', '2024-08-31 12:34:15');
INSERT INTO `users_access` VALUES (84, 72, 15, 0, 0, 0, 1, '2024-08-31 08:15:54', '2024-09-04 11:50:08');
INSERT INTO `users_access` VALUES (85, 74, 6, 0, 0, 0, 1, '2024-08-31 09:49:24', '2024-08-31 09:49:24');
INSERT INTO `users_access` VALUES (86, 74, 12, 0, 0, 0, 0, '2024-08-31 09:49:24', '2024-08-31 09:49:24');
INSERT INTO `users_access` VALUES (87, 74, 13, 0, 0, 0, 0, '2024-08-31 09:49:24', '2024-08-31 09:49:24');
INSERT INTO `users_access` VALUES (88, 74, 14, 0, 0, 0, 1, '2024-08-31 09:49:24', '2024-08-31 12:34:40');
INSERT INTO `users_access` VALUES (89, 74, 15, 0, 0, 0, 1, '2024-08-31 09:49:24', '2024-09-04 11:50:21');
INSERT INTO `users_access` VALUES (90, 35, 12, 0, 0, 0, 0, '2024-08-31 12:33:38', '2024-08-31 12:33:38');
INSERT INTO `users_access` VALUES (91, 35, 13, 0, 0, 0, 0, '2024-08-31 12:33:38', '2024-08-31 12:33:38');
INSERT INTO `users_access` VALUES (92, 35, 14, 0, 0, 0, 1, '2024-08-31 12:33:38', '2024-08-31 12:33:38');
INSERT INTO `users_access` VALUES (93, 35, 15, 0, 0, 0, 1, '2024-08-31 12:33:38', '2024-09-04 11:48:42');
INSERT INTO `users_access` VALUES (94, 68, 15, 0, 0, 0, 1, '2024-08-31 12:33:56', '2024-09-04 11:49:38');
INSERT INTO `users_access` VALUES (95, 70, 15, 0, 0, 0, 1, '2024-08-31 12:34:06', '2024-09-04 11:49:11');
INSERT INTO `users_access` VALUES (96, 33, 12, 0, 0, 0, 0, '2024-08-31 13:13:53', '2024-08-31 13:13:53');
INSERT INTO `users_access` VALUES (97, 33, 13, 0, 0, 0, 0, '2024-08-31 13:13:53', '2024-08-31 13:13:53');
INSERT INTO `users_access` VALUES (98, 33, 14, 0, 0, 0, 1, '2024-08-31 13:13:53', '2024-08-31 13:13:53');
INSERT INTO `users_access` VALUES (99, 33, 15, 0, 0, 0, 0, '2024-08-31 13:13:53', '2024-08-31 13:13:53');
INSERT INTO `users_access` VALUES (100, 76, 6, 0, 0, 0, 1, '2024-09-01 01:33:42', '2024-09-01 01:33:42');
INSERT INTO `users_access` VALUES (101, 76, 12, 0, 0, 0, 1, '2024-09-01 01:33:42', '2024-09-04 11:49:25');
INSERT INTO `users_access` VALUES (102, 76, 13, 0, 0, 0, 1, '2024-09-01 01:33:42', '2024-09-04 11:49:25');
INSERT INTO `users_access` VALUES (103, 76, 14, 0, 0, 0, 1, '2024-09-01 01:33:42', '2024-09-01 10:05:39');
INSERT INTO `users_access` VALUES (104, 76, 15, 0, 0, 0, 1, '2024-09-01 01:33:42', '2024-09-04 11:49:25');
INSERT INTO `users_access` VALUES (105, 64, 12, 0, 0, 0, 0, '2024-09-04 11:48:58', '2024-09-04 11:48:58');
INSERT INTO `users_access` VALUES (106, 64, 13, 0, 0, 0, 0, '2024-09-04 11:48:58', '2024-09-04 11:48:58');
INSERT INTO `users_access` VALUES (107, 64, 14, 0, 0, 0, 1, '2024-09-04 11:48:58', '2024-09-04 11:49:55');
INSERT INTO `users_access` VALUES (108, 64, 15, 0, 0, 0, 1, '2024-09-04 11:48:58', '2024-09-04 11:48:58');
INSERT INTO `users_access` VALUES (109, 34, 12, 0, 0, 0, 0, '2024-10-10 14:34:42', '2024-10-10 14:34:42');
INSERT INTO `users_access` VALUES (110, 34, 13, 0, 0, 0, 0, '2024-10-10 14:34:42', '2024-10-10 14:34:42');
INSERT INTO `users_access` VALUES (111, 34, 14, 0, 0, 0, 0, '2024-10-10 14:34:42', '2024-10-10 14:34:42');
INSERT INTO `users_access` VALUES (112, 34, 15, 0, 0, 0, 1, '2024-10-10 14:34:42', '2024-10-10 14:34:42');

-- ----------------------------
-- Table structure for users_roles
-- ----------------------------
DROP TABLE IF EXISTS `users_roles`;
CREATE TABLE `users_roles`  (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of users_roles
-- ----------------------------
INSERT INTO `users_roles` VALUES (6, 'Superadmin', '2023-10-22 06:45:20', '2023-10-22 06:45:20', '10');
INSERT INTO `users_roles` VALUES (12, 'Pengurus Humas', '2024-08-31 00:38:05', '2024-08-31 00:38:05', NULL);
INSERT INTO `users_roles` VALUES (13, 'Pengurus Himpunan', '2024-08-31 00:38:47', '2024-08-31 00:38:47', NULL);
INSERT INTO `users_roles` VALUES (14, 'Admin (INFOKOM)', '2024-08-31 00:39:20', '2024-08-31 00:39:20', NULL);
INSERT INTO `users_roles` VALUES (15, '6 Inti', '2024-08-31 08:01:04', '2024-08-31 08:01:04', NULL);

SET FOREIGN_KEY_CHECKS = 1;
