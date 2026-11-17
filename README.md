# ULTRA HD AI — Panduan Android (tanpa PC)

Isi proyek hanya 3 file kecil: `index.html`, `sw.js`, `manifest.json`.
Mesin AI (ONNX Runtime Web, ±10 MB) dan model Real-ESRGAN diunduh LANGSUNG oleh aplikasi di HP Anda, lalu
disimpan di penyimpanan Chrome. Setelah itu foto diproses di HP tanpa internet dan tanpa dikirim ke mana pun.

## A. Pasang aplikasi (sekali saja, butuh internet + akun GitHub gratis)
Aplikasi perlu "alamat web" agar bisa dipasang di Chrome. Cara gratis & mudah: GitHub Pages.

1. Simpan 3 file (`index.html`, `sw.js`, `manifest.json`) ke HP: ketuk file tersebut di chat Claude → Download.
   Pastikan namanya persis sama (bukan `index(1).html`).
2. Buka Chrome → https://github.com → **Sign up** (buat akun gratis, verifikasi email).
3. Di Chrome ketuk menu ⋮ → centang **Situs desktop** (agar menu GitHub lengkap).
4. Ketuk **+** (kanan atas) → **New repository** → Repository name: `ultra-hd-ai` → pilih **Public** → **Create repository**.
5. Ketuk tautan **uploading an existing file** → **choose your files** → pilih ketiga file → ketuk **Commit changes**.
6. Ketuk **Settings** → menu **Pages** → bagian *Branch* pilih **main** dan folder **/(root)** → **Save**.
7. Tunggu 1–3 menit. Alamat aplikasi Anda: `https://NAMA-GITHUB-ANDA.github.io/ultra-hd-ai/`
   (muncul di halaman Pages; muat ulang bila belum tampil).
8. Buka alamat itu di Chrome. Ketuk ⋮ → **Instal aplikasi** (atau **Tambahkan ke layar utama**).

## A2. Jika sebelumnya sudah terpasang (versi lama)
1. Di GitHub, buka tiap file lama (`index.html`, `sw.js`) → ikon pensil/⋯ → **Delete file** atau unggah ulang dengan nama sama (Add file → Upload files → timpa) → Commit.
2. Tunggu 1–2 menit, buka aplikasi, ketuk **Hapus data AI** (hapus unduhan lama yang rusak), lalu lanjut ke B.
3. Jika tampilan lama masih muncul: Chrome ⋮ → Setelan → Privasi → Hapus data penjelajahan → "Cookie dan data situs" untuk situs github.io.

## B. Unduh AI (sekali saja, sebaiknya pakai Wi-Fi)
1. Buka ULTRA HD AI dari ikon layar utama.
2. Pilih model: **Cepat** (±5 MB, disarankan untuk HP biasa) atau **Kualitas** (±64 MB, lebih bagus tapi jauh lebih lambat).
3. Ketuk **Unduh & Siapkan AI**. Tunggu sampai muncul "Mesin: siap" dan "Model: siap" (hijau).
4. Jangan tutup halaman selama mengunduh. Jika gagal, tekan tombol lagi (aman diulang).

## C. Pakai
Pilih foto → atur resolusi → **Tingkatkan Semua Foto** → **Bandingkan** → **Download** (masuk folder Download, tampil di Galeri/Files)
atau **Bagikan/Galeri** (menu bagikan Android, pilih "Simpan ke Galeri/Foto" bila tersedia).
Mulai dengan 1 foto kecil (≤1000 px) untuk mencoba kecepatan HP Anda. Foto besar/4K bisa memakan beberapa menit.

## D. Uji offline (WAJIB sebelum percaya klaim "offline")
1. Selesaikan langkah B, lalu proses 1 foto kecil sampai berhasil.
2. Nyalakan Mode Pesawat (matikan Wi-Fi & data). Tutup aplikasi sepenuhnya, buka lagi dari ikon layar utama.
3. Pastikan chip "Mesin" dan "Model" hijau, lalu proses foto lagi. Jika berhasil = benar-benar offline.
Jika gagal, jangan hapus data; kirimkan pesan error yang muncul agar bisa diperbaiki.

## Jika masih ada error
Buka "Diagnosa & cadangan" di kartu 1 → ketuk **Tes mesin AI** → screenshot kotak log dan kirim ke Claude.
Log menampilkan: apakah SIMD didukung, hasil tes mesin, ukuran berkas yang diunduh, dan pesan error asli.

## Catatan jujur
- Belum diuji di HP nyata oleh pembuat. Model diambil dari Hugging Face `jonathanst29/tinier-upscale-models` (ONNX fp32, sumbu H/W dinamis, dipakai situs upscaler berbasis onnxruntime-web; cadangan `baker76/upscale-models`), mesin dari jsDelivr (cadangan unpkg); jika tautan berubah, unduhan akan gagal dan aplikasi menampilkan pesan.
- Upscale memakai Real-ESRGAN (jaringan saraf sungguhan), diproses per-potongan (tile) agar RAM hemat, di CPU (WASM, 1 thread).
- Deblur & noise reduction = unsharp mask dan filter pengurang noise klasik, ditambah efek penghalus noise dari model.
- Face Enhancement BUKAN GFPGAN: hanya penajaman ekstra pada wajah jika Chrome mendukung `FaceDetector` (sering perlu mengaktifkan flag "Experimental Web Platform features" di chrome://flags). Jika tidak, dilewati.
- Foto Anda tidak pernah diunggah. Hanya mesin & model yang diunduh (sekali) dari internet.
- Tombol "Hapus data AI" mengosongkan penyimpanan mesin/model jika ingin mengulang.
- Repositori GitHub bersifat publik, tetapi hanya berisi kode aplikasi, bukan foto Anda.
