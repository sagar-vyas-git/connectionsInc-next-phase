import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { FadeIn, StaggerGroup, StaggerItem, PageWrap } from '../components/Reveal'
import { imgUrl } from '../utils/imgUrl'

const websiteItems = [
  'Website Development',
  'Design User Interface for Web and Mobile',
  'Web Navigation Animations',
  'Branding Logos',
  'Infographics and Data Visualization',
  'Illustrations and Icons',
  'Embed Branding Themes',
  'Prepare Branding Imagery',
]

const socialItems = [
  'Enabling visibility on all relevant social media platforms',
  'Social media cleanup and ongoing management',
  'SEO-friendly language and hashtags for Reels',
  'Designing eye-catching thumbnails',
  'Posting engaging text and image content',
]

const contentItems = [
  'Professional photographs and videos',
  'Immersive 360° virtual tours, floorplans, and measurements',
  'Cinematic drone captures',
  'Editing long-form videos and Instagram Reels',
  'Embedding branding elements and music in Reels',
]

export default function Services() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Three disciplines.
            <br />
            <span className="text-cyan-electric">One unmistakable brand.</span>
          </>
        }
        kicker="Websites, social media engagement, and content creation — built to grow trust where your customers already are."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#websites" className="btn-primary">Digital Presence</a>
          <a href="#social" className="btn-ghost">Social Media</a>
          <a href="#content" className="btn-ghost">Content Creation</a>
        </div>
      </PageHero>

      {/* 01 · Digital Presence */}
      <section id="websites" className="py-20 lg:py-28">
        <div className="container-edge">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <FadeIn>
                <span className="eyebrow">01 · Digital Presence</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-h2 mt-4 text-bone">Websites.</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-bone/70 leading-relaxed">
                  Website creates your Digital Presence. It's your most powerful tool for building trust and credibility with potential clients.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-4 text-bone/70 leading-relaxed">
                  Unlike generic, cookie-cutter websites that blend into the digital crowd, we take pride in creating a unique, memorable identity for your website—one that stands out and inspires trust.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-bone/10 aspect-[4/3]">
                  <img
                    src={imgUrl('images/services/home-office.jpg')}
                    alt="Digital Presence"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  />
                </div>
              </FadeIn>
            </div>
            <div>
              <StaggerGroup className="grid gap-3 sm:grid-cols-2">
                {websiteItems.map((item, i) => (
                  <StaggerItem
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-bone/10 bg-ink-900/60 p-5 transition hover:border-cyan-electric/30"
                  >
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-cyan-electric/40 text-xs font-semibold text-cyan-electric">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-bone/80 leading-snug">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · Social Media */}
      <section id="social" className="py-20 lg:py-28 relative">
        <div className="gradient-radial-gold absolute inset-0 opacity-60 pointer-events-none" />
        <div className="container-edge relative">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="lg:order-1">
              <StaggerGroup className="space-y-3">
                {socialItems.map((item, i) => (
                  <StaggerItem
                    key={item}
                    className="flex items-start gap-4 rounded-xl border border-gold-warm/20 bg-ink-900/60 p-5 transition hover:border-gold-warm/40"
                  >
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold-warm/40 text-xs font-semibold text-gold-warm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-bone/80 leading-snug">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
            <div className="lg:order-2">
              <FadeIn>
                <span className="eyebrow">02 · Social Media</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-h2 mt-4 text-bone">Engagement.</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-bone/70 leading-relaxed">
                  Our goal is to transform your social media presence into a powerful extension of your brand, so that every post, comment, and interaction leaves a lasting impression.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-bone/10 aspect-[4/3]">
                  <img
                    src={imgUrl('images/services/travel-apps.jpg')}
                    alt="Social Media Engagement"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · Content Creation */}
      <section id="content" className="py-20 lg:py-28">
        <div className="container-edge">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <FadeIn>
                <span className="eyebrow">03 · Content Creation</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-h2 mt-4 text-bone">Stories.</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-bone/70 leading-relaxed">
                  We don't just produce visuals; we craft stories that capture the heart of your business and build a connection with your audience.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-bone/10 aspect-[4/3]">
                  <img
                    src={imgUrl('images/services/camera.jpg')}
                    alt="Content Creation"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  />
                </div>
              </FadeIn>
            </div>
            <div>
              <StaggerGroup className="space-y-3">
                {contentItems.map((item, i) => (
                  <StaggerItem
                    key={item}
                    className="flex items-start gap-4 rounded-xl border border-cyan-electric/20 bg-ink-900/60 p-5 transition hover:border-cyan-electric/40"
                  >
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-cyan-electric/40 text-xs font-semibold text-cyan-electric">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-bone/80 leading-snug">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Realty CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="container-edge">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-gold-warm/30 bg-gradient-to-br from-gold-warm/15 via-gold-warm/5 to-ink-900 p-10 md:p-16">
              <div className="gradient-radial-gold absolute inset-0 pointer-events-none" />
              <div className="relative">
                <span className="eyebrow-gold">Real Estate</span>
                <h3 className="mt-4 font-display text-4xl font-semibold text-bone md:text-5xl">
                  Boost Your Real Estate Listings
                </h3>
                <p className="mt-2 font-display text-2xl italic text-bone/80">
                  Starting at just <span className="text-gold-warm">$3.</span>
                </p>
                <p className="mt-6 max-w-xl text-bone/70 leading-relaxed">
                  Retouching, digital staging, blueprints, 360° tours, drone capture, and listing content — every service tuned for realtors.
                </p>
                <Link to="/realty" className="btn-gold mt-8 inline-flex">
                  Explore Realty Services →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrap>
  )
}
