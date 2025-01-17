import BeneficioLandLarHub from "@/components/larhub/benefits";
import FooterLandLarHub from "@/components/larhub/footer";
import Header from "@/components/larhub/header";
import PerguntasLandLarHub from "@/components/larhub/faq";
import PorqueLandLarHub from "@/components/larhub/why";
import SolucaoLandLarHub from "@/components/larhub/solution";
import TituloLandLarHub from "@/components/larhub/hero";
import ContactLandLarHub from "@/components/larhub/contact";
import PlanosLandLarHub from "@/components/larhub/plans";

export default function Home() {
  return (
    <div style={{ margin: 0 }}>
      <Header />
      <TituloLandLarHub />
      <SolucaoLandLarHub />
      <BeneficioLandLarHub />
      <PerguntasLandLarHub />
      <PorqueLandLarHub />
      <PlanosLandLarHub />
      <ContactLandLarHub />
      <FooterLandLarHub />
    </div>
  );
}
