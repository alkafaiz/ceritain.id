import React, { Component } from "react";
import Accordion from "./accordion/accordion";
class FAQ extends Component {
  componentDidMount() {
    document.title = "FAQ - Ceritain.id";
  }
  render() {
    return (
      <div className="container fade-in-bottom">
        <div className="row mt-5">
          <div className="col ">
            <h1 className="big-text color-primary mb-5 text-center">
              Frequently Asked Question
            </h1>
            <h5 className="h5 pl-3 mt-4 mb-3">
              Panduan website apikasi ceritain.id
            </h5>
            <Accordion
              title="Apa aja yang bisa Aku dapetin dari ceritain.id?"
              content={() => (
                <p>
                  <strong>1. Berbagi cerita</strong>
                  <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp; Social media tempat curhatin
                  masalahmu dalam lingkup yang suportif untuk dukung kesehatan
                  mentalmu!
                  <br></br>
                  <strong>2. Mood track</strong> <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp; Kamu bisa catat sekaligus awasi
                  perubahan suasana hatimu <br></br>
                  <strong>3. Konseling</strong>
                  <br></br>&nbsp;&nbsp;&nbsp;&nbsp; Mau cerita tanpa di-judge?
                  Bisa! Kami punya konselor kredibel yang bisa dengerin ceritamu
                  via chat.
                </p>
              )}
            />
            <Accordion
              title="Apakah bisa konseling dengan langsung bertemu?"
              content={() => (
                <p>
                  Kamu ga perlu repot-repot ketemuan langsung dengang konselor
                  kami, karena layanan kami berbasis online. cukup buka
                  smartphone atau laptop aja kok.
                </p>
              )}
            />
            <h5 className="h5 pl-3 mt-4 mb-3">
              Kebijakan keamanan dan privasi
            </h5>
            <Accordion
              title="Apakah privasiku dijamin kerahasiannya?"
              content={() => (
                <p>
                  Tenang aja, privasi dan kerahasiaanmu adalah prioritas kami.
                  semua data dan identitas semata-mata hanya untuk kepentikan
                  konseling.
                  <br></br>Untuk rekam chat ceritamu hanya dapat dilihat oleh
                  konselor kami. jadi, kamu ga perlu khawatir lagi.
                </p>
              )}
            />
            <Accordion
              title="Apakah identitasku terlihat oleh konselor? "
              content={() => (
                <p>
                  Benar, konselor kami dapat melihat identitasmu, demi
                  kepentingan konseling. identitasmu juga tida akan
                  terpublikasikan secara bebas untuk kepentingan apapun.
                </p>
              )}
            />
            <h5 className="h5 pl-3 mt-4 mb-3">Validasi konselor</h5>
            <Accordion
              title="Apa background konselor ceritain.id?"
              content={() => (
                <p>
                  Semua konselor terpercaya kami memiliki background psikologi
                  minimal mahasiswa tingkat akhir.
                </p>
              )}
            />
            <Accordion
              title="Apakah konselor nya terpilih secara acak?"
              content={() => (
                <p>
                  kami akan mengubungkan kamu dengan konselor terbaik kami
                  setelah kamu pilih kategori ceritamu.
                </p>
              )}
            />
            <Accordion
              title="Di konseling aku selanjutnya, apakah dengan konselor yang sama?"
              content={() => (
                <p>
                  Iya benar, agar konseling kamu efisien, kamu bisa cerita
                  dengan konselor yang sama yang punya rekam jejak ceritamu
                  sebelumnya
                </p>
              )}
            />
            <Accordion
              title="Kalau aku ga cocok dengan konselorku, pakah bisa diganti?"
              content={() => (
                <p>
                  Iya dong! kabari kami melalui whatsapp atau email dan kami
                  akan memproses pergantian konselormu
                </p>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
