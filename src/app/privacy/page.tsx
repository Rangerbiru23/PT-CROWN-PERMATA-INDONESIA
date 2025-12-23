'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Shield, Eye, Database, Users, Lock } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                  PT CROWN PERMATA INDONESIA
                </h1>
                <p className="text-xs text-gray-600">Privacy Policy</p>
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
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PT CROWN PERMATA INDONESIA berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
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
                <Eye className="w-5 h-5 mr-2" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di Kebijakan Privasi PT CROWN PERMATA INDONESIA. Dokumen ini menjelaskan 
                bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
                Anda ketika menggunakan layanan kami sebagai perusahaan perdagangan besar pakaian.
              </p>
              <p>
                Dengan menggunakan layanan kami, Anda setuju dengan praktik-praktik yang dijelaskan 
                dalam kebijakan privasi ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Database className="w-5 h-5 mr-2" />
                Pengumpulan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Informasi yang Kami Kumpulkan:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-700">Data Pribadi</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat lengkap</li>
                    <li>Informasi perusahaan (untuk mitra bisnis)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Data Transaksi</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                    <li>Riwayat pembelian</li>
                    <li>Informasi pesanan</li>
                    <li>Metode pembayaran</li>
                    <li>Preferensi produk</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700">Data Penggunaan</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                    <li>Data akses website</li>
                    <li>Interaksi dengan layanan kami</li>
                    <li>Preferensi komunikasi</li>
                    <li>Feedback dan ulasan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Users className="w-5 h-5 mr-2" />
                Penggunaan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami menggunakan informasi yang dikumpulkan untuk tujuan-tujuan berikut:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Layanan Pelanggan</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Memproses pesanan Anda</li>
                    <li>• Memberikan dukungan teknis</li>
                    <li>• Mengelola akun pelanggan</li>
                    <li>• Mengirim konfirmasi transaksi</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Pengembangan Bisnis</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Menganalisis tren pasar</li>
                    <li>• Meningkatkan layanan</li>
                    <li>• Personalisasi pengalaman</li>
                    <li>• Pengembangan produk baru</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Komunikasi</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Newsletter dan update</li>
                    <li>• Informasi produk baru</li>
                    <li>• Penawaran khusus</li>
                    <li>• Survei kepuasan</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Kepatuhan</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Memenuhi persyaratan hukum</li>
                    <li>• Perlindungan penipuan</li>
                    <li>• Audit keamanan</li>
                    <li>• Laporan regulasi</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Lock className="w-5 h-5 mr-2" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-lg">Keamanan Informasi</h3>
              <p>
                PT CROWN PERMATA INDONESIA mengimplementasikan berbagai langkah keamanan untuk 
                melindungi data pribadi Anda:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Enkripsi Data</h4>
                    <p className="text-gray-600 text-sm">Semua data sensitif dienkripsi menggunakan teknologi SSL/TLS.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Akses Terbatas</h4>
                    <p className="text-gray-600 text-sm">Hanya personil berwenang yang dapat mengakses data pribadi.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Monitoring Keamanan</h4>
                    <p className="text-gray-600 text-sm">Sistem monitoring 24/7 untuk mendeteksi ancaman keamanan.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Backup Rutin</h4>
                    <p className="text-gray-600 text-sm">Backup data dilakukan secara rutin dan aman.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rights */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <Users className="w-5 h-5 mr-2" />
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Hak Akses dan Koreksi</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mengakses data pribadi Anda</li>
                    <li>• Memperbarui informasi yang salah</li>
                    <li>• Meminta salinan data Anda</li>
                    <li>• Melacak penggunaan data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Hak Penghapusan</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Menghapus akun pengguna</li>
                    <li>• Menarik persetujuan data</li>
                    <li>• Meminta penghapusan data</li>
                    <li>• Melupakan data lama</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-blue-800 mb-2">Cara Menghubungi Kami</h4>
                <p className="text-gray-600 text-sm">
                  Untuk menjalankan hak-hak Anda, silakan hubungi kami melalui:
                </p>
                <div className="mt-2 space-y-1 text-sm text-gray-700">
                  <p><strong>Email:</strong> privacy@crownpermata.co.id</p>
                  <p><strong>Telepon:</strong> 0852-8570-3526</p>
                  <p><strong>Alamat:</strong> Jakarta Selatan, DKI Jakarta</p>
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
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, 
                silakan hubungi Privacy Officer kami:
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">PT CROWN PERMATA INDONESIA</h4>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p><strong>Privacy Officer:</strong> Divisi Compliance</p>
                      <p><strong>Email:</strong> privacy@crownpermata.co.id</p>
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

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Kami akan merespons pertanyaan Anda dalam waktu 2-3 hari kerja.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Update Policy */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-800">Pembaruan Kebijakan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kebijakan privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan 
                perubahan dalam praktik bisnis kami atau perubahan peraturan hukum.
              </p>
              <p>
                Setiap perubahan signifikan akan diinformasikan melalui:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li>Email notifikasi ke pelanggan terdaftar</li>
                <li>Pemberitahuan di website kami</li>
                <li>Update di aplikasi mobile (jika ada)</li>
              </ul>
              <p className="text-sm text-gray-600">
                Penggunaan lanjutan layanan kami setelah perubahan merupakan persetujuan Anda 
                terhadap kebijakan privasi yang diperbarui.
              </p>
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
            <Link href="/terms" className="text-blue-600 hover:text-blue-800 text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}