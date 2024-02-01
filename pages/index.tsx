/* eslint-disable react/no-unescaped-entities */
import { Nunito } from "next/font/google";
import MainSection from "@/components/mainSection";
import Navbar from "@/components/navbar";
import LoadOnInitial from "@/components/loadOnInitial";
import { motion } from "framer-motion";
import ProductCards from "@/components/productCards";
import ContactUs from "@/components/contactUs";
import AboutUs from "@/components/aboutUs";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={nunito.className}>
      <Navbar />
      <section id="home">
        <MainSection>
          <div className="m-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center p-4">
            <div className="flex h-1/2 w-full flex-col items-center justify-between">
              <div className="max-w-screen-md text-pretty text-center text-lg font-semibold md:text-2xl lg:ml-auto">
                Platform Inovatif untuk Masa Depan Bisnis Anda. Pengelolaan yang
                Efisien, Analisis yang Mendalam, dan Keputusan yang Cerdas.
              </div>
              <motion.div
                initial={{ x: "-100vw", opacity: "0%" }}
                animate={{ x: 0, opacity: "100%" }}
                transition={{
                  duration: 1,
                }}
                className="w-full text-center italic lg:text-left"
              >
                "Transformasi Bisnis, Optimasi Efisiensi, Kesuksesan Tanpa
                Batas!"
              </motion.div>
            </div>
          </div>
        </MainSection>
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="pricing">
        <LoadOnInitial>
          <ProductCards />
        </LoadOnInitial>
      </section>

      <section id="contact">
        <LoadOnInitial>
          <ContactUs />
        </LoadOnInitial>
      </section>
    </main>
  );
}
