import PageHero from "@/components/PageHero";
import SubpageLayout from "@/components/SubpageLayout";
import DonorRegister from "@/components/DonorRegister";

// Private office page: not linked from the menus, kept out of search engines.
export const metadata = {
  title: "Donor Register – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
  robots: { index: false, follow: false },
};

export default function DonorRegisterPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Donor Register"
        subtitle="Online donations received through the website, with donor details for 80G receipts."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Donor Register" }]}
      />
      <section style={{ padding: "50px 0 70px" }}>
        <div className="site-container">
          <DonorRegister />
        </div>
      </section>
    </SubpageLayout>
  );
}
