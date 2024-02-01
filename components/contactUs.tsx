import React from "react";
import { Card, CardContent } from "./ui/card";
import SectionTitle from "./sectionTitle";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="space-y-12 p-4">
      <SectionTitle
        title="Hubungi Kami"
        subtitle="Temui tim kami yang ramah dan berkompeten untuk membahas bagaimana kami dapat membantu meningkatkan efisiensi dan pertumbuhan bisnis Anda."
      />

      <Card className="shadow-lg">
        <CardContent className="flex p-12 md:divide-x">
          <div className="hidden w-1/2 flex-grow p-12 md:block">
            <motion.div
              initial={{
                opacity: "0%",
              }}
              animate={{ opacity: "100%" }}
              transition={{ duration: 2, delay: 1 }}
              className="w-full"
            >
              <Image
                src={"/assets/undraw_performance_overview_re_mqrq.svg"}
                className="m-auto"
                alt=""
                width={600}
                height={300}
              ></Image>
            </motion.div>
          </div>
          <div className="w-full space-y-6 p-2 text-left md:w-1/2 md:p-12">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Masukan alamat email anda." />
            </div>
            <div className="space-y-2">
              <Label>Nama</Label>
              <Input placeholder="Tulis nama anda disini." />
            </div>
            <div className="space-y-2">
              <Label>Pesan Anda</Label>
              <Textarea />
            </div>
            <Button type="submit">Kirim</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
