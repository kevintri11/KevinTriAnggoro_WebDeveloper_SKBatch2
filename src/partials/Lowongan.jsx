import React, { useState } from 'react';
import Modal from '../utils/Modal';

const roles = [
  {
    title: 'Frontend Developer', type: 'Full-time', place: 'Hybrid · Jakarta', salary: 'Rp 8–12 juta / bulan', posted: 'Baru dibuka',
    description: 'Bangun pengalaman belajar yang cepat, intuitif, dan mudah diakses oleh setiap pengguna.',
    responsibilities: ['Mengembangkan antarmuka web yang responsif dan mudah digunakan.', 'Berkolaborasi dengan designer dan backend developer.', 'Menjaga kualitas kode dan performa aplikasi.'],
    requirements: ['Memahami HTML, CSS, JavaScript, dan React.', 'Mampu bekerja sama dan berkomunikasi dengan baik.', 'Memiliki portofolio project web menjadi nilai tambah.'],
  },
  {
    title: 'Backend Developer', type: 'Full-time', place: 'Hybrid · Jakarta', salary: 'Rp 10–15 juta / bulan', posted: 'Baru dibuka',
    description: 'Rancang layanan dan API andal untuk mendukung produk pendidikan yang terus berkembang.',
    responsibilities: ['Merancang dan membangun API untuk produk digital.', 'Mengelola integrasi database dan layanan pihak ketiga.', 'Menjaga keamanan, stabilitas, dan performa layanan.'],
    requirements: ['Memahami dasar backend dan REST API.', 'Pernah menggunakan database relasional atau NoSQL.', 'Terbiasa menggunakan Git dalam kolaborasi.'],
  },
  {
    title: 'UI/UX Designer', type: 'Full-time', place: 'Hybrid · Jakarta', salary: 'Rp 7–11 juta / bulan', posted: 'Baru dibuka',
    description: 'Ubah kebutuhan pengguna menjadi alur dan antarmuka digital yang jelas dan menyenangkan.',
    responsibilities: ['Membuat user flow, wireframe, dan prototype.', 'Melakukan riset sederhana untuk memahami kebutuhan pengguna.', 'Bekerja sama dengan tim produk dan developer.'],
    requirements: ['Memahami prinsip desain antarmuka dan pengalaman pengguna.', 'Mampu menggunakan Figma atau alat desain serupa.', 'Memiliki portofolio desain digital.'],
  },
  {
    title: 'Digital Marketing Specialist', type: 'Full-time', place: 'Hybrid · Jakarta', salary: 'Rp 6–9 juta / bulan', posted: 'Baru dibuka',
    description: 'Jangkau lebih banyak pencari kerja melalui kampanye dan strategi pertumbuhan yang terukur.',
    responsibilities: ['Merencanakan dan menjalankan kampanye digital.', 'Mengelola kanal media sosial dan kalender konten.', 'Menganalisis performa kampanye dan menyusun laporan.'],
    requirements: ['Memahami kanal pemasaran digital dan metrik dasarnya.', 'Mampu menulis copy yang jelas dan menarik.', 'Pengalaman mengelola kampanye menjadi nilai tambah.'],
  },
  {
    title: 'Career Mentor', type: 'Part-time', place: 'Remote · Indonesia', salary: 'Rp 4–6 juta / bulan', posted: 'Baru dibuka',
    description: 'Dampingi peserta menyusun rencana karier dan mempersiapkan langkah profesional berikutnya.',
    responsibilities: ['Mendampingi sesi konsultasi karier secara daring.', 'Memberi masukan untuk CV, portofolio, dan persiapan wawancara.', 'Membantu peserta menyusun langkah pengembangan karier.'],
    requirements: ['Memiliki pengalaman profesional di bidang yang relevan.', 'Senang berbagi pengetahuan dan mendampingi orang lain.', 'Mampu memberi masukan dengan empati dan jelas.'],
  },
  {
    title: 'Content Creator', type: 'Full-time', place: 'Hybrid · Jakarta', salary: 'Rp 6–9 juta / bulan', posted: 'Baru dibuka',
    description: 'Buat konten edukasi karier yang relevan, mudah dipahami, dan berdampak.',
    responsibilities: ['Menyusun ide dan membuat konten edukasi karier.', 'Menulis naskah untuk kanal digital dan media sosial.', 'Berkolaborasi dengan tim marketing dan desain.'],
    requirements: ['Memiliki kemampuan menulis dan bercerita.', 'Memahami format konten digital dan media sosial.', 'Portofolio tulisan atau konten menjadi nilai tambah.'],
  },
];

