import React from "react";
import SectionTitle from "./sectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  const data = [
    {
      title: "Inovasi Berbasis Pengguna",
      description:
        "Kami memahami bahwa setiap bisnis unik. Oleh karena itu, kami menyediakan solusi ERP yang dapat disesuaikan dengan kebutuhan spesifik Anda, memberikan inovasi yang benar-benar berfokus pada pengguna.",
      image: "/assets/undraw_artificial_intelligence_re_enpp.svg",
    },
    {
      title: "Komitmen Terhadap Kualitas",
      description:
        "Kualitas adalah inti dari setiap aspek yang kami tawarkan. Dari pencatatan transaksi hingga analisis prediktif, setiap fitur dirancang dengan cermat untuk memastikan ketepatan dan keandalan.",
      image: "/assets/undraw_real_time_analytics_re_yliv.svg",
    },
    {
      title: "Pelayanan Pelanggan 24/7",
      description:
        "Kesejahteraan bisnis Anda adalah prioritas utama kami. Tim dukungan pelanggan kami siap membantu Anda kapan saja, memberikan kepercayaan dan kepastian.",
      image: "/assets/undraw_active_support_re_b7sj.svg",
    },
    {
      title: "Masa Depan Bisnis yang Terukur",
      description:
        "Dengan fokus pada visualisasi data dan analisis prediktif, kami membantu Anda menjelajahi masa depan bisnis Anda. Bermitra dengan kami adalah langkah menuju pengambilan keputusan yang lebih cerdas dan pertumbuhan yang berkelanjutan.",
      image: "/assets/undraw_tasting_re_3k5a.svg",
    },
  ];

  return (
    <div className="min-h-[100vh] min-w-[100vw] bg-white p-4 md:p-12">
      <div className="m-auto max-w-screen-xl space-y-12">
        <SectionTitle
          title="Tentang Kami"
          subtitle="Membangun Solusi Bisnis Masa Depan"
        />
        <div className="m-auto max-w-screen-md space-y-6 text-pretty text-center first-letter:text-2xl first-letter:font-semibold">
          <div className="first-letter:text-2xl first-letter:font-semibold">
            Selamat datang di platform ERP kami, tempat di mana inovasi bertemu
            dengan efisiensi untuk membentuk masa depan bisnis Anda. Kami adalah
            tim yang berkomitmen untuk memberikan solusi terbaik dalam manajemen
            bisnis, dengan fokus pada keandalan, kreativitas, dan pengalaman
            pengguna yang unggul.
          </div>
        </div>

        <div className="space-y-14 pt-4 md:pt-12">
          {data.map((el, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col md:odd:flex-row-reverse md:even:flex-row`}
              >
                <motion.div
                  initial={{
                    opacity: "0%",
                  }}
                  animate={{ opacity: "100%" }}
                  transition={{ duration: 3, delay: 3 }}
                  className="w-full space-y-4 pb-6 md:w-1/2 "
                >
                  <Image
                    src={el.image}
                    className="m-auto"
                    alt=""
                    width={300}
                    height={100}
                  ></Image>
                </motion.div>
                <motion.div
                  initial={{
                    x: index % 2 ? "100vw" : "-100vw",
                    opacity: "0%",
                  }}
                  animate={{ x: 0, opacity: "100%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="w-full space-y-4 md:w-1/2"
                >
                  <div className="text-center text-lg font-semibold md:text-left">
                    {el.title}
                  </div>
                  <div className="max-w-96 text-center text-gray-700 md:text-left">
                    {el.description}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
