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
import { Mail, Phone } from "lucide-react";
import { useToast } from "../ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const copyEmail = () => {
    navigator.clipboard.writeText(config.email);
    toast({ description: "Email copiado al portapapeles." });
  };

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
              Escríbeme directamente o déjame tus datos aquí.
            </CardDescription>
            <div className="flex flex-col gap-1.5 pt-1 sm:flex-row sm:items-center sm:gap-5">
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-2 text-gray-200 cursor-can-hover rounded-lg"
              >
                <Mail className="size-4 shrink-0" />
                {config.email}
              </button>
              <a
                href={`tel:${config.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-gray-200 cursor-can-hover rounded-lg"
              >
                <Phone className="size-4 shrink-0" />
                {config.phone}
              </a>
            </div>
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
