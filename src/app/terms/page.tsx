'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, Package, Users, AlertTriangle, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                  PT CROWN PERMATA INDONESIA
                </h1>
                <p className="text-xs text-gray-600">Terms & Conditions</p>
              </div>
            </div>
            
            <Link href="/">
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Syarat dan ketentuan penggunaan layanan PT CROWN PERMATA INDONESIA.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <FileText className="w-5 h-5 mr-2" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di PT CROWN PERMATA INDONESIA. Dokumen Syarat & Ketentuan ini 
                mengatur penggunaan layanan kami sebagai perusahaan perdagangan besar pakaian.
              </p>
              <p>
                Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh 
                syarat dan ketentuan yang diuraikan di bawah ini.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Penting:</strong> Jika Anda tidak setuju dengan syarat dan ketentuan ini, 
                  mohon jangan menggunakan layanan kami.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Package className="w-5 h-5 mr-2" />
                Layanan Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Deskripsi Layanan</h3>
              <p>
                PT CROWN PERMATA INDONESIA menyediakan layanan perdagangan besar pakaian yang meliputi:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Produk & Distribusi</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Penjualan pakaian grosir</li>
                    <li>• Distribusi ke seluruh Indonesia</li>
                    <li>• Berbagai kategori pakaian</li>
                    <li>• Kualitas produk terjamin</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Layanan Pendukung</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Konsultasi bisnis</li>
                    <li>• Program kemitraan</li>
                    <li>• Support pelanggan</li>
                    <li>• Informasi pasar</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Ketersediaan Layanan</h4>
                <p className="text-sm text-yellow-700">
                  Kami berusaha untuk menyediakan layanan yang stabil, namun tidak menjamin 
                  ketersediaan 100% karena faktor teknis atau pemeliharaan sistem.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Users className="w-5 h-5 mr-2" />
                Tanggung Jawab Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Kewajiban Pengguna</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-700">Informasi Akurat</h4>
                  <p className="text-gray-600">
                    Anda setuju untuk memberikan informasi yang akurat, lengkap, dan terkini 
                    saat mendaftar atau menggunakan layanan kami.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Penggunaan yang Wajar</h4>
                  <p className="text-gray-600">
                    Layanan kami hanya boleh digunakan untuk tujuan bisnis yang sah dan sesuai 
                    dengan hukum yang berlaku di Indonesia.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Keamanan Akun</h4>
                  <p className="text-gray-600">
                    Anda bertanggung jawab untuk menjaga kerahasiaan informasi login dan 
                    mencegah penggunaan yang tidak sah terhadap akun Anda.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Kepatuhan Hukum</h4>
                  <p className="text-gray-600">
                    Penggunaan layanan harus mematuhi semua hukum dan peraturan yang berlaku, 
                    termasuk hukum perdagangan dan perlindungan konsumen.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Aktivitas yang Dilarang</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Penggunaan untuk kegiatan penipuan</li>
                  <li>• Pelanggaran hak kekayaan intelektual</li>
                  <li>• Distribusi produk ilegal</li>
                  <li>• Pencemaran nama baik perusahaan</li>
                  <li>• Upaya meretas sistem keamanan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Orders and Payments */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Package className="w-5 h-5 mr-2" />
                Pesanan & Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Prosedur Pesanan</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-700">Pemesanan</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Minimum order quantity (MOQ) berlaku untuk setiap produk</li>
                    <li>• Pesanan harus dikonfirmasi secara tertulis</li>
                    <li>• Stok produk dapat berubah sewaktu-waktu</li>
                    <li>• Harga dapat berubah tanpa pemberitahuan sebelumnya</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Pembayaran</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Pembayaran harus dilakukan sesuai dengan syarat yang disepakati</li>
                    <li>• Metode pembayaran: Transfer Bank, Tunai, atau sesuai kesepakatan</li>
                    <li>• Pembayaran dianggap sah setelah konfirmasi dari pihak kami</li>
                    <li>• Denda keterlambatan pembayaran: 2% per bulan</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Pengiriman</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Pengiriman dilakukan setelah pembayaran lunas</li>
                    <li>• Biaya pengiriman ditanggung pembeli</li>
                    <li>• Waktu pengiriman: 3-7 hari kerja tergantung lokasi</li>
                    <li>• Resiko pengiriman menjadi tanggung jawab pembeli setelah barang diserahkan ke ekspedisi</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Returns and Refunds */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Pengembalian & Refund
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Kebijakan Pengembalian</h3>
              
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Syarat Pengembalian</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Produk cacat produksi (dilaporkan maksimal 3 hari setelah penerimaan)</li>
                    <li>• Produk tidak sesuai spesifikasi pesanan</li>
                    <li>• Produk rusak saat pengiriman (dibuktikan dengan foto)</li>
                    <li>• Kesalahan pengiriman dari pihak kami</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Prosedur Pengembalian</h4>
                  <ol className="text-sm text-orange-700 space-y-1 list-decimal list-inside">
                    <li>Laporkan masalah kepada customer service kami</li>
                    <li>Sediakan bukti pembelian dan dokumentasi masalah</li>
                    <li>Tunggu konfirmasi dari tim kami</li>
                    <li>Kirim produk kembali sesuai instruksi</li>
                    <li>Proses refund atau penggantian akan dilakukan</li>
                  </ol>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Tidak Berlaku Untuk</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Kerusakan akibat penggunaan yang salah</li>
                    <li>• Produk yang sudah digunakan atau dicuci</li>
                    <li>• Kerusakan akibat bencana alam</li>
                    <li>• Pengembalian setelah 7 hari dari penerimaan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Shield className="w-5 h-5 mr-2" />
                Hak Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Perlindungan IP</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-700">Hak Milik PT CROWN PERMATA INDONESIA</h4>
                  <p className="text-gray-600">
                    Semua konten, desain, logo, dan materi promosi milik PT CROWN PERMATA INDONESIA 
                    dilindungi oleh hukum hak kekayaan intelektual.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Penggunaan yang Diizinkan</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Penggunaan materi promosi untuk kepentingan bisnis bersama</li>
                    <li>• Referensi produk untuk keperluan penjualan</li>
                    <li>• Penggunaan dengan izin tertulis dari pihak kami</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Penggunaan yang Dilarang</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Reproduksi tanpa izin</li>
                    <li>• Modifikasi desain atau logo</li>
                    <li>• Penggunaan untuk kompetitor</li>
                    <li>• Klaim kepemilikan atas merek atau desain</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Batas Tanggung Jawab</h3>
              
              <div className="space-y-3">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Tanggung Jawab Kami</h4>
                  <p className="text-sm text-yellow-700">
                    Tanggung jawab kami maksimal sebesar nilai transaksi yang terkait dengan 
                    klaim tersebut, dan tidak mencakup kerugian tidak langsung, konsekuensial, 
                    atau hukuman.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Force Majeure</h4>
                  <p className="text-sm text-gray-700">
                    Kami tidak bertanggung jawab atas keterlambatan atau kegagalan pemenuhan 
                    kewajiban yang disebabkan oleh kejadian di luar kendali kami, termasuk 
                    bencana alam, perang, pemogokan, atau kebijakan pemerintah.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Terminasi Layanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Penghentian Layanan</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-700">Terminasi oleh Pengguna</h4>
                  <p className="text-gray-600">
                    Anda dapat menghentikan penggunaan layanan kami kapan saja dengan 
                    memberikan pemberitahuan tertulis 30 hari sebelumnya.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Terminasi oleh Perusahaan</h4>
                  <p className="text-gray-600">
                    Kami dapat menghentikan layanan jika Anda melanggar syarat dan ketentuan, 
                    terlibat dalam aktivitas ilegal, atau merugikan reputasi perusahaan.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Efek Terminasi</h4>
                  <p className="text-gray-600">
                    Setelah terminasi, Anda harus menyelesaikan semua pembayaran yang masih 
                    tertunda dan mengembalikan semua properti perusahaan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Users className="w-5 h-5 mr-2" />
                Penyelesaian Sengketa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Prosedur Penyelesaian Sengketa</h3>
              
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Langkah 1: Negosiasi</h4>
                  <p className="text-sm text-blue-700">
                    Sengketa akan diselesaikan terlebih dahulu melalui negosiasi baik 
                    antara kedua belah pihak.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Langkah 2: Mediasi</h4>
                  <p className="text-sm text-blue-700">
                    Jika negosiasi gagal, sengketa akan diselesaikan melalui mediasi 
                    dengan mediator netral yang disepakati bersama.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Langkah 3: Arbitrase</h4>
                  <p className="text-sm text-blue-700">
                    Sengketa yang tidak dapat diselesaikan melalui mediasi akan 
                    diselesaikan melalui arbitrase Badan Arbitrase Nasional Indonesia (BANI).
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Yurisdiksi</h4>
                  <p className="text-sm text-gray-700">
                    Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia dan 
                    sengketa akan diselesaikan di pengadilan Jakarta Selatan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Users className="w-5 h-5 mr-2" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">PT CROWN PERMATA INDONESIA</h4>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p><strong>Legal Department:</strong> Divisi Hukum</p>
                      <p><strong>Email:</strong> legal@crownpermata.co.id</p>
                      <p><strong>Telepon:</strong> 0852-8570-3526</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Alamat Kantor</h4>
                    <div className="text-sm text-gray-700">
                      <p>Nucira Building Lt 1</p>
                      <p>Jalan MT Haryono Kavling 27</p>
                      <p>Tebet Timur, Tebet</p>
                      <p>Jakarta Selatan, DKI Jakarta</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card className="border-blue-100 bg-gradient-to-r from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-800">Persetujuan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-center font-semibold text-blue-800">
                Dengan menggunakan layanan PT CROWN PERMATA INDONESIA, Anda menyatakan bahwa:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Anda telah membaca, memahami, dan menyetujui Syarat & Ketentuan ini</li>
                <li>• Anda memiliki kapasitas hukum untuk mengikatkan diri dalam perjanjian ini</li>
                <li>• Anda akan mematuhi semua syarat dan ketentuan yang berlaku</li>
                <li>• Anda memahami konsekuensi dari pelanggaran Syarat & Ketentuan ini</li>
              </ul>
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Separator className="mb-6" />
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} PT CROWN PERMATA INDONESIA. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm">
              Beranda
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/privacy" className="text-blue-600 hover:text-blue-800 text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}