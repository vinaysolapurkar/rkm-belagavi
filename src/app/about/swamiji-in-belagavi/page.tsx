import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata = {
  title: "Swami Vivekananda in Belagavi – RAMAKRISHNA MISSION ASHRAMA, BELAGAVI",
};

export default function SwamijiInBelagaviPage() {
  return (
    <SubpageLayout>
      <PageHero
        title="Swami Vivekananda in Belagavi"
        subtitle="The remarkable account of Swamiji's 12-day stay in Belagavi during his parivrajaka days, October 16–27, 1892."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Swamiji in Belagavi" },
        ]}
      />

      {/* Opening narrative — dramatic drop cap style */}
      <section style={{ padding: "80px 0 70px" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            {/* Date stamp */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "10px" }}>
                The Arrival
              </p>
              <h2 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 600,
                color: "#1A1A1A",
                marginBottom: "10px",
              }}>
                The Bhate House
              </h2>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "18px", color: "#7A756D", fontStyle: "italic" }}>
                16 October 1892
              </p>
              <div style={{ width: "55px", height: "3px", background: "#B8860B", margin: "20px auto 0", borderRadius: "2px" }} />
            </div>

            <p style={{ fontSize: "17px", color: "#4A4743", lineHeight: 1.95, textAlign: "justify", marginBottom: "18px" }}>
              <span style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "52px",
                fontWeight: 700,
                color: "#1A2F2F",
                float: "left",
                lineHeight: 0.8,
                marginRight: "8px",
                marginTop: "4px",
              }}>O</span>n 16th October 1892, at 6 am a knock was heard at the door of an eminent lawyer of the city, Sadashiv Balakrishnapant Bhate. The door opened and there stood a young monk, tall and regal, with large sparkling eyes and radiant countenance. He introduced himself and handed over a letter from Mr Bhate&apos;s friend, Mr Raosaheb Lakshman Rao Golvalkar, private secretary of the Kolhapur Maharaja.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              Though intrigued, the Bhate family welcomed him. Soon Bhate realized the wonderful guest that he had with him. He was rather an unconventional sannyasi. But he realized that he was well grounded in Sanskrit, could even quote Panini&apos;s Ashtadhyayi. Bhate quickly realized that he had a great person in his midst and so he called all the important people so that they could debate with him.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
              He later took Swamiji to meet Haripada Mitra, who was sub divisional forest officer.
            </p>
          </div>
        </div>
      </section>

      {/* Bhate portrait + Bhate House */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "40px", maxWidth: "880px", margin: "0 auto", alignItems: "start" }}>
            <div className="reveal-left" style={{ textAlign: "center" }}>
              <div style={{ overflow: "hidden", border: "1px solid #E8E2D8", boxShadow: "0 8px 35px rgba(26,47,47,0.1)", marginBottom: "14px" }}>
                <Image src="/images/sadashiv-bhate.jpg" alt="Mr. Sadashiv Bhate" width={300} height={380} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "17px", fontWeight: 600, color: "#1A2F2F" }}>Mr. Sadashiv Bhate</p>
              <p style={{ fontSize: "12px", color: "#7A756D", marginTop: "2px" }}>Eminent lawyer of Belagavi</p>
            </div>
            <div className="reveal-right" style={{ textAlign: "center" }}>
              <div style={{ overflow: "hidden", border: "1px solid #E8E2D8", boxShadow: "0 8px 35px rgba(26,47,47,0.1)", marginBottom: "14px" }}>
                <Image src="/images/bhate-house.jpg" alt="The Bhate House — where Swamiji stayed for the first three days" width={520} height={380} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "17px", fontWeight: 600, color: "#1A2F2F" }}>The Bhate House</p>
              <p style={{ fontSize: "12px", color: "#7A756D", marginTop: "2px" }}>Where Swamiji stayed 16&ndash;18 October 1892</p>
            </div>
          </div>
        </div>
      </section>

      {/* At Haripada Mitra's House */}
      <section style={{ padding: "80px 0", background: "#1A2F2F", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)",
        }} />
        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "14px" }}>
              The Stay
            </p>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "10px",
            }}>
              At Haripada Mitra&apos;s House
            </h2>
            <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "18px", color: "rgba(212,192,120,0.9)", fontStyle: "italic" }}>
              19&ndash;27 October 1892
            </p>
            <div style={{ width: "55px", height: "3px", background: "#B8860B", margin: "20px auto 0", borderRadius: "2px" }} />
          </div>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.82)", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              Haripada Mitra was an agnostic and thought of every sannyasi as a cheat. However when he conversed with him, he realized that the monk had nothing to ask of him. Impressed by this noble monk, Haripada begged him to stay with him. The swami said, &ldquo;I am quite happy with the Maharashtrian. If I should leave after seeing a Bengali, he might be hurt. Besides, the family treats me with great love. But I will think about it and let you know&rdquo;. However he promised to take breakfast with him next day.
            </p>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.82)", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              Next morning, Haripada Babu waited for a long time. Eventually, as the swami did not come, he went to Mr Bhate&apos;s house to bring him. There he was surprised to see a large gathering of pleaders, pundits and prominent citizens asking Swamiji many questions. Saluting the swami, Haripada took his seat. He was amazed at the ready replies which the swami gave, without pause, in English, Hindi, Sanskrit and Bengali.
            </p>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.82)", lineHeight: 1.9, textAlign: "justify" }}>
              On being pressed again to move with Haripadababu, &ldquo;I shall go if you can make my host agree to the proposal&rdquo;. After much persuasion, Mr Bhate agreed. Haripada Mitra did not allow him to leave and so Swamiji stayed in that house for a period of <strong style={{ color: "#D4C078" }}>9 days</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Haripada Mitra portrait + Monument */}
      <section style={{ padding: "70px 0 80px", background: "#F8F5EF" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "40px", maxWidth: "880px", margin: "0 auto", alignItems: "start" }}>
            <div className="reveal-left" style={{ textAlign: "center" }}>
              <div style={{ overflow: "hidden", border: "1px solid #E8E2D8", boxShadow: "0 8px 35px rgba(26,47,47,0.1)", marginBottom: "14px" }}>
                <Image src="/images/haripada-mitra.jpg" alt="Mr. Haripada Mitra" width={300} height={380} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "17px", fontWeight: 600, color: "#1A2F2F" }}>Mr. Haripada Mitra</p>
              <p style={{ fontSize: "12px", color: "#7A756D", marginTop: "2px" }}>Sub-divisional Forest Officer</p>
            </div>
            <div className="reveal-right" style={{ textAlign: "center" }}>
              <div style={{ overflow: "hidden", border: "1px solid #E8E2D8", boxShadow: "0 8px 35px rgba(26,47,47,0.1)", marginBottom: "14px" }}>
                <Image src="/images/haripada-mitra-monument.jpg" alt="Monument at Haripada Mitra's house" width={520} height={380} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: "17px", fontWeight: 600, color: "#1A2F2F" }}>Haripada Mitra&rsquo;s House</p>
              <p style={{ fontSize: "12px", color: "#7A756D", marginTop: "2px" }}>Where Swamiji stayed 19&ndash;27 October 1892</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversations */}
      <section style={{ padding: "80px 0" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="conversations" title="Conversations with Haripada Mitra" />
          </div>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: "50px" }}>
              <h3 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "24px",
                fontWeight: 600,
                color: "#1A2F2F",
                marginBottom: "16px",
              }}>
                On Sannyasis and the Householder
              </h3>
              <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "20px" }}>
                Once Haripada asked him, &ldquo;Why do sannyasis idle away their time? Why do they depend on the charity of others? Why don&apos;t they undertake some work beneficial to society?&rdquo;
              </p>
              <blockquote style={{
                background: "linear-gradient(135deg, #1A2F2F 0%, #141F1F 100%)",
                borderLeft: "4px solid #B8860B",
                padding: "32px 36px",
                margin: "0 0 20px 0",
                position: "relative",
              }}>
                <span style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "60px",
                  color: "rgba(184,134,11,0.3)",
                  position: "absolute",
                  top: "10px",
                  left: "20px",
                  lineHeight: 1,
                }}>&ldquo;</span>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.88)", lineHeight: 1.9, textAlign: "justify", fontStyle: "italic", position: "relative", zIndex: 1 }}>
                  Now, look here. You are earning this money with such struggle, of which, only a little portion will you spend on yourself; and some of it you spend on others who you think, are your own. But they neither acknowledge any gratefulness for what you do for them, nor are they satisfied with what they get. The balance you save like a mythological yaksha who never enjoys it. When you die, somebody else will enjoy it all; and perchance, he will abuse you for not having accumulated more. This is your condition. On the other hand, I do nothing. When I feel hungry, I let others know by gestures that I want food, and I eat whatever I get. Neither do I struggle nor do I save. Now, tell me, who among us is wiser, you or I?
                </p>
              </blockquote>
              <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
                Haripada later wrote: &ldquo;I was astonished, for before this, nobody dared to talk like this so boldly and frankly.&rdquo;
              </p>
            </div>

            <div className="reveal">
              <h3 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "24px",
                fontWeight: 600,
                color: "#1A2F2F",
                marginBottom: "16px",
              }}>
                On Fault-Finding
              </h3>
              <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "20px" }}>
                Haripada was not pulling on well with his superiors at work. Any little remark from them would make him lose his balance. When he told Swamiji of his difficulty, the swami remarked:
              </p>
              <blockquote style={{
                background: "linear-gradient(135deg, #1A2F2F 0%, #141F1F 100%)",
                borderLeft: "4px solid #B8860B",
                padding: "32px 36px",
                margin: "0",
                position: "relative",
              }}>
                <span style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "60px",
                  color: "rgba(184,134,11,0.3)",
                  position: "absolute",
                  top: "10px",
                  left: "20px",
                  lineHeight: 1,
                }}>&ldquo;</span>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.88)", lineHeight: 1.9, textAlign: "justify", fontStyle: "italic", position: "relative", zIndex: 1 }}>
                  Why are you in service? Is it because for the salary you get? You are getting it regularly every month; so why should you be upset? Will you tell me whether apart from doing work for which you draw the salary, did you ever do anything just to please your superiors? You never did so, and yet you are angry with them that they are not satisfied with you. Is that wise on your part? Know it for certain that the ideas we entertain about others express themselves through our conduct. We see in the external world the same image that we carry in our hearts; nobody realizes how true the saying &lsquo;The world is good when I am good&rsquo; is. From today try to get rid of the habit of finding fault with others, and you will find the extent you succeed in this, the attitudes and reactions of others also change accordingly.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* The Visible Brahman */}
      <section style={{ padding: "80px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading id="brahman" title="The Visible Brahman" />
          </div>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              One day sometime in 1902, in Belur Math, Swamiji came down and sat on the canvas cot under the mango tree in the courtyard, facing west. The monks around him were busy with their activities. Suddenly Vivekananda&apos;s eyes became radiant. Surcharged with spiritual fervour, he said to a disciple:
            </p>
            <blockquote style={{
              background: "#fff",
              borderLeft: "4px solid #B8860B",
              padding: "32px 36px",
              margin: "0 0 24px 0",
              boxShadow: "0 4px 20px rgba(26,47,47,0.06)",
              position: "relative",
            }}>
              <span style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "60px",
                color: "rgba(184,134,11,0.2)",
                position: "absolute",
                top: "10px",
                left: "20px",
                lineHeight: 1,
              }}>&ldquo;</span>
              <p style={{ fontSize: "16px", color: "#1A2F2F", lineHeight: 1.9, textAlign: "justify", fontStyle: "italic", position: "relative", zIndex: 1 }}>
                Where will you go to see Brahman? He is immanent in all Beings. Here, here is the visible Brahman! Shame on those who, neglecting the visible Brahman, set their minds on other things! Here is the visible Brahman before you as tangible as the fruit in one&apos;s hand! Can&apos;t you see? Here, here, here is Brahman!
              </p>
            </blockquote>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify", marginBottom: "18px" }}>
              These words struck people around him like an electric shock. For about fifteen minutes no one could move or function. At last, Vivekananda said to Premananda, &ldquo;Now go to worship,&rdquo; and all were released.
            </p>
            <p style={{ fontSize: "16px", color: "#4A4743", lineHeight: 1.9, textAlign: "justify" }}>
              Swamiji explained this phenomenon on another occasion: &ldquo;He who has realized Atman becomes a house of great power. From him as centre, and within a certain radius, emanates a spiritual force, and all those who come within this circle become animated with his ideas and are overwhelmed by them.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Sister Nivedita's Tribute */}
      <section style={{ padding: "80px 0" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#B8860B", marginBottom: "24px" }}>
              A Tribute
            </p>
            <blockquote>
              <p style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(20px, 2.5vw, 24px)",
                color: "#1A2F2F",
                lineHeight: 1.7,
                fontStyle: "italic",
                fontWeight: 500,
              }}>
                &ldquo;He stands merely as the Revealer, the Interpreter to India of the treasures that she herself possesses. The truths he preaches would have been as true, had he never been born. The difference would have lain in their difficulty of access, in their want of modern clearness and incisiveness of statement. Had he not lived, texts that today will carry the bread of life to thousands might have remained the obscure disputes of scholars. He taught with authority, and not as one of the Pundits.&rdquo;
              </p>
            </blockquote>
            <div style={{ width: "40px", height: "2px", background: "#B8860B", margin: "24px auto" }} />
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#1A2F2F" }}>Sister Nivedita</p>
          </div>
        </div>
      </section>

      {/* Swamiji's Photos in Belgaum */}
      <section style={{ padding: "80px 0", background: "#F3EDE4" }}>
        <div className="site-container">
          <div className="reveal">
            <SectionHeading title="Swamiji&rsquo;s Photos in Belgaum" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", maxWidth: "780px", margin: "0 auto" }}>
            <div className="reveal-left" style={{ overflow: "hidden", border: "1px solid #E8E2D8", boxShadow: "0 8px 35px rgba(26,47,47,0.1)" }}>
              <div style={{ aspectRatio: "3/4", position: "relative", overflow: "hidden", background: "#F3EDE4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/images/swamiji-belgaum-1.jpg" alt="Swami Vivekananda — Belgaum" width={400} height={533} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
            </div>
            <div className="reveal-right" style={{ overflow: "hidden", border: "1px solid #E8E2D8", boxShadow: "0 8px 35px rgba(26,47,47,0.1)" }}>
              <div style={{ aspectRatio: "3/4", position: "relative", overflow: "hidden", background: "#F3EDE4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src="/images/swamiji-belgaum-2.jpg" alt="Swami Vivekananda — Belgaum" width={400} height={533} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section style={{ padding: "90px 0", background: "linear-gradient(135deg, #1A2F2F 0%, #141F1F 50%, #1A1A1A 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)",
        }} />
        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: "1px", height: "40px", background: "#B8860B", margin: "0 auto 30px", opacity: 0.6 }} />
            <blockquote style={{ marginBottom: "36px" }}>
              <p style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(22px, 3vw, 28px)",
                color: "#fff",
                lineHeight: 1.6,
                fontStyle: "italic",
                fontWeight: 500,
              }}>
                &ldquo;What does it matter! I have given them enough for fifteen hundred years.&rdquo;
              </p>
              <p style={{ fontSize: "13px", color: "#D4C078", fontWeight: 600, marginTop: "16px", letterSpacing: "0.5px" }}>
                — Swami Vivekananda, about a year before his passing
              </p>
            </blockquote>
            <div style={{ width: "40px", height: "2px", background: "rgba(184,134,11,0.5)", margin: "0 auto 36px" }} />
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.92)", lineHeight: 1.7, marginBottom: "18px", fontWeight: 500 }}>
              Belagavi is one of the few cities in India where we still have both buildings where Swamiji stayed intact &ndash; functioning as centres of the Ramakrishna Order.
            </p>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
              It is for this reason that Ramakrishna Math and Mission has established this temple that can serve as a beacon for spiritual and scientific progress of humanity. People who come within the radius of his influence will undoubtedly excel, be it in spiritual or scientific spheres.
            </p>
            <div style={{ width: "1px", height: "40px", background: "#B8860B", margin: "30px auto 0", opacity: 0.6 }} />
          </div>
        </div>
      </section>

      {/* Sources */}
      <section style={{ padding: "50px 0" }}>
        <div className="site-container">
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "13px", color: "#8A847C", lineHeight: 1.7, fontStyle: "italic" }}>
              Sources: Reminiscences recorded by Prof. Ganesh Bhate (eldest son of Sri Sadashiv Bhate) and Sri Haripada Mitra. Published in <em>&ldquo;Reminiscences of Swami Vivekananda&rdquo;</em> by Advaita Ashrama, a publication centre of the Ramakrishna Order.
            </p>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
