import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import SectionTitle from "./sectionTitle";

const ProductCards = () => {
  const data = [
    {
      name: "Basic",
      price: '100',
      features: [
        "Mencatat barang masuk",
        "Mencatat barang keluar",
        "Mencatat hasil keuntungan",
      ],
    },
    {
      name: "Business",
      price: '175',
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
      ],
    },
    {
      name: "Entrepreneur ",
      price: '250',
      features: [
        "Mencatat barang masuk dan keluar",
        "Mencatat Keuntungan",
        "Dapat menganalisa hasil penjualan dengan CHART",
        "Support 7x24 Jam",
        "Export data ke Excel",
        "AI Prediksi penghasilan",
      ],
    },
  ];

  return (
    <div className="p-4 space-y-12">
      <SectionTitle
        title="Pilih Sesuai Kebutuhan"
        subtitle="Temukan paket dengan harga yang sesuai dengan kebutuhan bisnis anda"
      />

      <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-stretch gap-10 pt-12">
        {data.map((el, index) => {
          return (
            <motion.div
              initial={{ y: "20vh", opacity: "0%" }}
              animate={{ y: 0, opacity: "100%" }}
              transition={{
                delay: index === 0 ? 1.5 : index === 1 ? 1.25 : 1.75,
                duration: 2,
              }}
              key={index}
              className="w-full md:w-1/3"
            >
              <Card
                className={`flex h-full flex-col justify-between gap-8 ${index === 1 && "md:scale-110"}`}
              >
                <div>
                  <CardHeader>
                    <CardTitle>{el.name}</CardTitle>
                    <CardDescription className="align-middle">
                      IDR <span className="text-2xl text-blue-700 font-semibold">{el.price}K</span> / Month
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div>
                      {el.features.map((feature, index) => (
                        <div
                          key={index}
                          className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                          <div className="space-y-1">
                            <p className="text-left text-sm font-medium leading-none">
                              {feature}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={index % 2 ? "default" : "secondary"}
                  >
                    <Check className="mr-2 h-4 w-4" /> Beli Paket
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCards;
