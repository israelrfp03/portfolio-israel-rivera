import { EDUCATION } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <SectionWrapper
      id="education"
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="education"
          title="Estudios"
          desc="Mi formación académica."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-6">
          {EDUCATION.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const EducationCard = ({
  education,
  index,
}: {
  education: (typeof EDUCATION)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-secondary/40 p-2.5">
                <GraduationCap className="size-5 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-xl font-bold tracking-tight">
                  {education.title}
                </CardTitle>
                <div className="text-base font-medium text-muted-foreground">
                  {education.institution}
                </div>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <Badge variant="secondary" className="w-fit whitespace-nowrap font-mono text-xs font-normal">
                {education.startDate} - {education.endDate}
              </Badge>
              {/* The logo file has its own white background baked in, so it
                  sits in a matching white badge instead of fighting it —
                  same fixed size on every card. */}
              <div className="flex h-14 w-[130px] items-center justify-center rounded-lg bg-white p-2">
                <img
                  src="/assets/logos-institutions/ies-suarez-de-figueroa.png"
                  alt="IES Suárez de Figueroa"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default EducationSection;
