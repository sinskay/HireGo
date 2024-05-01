import Hero from "@/components/Hero"
import TrustedCompanies from "@/components/TrustedCompanies"
import HireGoSection from "@/components/HireGoSection"
import NextLevel from "@/components/NextLevel"
import HelpTeams from "@/components/HelpTeams"
import GetStarted from "@/components/GetStarted"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <TrustedCompanies />
      <HireGoSection />
      <NextLevel />
      <HelpTeams />
      <GetStarted />
    </main>
  );
}
