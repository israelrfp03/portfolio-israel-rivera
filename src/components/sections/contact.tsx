"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="py-20 max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative top-0 mb-14" title={
        <>
          TRABAJEMOS <br />
          JUNTOS
        </>} />
      <div className="z-[9999] mx-4">
        <Card className="max-w-3xl mx-auto bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-16 md:mt-28">
          <CardHeader>
            <CardTitle className="text-4xl">Formulario de contacto</CardTitle>
            <CardDescription>
              Escríbeme directamente a{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-gray-200 cursor-can-hover rounded-lg"
              >
                {config.email.replace(/@/g, "(at)")}
              </a>{" "}
              o déjame tus datos aquí.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
