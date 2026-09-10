import { SITE } from "@/lib/site-config";

type ClinicMapProps = {
  height?: number;
  title?: string;
};

export const ClinicMap = ({
  height = 180,
  title = "Dr. Muller Dentistry location on Google Maps",
}: ClinicMapProps) => (
  <iframe
    src={SITE.mapEmbedSrc}
    width="100%"
    height={height}
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title={title}
    className="w-full"
  />
);