function Lowongan() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [applicationSent, setApplicationSent] = useState(false);

  const closeModal = () => {
    setSelectedRole(null);
    setApplicationSent(false);
  };

  return (
    <section id="roles" className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="zoom-y-out">
            <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-3">Peluang karier di Sekolah Karir</p>
            <h2 className="h2 mb-4">Lowongan kerja terbaru</h2>
            <p className="text-xl text-gray-600">Temukan posisi yang sesuai dengan keahlianmu dan tumbuh bersama tim kami.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 items-stretch">
            {roles.map((role, index) => (
              <article id={role.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')} key={role.title} className="flex flex-col p-6 sm:p-8 bg-white border border-gray-200 rounded-3xl shadow-sm scroll-mt-24" data-aos="fade-up" data-aos-delay={index * 75}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-900 text-lg font-bold" aria-hidden="true">SK</div>
                  <div>
                    <p className="font-semibold text-gray-800">Sekolah Karir</p>
                    <p className="text-gray-500">{role.posted}</p>
                  </div>
                  <span className="ml-auto rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-lime-300">Baru</span>
                </div>
                <h3 className="text-2xl font-bold leading-snug tracking-tight mb-5 text-gray-900">{role.title}</h3>
                <p className="self-start rounded-full border border-gray-200 bg-[#f6f7f2] px-4 py-2 text-gray-700 mb-6">{role.place}</p>
                <div className="border-t border-gray-200 pt-5 mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-lg font-bold text-gray-900">Est. {role.salary}</p>
                  <button type="button" className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:border-gray-500 hover:bg-gray-50 transition" onClick={() => { setSelectedRole(role); setApplicationSent(false); }}>
                    Apply <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Modal id="job-application-modal" ariaLabel="job-modal-title" show={Boolean(selectedRole)} handleClose={closeModal}>
        {selectedRole && (
          <div className="relative bg-white p-6 sm:p-8 rounded shadow-xl max-h-[90vh] overflow-y-auto">
            <button type="button" onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900" aria-label="Tutup detail lowongan">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16" aria-hidden="true"><path d="M12.72 3.293a1 1 0 0 0-1.415 0L8.012 6.586 4.72 3.293a1 1 0 0 0-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 1 0 1.414 1.414l3.293-3.293 3.293 3.293a1 1 0 0 0 1.414-1.414L9.426 8l3.293-3.293a1 1 0 0 0 0-1.414z" /></svg>
            </button>

            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-medium text-blue-600 mb-2">{selectedRole.type} · {selectedRole.place}</p>
              <h2 id="job-modal-title" className="h3 mb-4">{selectedRole.title}</h2>
              <p className="text-gray-600 mb-6">{selectedRole.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Tanggung jawab</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {selectedRole.responsibilities.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Kualifikasi</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {selectedRole.requirements.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="h4 mb-2">Kirim lamaran</h3>
                <p className="text-sm text-gray-500 mb-4">Formulir ini hanya demo; data tidak dikirim atau disimpan.</p>
                {applicationSent ? (
                  <p role="status" className="p-4 rounded bg-blue-100 text-blue-900">Lamaran demo untuk posisi {selectedRole.title} berhasil disiapkan.</p>
                ) : (
                  <form onSubmit={(event) => { event.preventDefault(); setApplicationSent(true); }} className="grid sm:grid-cols-2 gap-4">
                    <label className="block text-sm font-medium text-gray-700">Nama lengkap
                      <input type="text" name="name" required className="form-input mt-1 w-full" placeholder="Nama kamu" />
                    </label>
                    <label className="block text-sm font-medium text-gray-700">Email
                      <input type="email" name="email" required className="form-input mt-1 w-full" placeholder="nama@email.com" />
                    </label>
                    <label className="block text-sm font-medium text-gray-700 sm:col-span-2">Link portofolio atau LinkedIn (opsional)
                      <input type="url" name="portfolio" className="form-input mt-1 w-full" placeholder="https://" />
                    </label>
                    <div className="sm:col-span-2">
                      <button type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700">Kirim lamaran demo</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default Lowongan;
