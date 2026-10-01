import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { LayoutTemplate, X, Menu, ArrowRight } from 'lucide-react';
import { landingPageStyles } from '../assets/dummystyle'
import { ProfileInfoCard } from '../components/Cards';
import { Zap, Download } from 'lucide-react';
import Modal from '../components/Modal';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import DarkModeToggle from '../components/DarkModeToggle';


const LandingPage = () => {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (user) {
      navigate('/dashboard');  // go to dashboard if user is logged in
    } else {
      setOpenAuthModal(true);  // open login/signup modal if not logged in
    }
  };

  const handleViewTemplates = () => {
    // Navigate to templates page
    navigate('/templates');
  };




  return (
    <div className={landingPageStyles.container}> 
    {/* HEADER SECTION */}
      <header className={landingPageStyles.header}>
        <div className={landingPageStyles.headerContainer}>
          <div className={landingPageStyles.logoContainer}>
            <div className={landingPageStyles.logoIcon}>
              <LayoutTemplate className={landingPageStyles.logoIconInner} />
            </div>
            <span className={landingPageStyles.logoText}>
              ResumeXpert
            </span>
          </div>
          {/* MOBILE MENU BUTTON */}
          <div className='flex items-center gap-3 md:hidden'>
            <DarkModeToggle />
            <button className={landingPageStyles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? 
                <X size={24} className={landingPageStyles.mobileMenuIcon} /> :
                <Menu size={24} className={landingPageStyles.mobileMenuIcon} />}
            </button>
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className=' hidden md:flex items-center gap-4' >
            <DarkModeToggle />
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button className={landingPageStyles.desktopAuthButton}onClick={() => setOpenAuthModal(true)}>
                <div className={landingPageStyles.desktopAuthButtonOverlay}></div>
                <span className={landingPageStyles.desktopAuthButtonText}> Get Started</span>
              </button>
            )}
          </div>
        </div>

        {/* MOBILE MENU*/}
        {mobileMenuOpen && (
          <div className={landingPageStyles.mobileMenu}>
            <div className={landingPageStyles.mobileMenuContainer}>
              <div className="mb-4 flex justify-center">
                <DarkModeToggle />
              </div>
              {user ? (
                <div className={landingPageStyles.mobileUserInfo}>
                  <div className={landingPageStyles.mobileUserWelcome}>
                    Welcome Back, {user.name || "User"}
                  </div>
                  <button className={landingPageStyles.mobileDashboardButton}
                    onClick={() => {
                      navigate('/dashboard');
                      setMobileMenuOpen(false);
                    }}> 
                    Go To Dashboard
                  </button>
                </div>
              ) : (
                <button className={landingPageStyles.mobileAuthButton}
                  onClick={() => {
                    setOpenAuthModal(true);
                    setMobileMenuOpen(false);
                  }}>
                    Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT SECTION */}
      <main className={landingPageStyles.main}>
        <section className={landingPageStyles.heroSection}>
          <div className={landingPageStyles.heroGrid}>

            {/* LEFT CONTENT */}
            <div className={landingPageStyles.heroLeft}>
              <div className={landingPageStyles.tagline}>
                ✨ Your Career Journey Starts Here
              </div>

              <h1 className={landingPageStyles.heading}>
                <span className={landingPageStyles.headingText}>Transform Your</span>
                <span className={landingPageStyles.headingGradient}>Career Story</span>
                <span className={landingPageStyles.headingText}>Into Success</span>
              </h1>

              <p className={landingPageStyles.description}>
                Craft stunning, ATS-friendly resumes that make recruiters stop scrolling. 
                <span className="block mt-2">Join 100K+ professionals who've unlocked their dream opportunities with beautifully designed resumes.</span>
              </p>

              <div className={landingPageStyles.ctaButtons}>
                <button className={landingPageStyles.primaryButton}
                  onClick={handleCTA}>
                  <div className={landingPageStyles.primaryButtonOverlay}>
                  </div>
                  <span className={landingPageStyles.primaryButtonContent}>
                    Begin Your Journey
                    <ArrowRight className={landingPageStyles.primaryButtonIcon } size={18}  />
                  </span>
                </button>

                <button className={landingPageStyles.secondaryButton} 
                  onClick={handleViewTemplates}> 
                    Explore Designs
                  </button>
              </div>

                {/* STATS GRID */}
                <div className={landingPageStyles.statsContainer}>{
                  [
                    { value: '100K+', label: 'Resumes Crafted', gradient: 'from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400' },
                    { value: '4.9★', label: 'Trusted Rating', gradient: 'from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400' },
                    { value: '5 Min', label: 'Quick Build', gradient: 'from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400' }
                  ].map((stat, idx) => (
                    <div key={idx} className={landingPageStyles.statItem}>
                      <div className={`${landingPageStyles.statNumber}${stat.gradient}`}>
                        {stat.value}
                      </div>
                      <div className={landingPageStyles.statLabel}>{stat.label}</div>
                    </div>
                  ))
                }

                </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className={landingPageStyles.heroIllustration}>
                            <div className={landingPageStyles.heroIllustrationBg}></div>
                            <div className={landingPageStyles.heroIllustrationContainer}>
                                <svg
                                    viewBox="0 0 400 500"
                                    className={landingPageStyles.svgContainer}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Background */}
                                    <defs>
                                        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#7C3AED" />
                                            <stop offset="50%" stopColor="#EC4899" />
                                            <stop offset="100%" stopColor="#3B82F6" />
                                        </linearGradient>
                                        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#ffffff" />
                                            <stop offset="100%" stopColor="#f8fafc" />
                                        </linearGradient>
                                    </defs>

                                    {/* SVG elements */}
                                    <rect x="50" y="50" width="300" height="400" rx="20" className={landingPageStyles.svgRect} />
                                    <circle cx="120" cy="120" r="25" className={landingPageStyles.svgCircle} />
                                    <rect x="160" y="105" width="120" height="8" rx="4" className={landingPageStyles.svgRectPrimary} />
                                    <rect x="160" y="120" width="80" height="6" rx="3" className={landingPageStyles.svgRectSecondary} />
                                    <rect x="70" y="170" width="260" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                                    <rect x="70" y="185" width="200" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                                    <rect x="70" y="200" width="240" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                                    <rect x="70" y="230" width="60" height="6" rx="3" className={landingPageStyles.svgRectPrimary} />
                                    <rect x="70" y="250" width="40" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
                                    <rect x="120" y="250" width="50" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
                                    <rect x="180" y="250" width="45" height="15" rx="7" className={landingPageStyles.svgRectSkill} />
                                    <rect x="70" y="290" width="80" height="6" rx="3" className={landingPageStyles.svgRectSecondary} />
                                    <rect x="70" y="310" width="180" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                                    <rect x="70" y="325" width="150" height="4" rx="2" className={landingPageStyles.svgRectLight} />
                                    <rect x="70" y="340" width="200" height="4" rx="2" className={landingPageStyles.svgRectLight} />

                                    {/* Animated elements */}
                                    <circle cx="320" cy="100" r="15" className={landingPageStyles.svgAnimatedCircle}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0,0; 0,-10; 0,0"
                                            dur="3s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                    <rect x="30" y="300" width="12" height="12" rx="6" className={landingPageStyles.svgAnimatedRect}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="translate"
                                            values="0,0; 5,0; 0,0"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                    <polygon points="360,200 370,220 350,220" className={landingPageStyles.svgAnimatedPolygon}>
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            values="0 360 210; 360 360 210; 0 360 210"
                                            dur="4s"
                                            repeatCount="indefinite"
                                        />
                                    </polygon>
                                </svg>
                            </div>
                        </div>
          </div>
        </section>

        {/* FEATURES SECTIONS */}
        <section id="features-section" className={landingPageStyles.featuresSection}>
          <div className={landingPageStyles.featuresContainer}>
            <div className={landingPageStyles.featuresHeader}>
              <h2 className={landingPageStyles.featuresTitle}>
                Why Professionals Choose <span className={landingPageStyles.featuresTitleGradient}>
                  ResumeXpert
                </span>
              </h2>
              <p className={landingPageStyles.featuresDescription}>
                Experience the perfect blend of elegance and functionality. Every detail crafted to help you shine.
              </p>
            </div>
            <div className={landingPageStyles.featuresGrid}>
              {[
                                {
                                    icon: <Zap className={landingPageStyles.featureIcon} />,
                                    title: "Lightning Speed",
                                    description: "Go from blank page to interview-ready resume in just 5 minutes. No design skills needed.",
                                    gradient: landingPageStyles.featureIconViolet,
                                    bg: landingPageStyles.featureCardViolet
                                },
                                {
                                    icon: <LayoutTemplate className={landingPageStyles.featureIcon} />,
                                    title: "Premium Designs",
                                    description: "Curated collection of stunning templates designed by industry experts. Make a lasting first impression.",
                                    gradient: landingPageStyles.featureIconFuchsia,
                                    bg: landingPageStyles.featureCardFuchsia
                                },
                                {
                                    icon: <Download className={landingPageStyles.featureIcon} />,
                                    title: "One-Click Export",
                                    description: "Download publication-ready PDFs with pixel-perfect formatting. Print or share digitally with confidence.",
                                    gradient: landingPageStyles.featureIconOrange,
                                    bg: landingPageStyles.featureCardOrange
                                }
                            ]
              .map((feature, idx) => (
                <div key={idx} className={landingPageStyles.featureCard}>
                  <div className={landingPageStyles.featureCardHover}></div>
                  <div className={`${landingPageStyles.featureCardContent} ${feature.bg}`}>
                    <div className={`${landingPageStyles.featureIconContainer} ${feature.gradient}`}>
                      {feature.icon}
                    </div>
                    <h3 className={landingPageStyles.featureTitle}>{feature.title}</h3>
                    <p className={landingPageStyles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={landingPageStyles.ctaSection}>
          <div className={landingPageStyles.ctaContainer}>
            <div className={landingPageStyles.ctaCard}>
              <div className={landingPageStyles.ctaCardBg}></div>
              <div className={landingPageStyles.ctaCardContent}>
                <h2 className={landingPageStyles.ctaTitle}>
                  Your Next Career Breakthrough <span className={landingPageStyles.ctaTitleGradient}>Starts Here</span>
                </h2>
                <p className={landingPageStyles.ctaDescription}>
                  Don't let another opportunity slip away. Create a resume that opens doors and accelerates your career journey.
                </p>
                <button className={landingPageStyles.ctaButton} onClick={handleCTA}>
                  <div className={landingPageStyles.ctaButtonOverlay}></div>
                  <span className={landingPageStyles.ctaButtonText}> Create Your Resume Now</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER SECTION */}
      <footer className={landingPageStyles.footer}>
        <div className={landingPageStyles.footerContainer}>
          <p className={landingPageStyles.footerText}>
            Crafted with <span className={landingPageStyles.footerHeart}>❤️</span> by{' '}
            <a href="https://hexagonaldigitalservices.com" target="_blank" rel="noopener noreferrer" className={landingPageStyles.footerLink}>
              Hexagonal Digital Services
            </a>
          </p>
        </div>
      </footer>

      {/* MODAL FOR LOGIN AND SIGNUP */}
      <Modal 
        isOpen={openAuthModal} 
        onClose={() => 
          {setOpenAuthModal(false)
          setCurrentPage("login")
        }}
        hideHeader>
          <div>
            {currentPage === "login" && <Login setCurrentPage={setCurrentPage}/>}
            {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage}/>}
          </div>  
          </Modal>
    </div>
  )
}
export default LandingPage