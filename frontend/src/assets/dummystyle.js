export const landingPageStyles = {
  // Main container
  container:
    "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50/30 via-blue-50/30 to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:via-indigo-900/20 dark:to-slate-900",

  // Header styles
  header:
    "fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-purple-200/50 dark:border-purple-800/30",
  headerContainer:
    "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",
  logoContainer: "flex items-center gap-3",
  logoIcon:
    "w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-300/50 dark:shadow-purple-500/30",
  logoIconInner: "w-5 h-5 text-white",
  logoText:
    "text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent",
  mobileMenuButton:
    "md:hidden p-2 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors",
  mobileMenuIcon: "text-purple-600 dark:text-purple-400",

  // Auth buttons
  desktopAuthButton:
    "relative group px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-300/50 dark:hover:shadow-purple-500/30",
  desktopAuthButtonText: "relative",
  desktopAuthButtonOverlay:
    "absolute inset-0 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 dark:from-pink-500 dark:via-blue-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity",
  mobileAuthButton:
    "w-full px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 text-white font-bold rounded-2xl",

  // Mobile menu
  // Mobile menu
  // Mobile menu
  mobileMenu:
    "md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg w-full fixed top-16 left-0 right-0 z-40 shadow-lg border-b border-purple-200/50 dark:border-purple-800/30 transition-all duration-300 ease-in-out",
  mobileMenuContainer:
    "max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4",
  mobileUserInfo: "flex flex-col gap-4 py-2",
  mobileUserWelcome:
    "text-purple-700 dark:text-purple-300 font-medium text-center py-2 text-base sm:text-lg",
  mobileDashboardButton:
    "w-full px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-300/50 dark:hover:shadow-purple-500/30 transition-all",
  mobileAuthButton:
    "w-full px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-300/50 dark:hover:shadow-purple-500/30 transition-all",
  // Main content
  main: "pt-24",

  // Hero section
  heroSection: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20",
  heroGrid: "flex flex-wrap justify-between gap-10 lg:gap-12 items-center",
  heroLeft: "space-y-8",
  tagline:
    "inline-flex items-center gap-2 sm:gap-3 px-4 py-2 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/40 dark:via-pink-900/40 dark:to-blue-900/40 border border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 rounded-full font-semibold text-xs sm:text-sm tracking-wide uppercase",
  heading: "text-4xl sm:text-6xl lg:text-8xl font-black leading-[1.1] tracking-tight",
  headingText: "block text-slate-900 dark:text-slate-100",
  headingGradient:
    "block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent",
  description:
    "text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal",
  ctaButtons: "flex flex-col sm:flex-row gap-4",

  // Buttons
  primaryButton:
    "group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 dark:hover:shadow-purple-500/30",
  primaryButtonOverlay:
    "absolute inset-0 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 dark:from-pink-500 dark:via-blue-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity",
  primaryButtonContent: "relative flex items-center gap-2 sm:gap-3",
  primaryButtonIcon: "group-hover:translate-x-1 transition-transform",
  secondaryButton:
    "px-8 sm:px-10 py-3 sm:py-4 border-2 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 font-bold rounded-2xl hover:border-purple-500 dark:hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/40 dark:hover:to-pink-900/40 transition-all bg-white dark:bg-slate-800/50",

  // Stats
  statsContainer:
    "flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 pt-6",
  statItem: "text-center",
  statNumber:
    "text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent",
  statLabel: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium",

  // Hero illustration
  heroIllustration: "relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto",
  heroIllustrationBg:
    "absolute -inset-8 bg-gradient-to-r from-purple-200/50 via-pink-200/50 to-blue-200/50 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 rounded-3xl blur-3xl",
  heroIllustrationContainer: "relative",

  // SVG styles
  svgContainer: "w-full h-auto max-w-md mx-auto",
  svgRect: "fill-[url(#cardGradient)] stroke-[#e2e8f0] stroke-[2]",
  svgCircle: "fill-[url(#bgGradient)]",
  svgRectPrimary: "fill-[#7C3AED] dark:fill-[#A78BFA]",
  svgRectSecondary: "fill-[#EC4899] dark:fill-[#F472B6]",
  svgRectLight: "fill-[#e2e8f0] dark:fill-[#475569]",
  svgRectSkill: "fill-[#E9D5FF] dark:fill-[#C084FC]",
  svgAnimatedCircle: "fill-[#f97316] opacity-80",
  svgAnimatedRect: "fill-[#10b981] opacity-80",
  svgAnimatedPolygon: "fill-[#ef4444] opacity-80",

  // Features section
  featuresSection:
    "bg-gradient-to-br from-purple-50 via-pink-50/30 to-blue-50/30 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/20 py-16 sm:py-24",
  featuresContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
  featuresHeader: "text-center mb-12 sm:mb-20",
  featuresTitle:
    "text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 tracking-tight",
  featuresTitleGradient:
    "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent",
  featuresDescription:
    "text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium",
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8",

  // Feature cards
  featureCard: "group relative",
  featureCardHover:
    "absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-3xl from-purple-200 via-pink-200 to-blue-200 dark:from-purple-800 dark:via-pink-800 dark:to-blue-800",
  featureCardContent:
    "relative bg-gradient-to-br border border-white/50 dark:border-slate-700/50 p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all group-hover:scale-105 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm",
  featureIconContainer:
    "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-white shadow-lg",
  featureIcon: "w-8 h-8 sm:w-10 sm:h-10",
  featureTitle: "text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mb-2 sm:mb-4",
  featureDescription:
    "text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium",

  // Feature gradients
  featureCardViolet: "from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30",
  featureCardFuchsia: "from-pink-50 to-blue-50 dark:from-pink-900/30 dark:to-blue-900/30",
  featureCardOrange: "from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30",
  featureIconViolet: "from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500",
  featureIconFuchsia: "from-pink-600 via-blue-600 to-purple-600 dark:from-pink-500 dark:via-blue-500 dark:to-purple-500",
  featureIconOrange: "from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500",

  // CTA section
  ctaSection: "py-16 sm:py-24",
  ctaContainer: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
  ctaCard: "relative",
  ctaCardBg:
    "absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-purple-200/50 via-pink-200/50 to-blue-200/50 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 rounded-3xl blur-3xl",
  ctaCardContent:
    "relative bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 dark:from-slate-800 dark:via-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800/50 rounded-3xl p-8 sm:p-16 backdrop-blur-sm",
  ctaTitle:
    "text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 tracking-tight",
  ctaTitleGradient:
    "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent",
  ctaDescription:
    "text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-10 max-w-2xl mx-auto font-medium",
  ctaButton:
    "group relative px-8 sm:px-12 py-3 sm:py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 text-white font-black text-lg rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 dark:hover:shadow-purple-500/30",
  ctaButtonOverlay:
    "absolute inset-0 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 dark:from-pink-500 dark:via-blue-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity",
  ctaButtonText: "relative",

  // Footer
  footer:
    "border-t border-purple-200 dark:border-purple-800/50 bg-gradient-to-r from-purple-50 via-pink-50/30 to-blue-50/30 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-900/20 py-6 sm:py-8",
  footerContainer: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
  footerText: "text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium",
  footerHeart:
    "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent",
  footerLink: "hover:text-purple-600 dark:hover:text-purple-400 underline transition-colors",
}

export const dashboardStyles = {
  // Container
  container: "container mx-auto px-4 py-6",

  // Header
  headerWrapper:
    "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
  headerTitle: "text-2xl font-bold text-gray-900 dark:text-slate-100",
  headerSubtitle: "text-gray-600 dark:text-slate-400",

  // Create Button
  createButton:
    "group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 dark:hover:shadow-purple-500/30",
  createButtonOverlay:
    "absolute inset-0 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 dark:from-pink-500 dark:via-blue-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity",
  createButtonContent: "relative flex items-center gap-3",

  // Loading
  spinnerWrapper: "flex justify-center items-center py-12",
  spinner:
    "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 dark:border-purple-400",

  // Empty State
  emptyStateWrapper:
    "flex flex-col items-center justify-center py-12 text-center",
  emptyIconWrapper: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 p-4 rounded-full mb-4",
  emptyTitle: "text-xl font-bold text-gray-900 dark:text-slate-100 mb-2",
  emptyText: "text-gray-600 dark:text-slate-400 max-w-md mb-6",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",

  // New Resume Card
  newResumeCard:
    "flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50/30 to-blue-50/30 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 border-2 border-dashed border-purple-300 dark:border-purple-700 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-500 h-full",
  newResumeIcon:
    "w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 flex items-center justify-center mb-4",
  newResumeTitle: "text-xl font-bold text-gray-900 dark:text-slate-100 mb-2 text-center",
  newResumeText: "text-gray-600 dark:text-slate-400 text-center",

  // Modal
  // modalHeader: "flex justify-between items-center mb-4",
  // modalTitle: "text-xl font-bold text-gray-900",
  // modalCloseButton: "text-gray-500 hover:text-gray-700",

  // Modal
  modalHeader: "relative mb-4 h-10", // give some height
  modalTitle:
    "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-gray-900",
  modalCloseButton:
    "absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700",

  // Delete Confirmation
  deleteIconWrapper: "bg-red-100 p-3 rounded-full mb-4",
  deleteTitle: "text-lg font-bold text-gray-900 mb-2",
  deleteText: "text-gray-600 mb-4",
}

export const cardStyles = {
  // ProfileInfoCard styles
  //profileCard: "flex items-center gap-3 p-2 sm:p-3 bg-white backdrop-blur-xl border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03]",
  profileCard:
    "flex items-center p-2 sm:p-3 bg-white dark:bg-slate-800 backdrop-blur-xl border border-gray-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03]",

  profileInitialsContainer:
    "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-md",

  profileInitialsText: "text-base sm:text-lg font-black text-white",

  //profileName: "text-xs sm:text-sm font-bold text-gray-800",
  profileName: "mt-1 text-xs sm:text-sm font-bold text-gray-800 dark:text-slate-200",

  logoutButton:
    "text-purple-600 dark:text-purple-400 text-[10px] sm:text-xs font-bold cursor-pointer hover:text-purple-700 dark:hover:text-purple-300 transition-colors",

  // ResumeSummaryCard styles
  resumeCard:
    "group relative h-[360px] sm:h-[380px] lg:h-[400px] flex flex-col bg-white dark:bg-slate-800 border-2 border-purple-200 dark:border-purple-800/50 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-300/50 dark:hover:shadow-purple-500/30 hover:border-purple-400 dark:hover:border-purple-600",
  cardBackground:
    "absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 dark:from-purple-900/40 dark:via-pink-900/40 dark:to-blue-900/40 opacity-0 group-hover:opacity-30 transition-opacity duration-500",
  previewArea: "p-4 sm:p-6 flex-1 relative overflow-hidden bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/30 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20",
  emptyPreview:
    "w-full h-[180px] sm:h-[200px] lg:h-[220px] flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 border-2 border-dashed border-purple-400 dark:border-purple-700",
  emptyPreviewIcon:
    "w-16 h-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-xl",
  emptyPreviewText: "text-gray-800 dark:text-slate-200 text-sm font-bold",
  emptyPreviewSubtext: "text-gray-500 dark:text-slate-400 text-xs mt-1",
  infoArea: "bg-gradient-to-r from-purple-50 via-pink-50/30 to-blue-50/30 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 border-t-2 border-purple-200 dark:border-purple-800/50 p-4 sm:p-6",
  title:
    "text-sm sm:text-base font-bold text-gray-800 dark:text-slate-200 truncate mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors",
  dateInfo: "flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 font-medium",

  // Action buttons
  actionOverlay:
    "absolute inset-4 sm:inset-6 bg-gradient-to-t from-white/98 dark:from-slate-800/98 via-purple-50/50 dark:via-purple-900/30 to-transparent flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl backdrop-blur-md",
  actionButtonsContainer: "flex gap-3",
  editButton:
    "group/btn w-14 h-14 flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 rounded-2xl shadow-xl hover:scale-110 hover:shadow-2xl hover:shadow-purple-400/50 dark:hover:shadow-purple-500/30 transition-all duration-300",
  deleteButton:
    "group/btn w-14 h-14 flex items-center justify-center bg-gradient-to-r from-red-600 via-red-700 to-red-800 dark:from-red-500 dark:via-red-600 dark:to-red-700 rounded-2xl shadow-xl hover:scale-110 hover:shadow-2xl hover:shadow-red-400/50 dark:hover:shadow-red-500/30 transition-all duration-300",
  buttonIcon: "text-white group-hover/btn:scale-110 transition-transform",

  // Progress and completion styles
  progressBar: "relative w-full h-3 bg-purple-100 dark:bg-purple-900/40 rounded-full overflow-hidden shadow-inner border border-purple-200 dark:border-purple-800/50",
  progressFill:
    "h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden shadow-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500",
  progressGlow:
    "absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse",
  progressIndicator:
    "absolute top-0 h-full w-8 bg-gradient-to-r from-transparent to-white/70 blur-sm transition-all duration-700",
  completionStatus: "flex justify-between items-center mt-3",
  statusText: "text-xs font-bold text-purple-700 dark:text-purple-400",
  percentageText: "text-xs font-black text-purple-800 dark:text-purple-300",

  // Completion indicator
  completionIndicator:
    "absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 bg-white/98 dark:bg-slate-800/98 backdrop-blur-md border-2 border-purple-300 dark:border-purple-700 rounded-full shadow-xl",
  completionDot: "w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-r",
  completionDotInner: "w-2 h-2 bg-white dark:bg-slate-200 rounded-full",
  completionPercentageText: "text-xs font-black text-purple-800 dark:text-purple-300",

  // Completion color classes
  completionHigh: "from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500",
  completionMedium: "from-purple-500 via-pink-500 to-blue-500 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400",
  completionLow: "from-purple-400 via-pink-400 to-blue-400 dark:from-purple-300 dark:via-pink-300 dark:to-blue-300",

  // TemplateCard styles
  templateCard:
    "relative rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer border border-gray-200 dark:border-slate-700",
  templateCardSelected: "ring-2 ring-purple-500 dark:ring-purple-400 scale-[1.02]",
  templateCardDefault: "hover:shadow-lg hover:border-gray-300 dark:hover:border-slate-600",
  templateDesign: "relative h-full w-full aspect-[4/5]",
  templateOverlay: "absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-sm",
  selectionIndicator: "absolute top-4 right-4 z-20",
  selectionCircle:
    "w-8 h-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 rounded-full flex items-center justify-center shadow-md",
  selectionIcon: "text-white",
  templateHoverEffect:
    "absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300",
  templateName: "text-sm font-medium text-gray-800 dark:text-slate-200",
  emptyTemplate: "relative h-full w-full rounded-lg overflow-hidden",
  emptyTemplateIcon: "p-3 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-sm",
  emptyTemplateText: "text-xs text-gray-600 mt-1",
}

export const authStyles = {
  //container: "w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-violet-50 rounded-3xl border border-violet-100 shadow-2xl",

  container:
    "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-purple-100 to-purple-200 relative overflow-hidden p-4 sm:px-6 lg:px-8",

  headerWrapper: "text-center mb-8",
  title: "text-2xl font-black text-slate-900 mb-2",
  subtitle: "text-slate-600 font-medium",
  form: "space-y-6",
  errorMessage:
    "text-red-500 text-sm font-medium bg-red-50 border border-red-200 px-4 py-3 rounded-xl",
  submitButton:
    "w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-purple-300/50 transition-all text-lg",
  switchText: "text-center text-sm text-slate-600 font-medium",
  switchButton:
    "font-black text-purple-600 hover:text-purple-700 transition-colors",
  signupContainer:
    "w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-purple-50 rounded-3xl border border-purple-100 shadow-2xl overflow-hidden",
  signupTitle: "text-2xl font-black text-slate-900 mb-2",
  signupSubtitle: "text-slate-600 font-medium",
  signupForm: "space-y-4",
  signupSubmit:
    "w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-purple-300/50 transition-all text-lg",
  signupSwitchButton:
    "font-black text-purple-600 hover:text-purple-700 transition-colors",
}

export const shimmerStyle = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes bubble {
    0% { transform: translateY(0) scale(1); opacity: 0.7; }
    50% { transform: translateY(-10px) scale(1.1); opacity: 0.9; }
    100% { transform: translateY(0) scale(1); opacity: 0.7; }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(124, 58, 237, 0.3); }
    50% { box-shadow: 0 0 40px rgba(124, 58, 237, 0.6); }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
  
  .animate-flow {
    animation: flow 4s infinite linear;
  }
  
  .animate-bubble {
    animation: bubble 2s infinite ease-in-out;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
  }
`
// Common Styles
export const commonStyles = {
  trashButton:
    "absolute top-4 right-4 p-2.5 text-white bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 rounded-xl transition-all hover:scale-110 shadow-lg hover:shadow-xl border-2 border-white",
  addButtonBase:
    "flex items-center gap-3 px-7 py-4 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-xl hover:shadow-2xl",
}

// AdditionalInfoForm Styles
export const additionalInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white via-purple-50 to-purple-100",
  heading: "text-3xl font-black mb-8 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-sm",
  sectionHeading:
    "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3",
  dotViolet:
    "w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg animate-pulse",
  dotOrange: "w-3 h-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg animate-pulse",
  languageItem:
    "relative bg-white/80 backdrop-blur-sm border-2 border-purple-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-purple-400 hover:bg-white transition-all duration-300",
  interestItem: "relative",
  addButtonLanguage: "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 hover:shadow-xl hover:shadow-purple-400/50",
  addButtonInterest: "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 hover:shadow-xl hover:shadow-purple-400/50",
}

// CertificationInfoForm Styles
export const certificationInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white via-purple-50 to-purple-100",
  heading: "text-3xl font-black mb-8 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-sm",
  item: "relative bg-white/80 backdrop-blur-sm border-2 border-purple-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-purple-400 hover:bg-white transition-all duration-300",
  addButton: "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 hover:shadow-xl hover:shadow-purple-400/50",
}

// ContactInfoForm Styles
export const contactInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white via-purple-50 to-purple-100",
  heading: "text-3xl font-black mb-8 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-sm",
}

// EducationDetailsForm Styles
export const educationDetailsStyles = {
  container: "p-8 bg-gradient-to-br from-white via-purple-50 to-purple-100",
  heading: "text-3xl font-black mb-8 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-sm",
  item: "relative bg-white/80 backdrop-blur-sm border-2 border-purple-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-purple-400 hover:bg-white transition-all duration-300",
  addButton: "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 hover:shadow-xl hover:shadow-purple-400/50",
}

// ProfileInfoForm Styles
export const profileInfoStyles = {
  container: "py-6 px-6 bg-gradient-to-br from-white via-purple-50 to-purple-100",
  heading: "text-3xl font-black text-slate-900 mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-sm",
  textarea:
    "w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none resize-none font-medium text-gray-800 shadow-lg hover:shadow-xl",
}

// ProjectDetailForm Styles
export const projectDetailStyles = {
  container: "p-8 bg-gradient-to-br from-white via-purple-50 to-purple-100",
  heading: "text-3xl font-black mb-8 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-sm",
  item: "relative bg-white/80 backdrop-blur-sm border-2 border-purple-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-purple-400 hover:bg-white transition-all duration-300",
  textarea:
    "w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none resize-none font-medium text-gray-800 shadow-lg hover:shadow-xl",
  addButton: "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 hover:shadow-xl hover:shadow-purple-400/50",
}

// SkillsInfoForm Styles
export const skillsInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white via-purple-50 to-purple-100",
  heading: "text-3xl font-black mb-8 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-sm",
  item: "relative bg-white/80 backdrop-blur-sm border-2 border-purple-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-purple-400 hover:bg-white transition-all duration-300",
  addButton: "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 hover:shadow-xl hover:shadow-purple-400/50",
}

// WorkExperienceForm Styles
export const workExperienceStyles = {
  container: "p-8 bg-gradient-to-br from-white via-purple-50 to-purple-100",
  heading: "text-3xl font-black mb-8 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-sm",
  item: "relative bg-white/80 backdrop-blur-sm border-2 border-purple-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-purple-400 hover:bg-white transition-all duration-300",
  textarea:
    "w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none resize-none font-medium text-gray-800 shadow-lg hover:shadow-xl",
  addButton: "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 hover:shadow-xl hover:shadow-purple-400/50",
}

export const containerStyles = {
  main: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
  header:
    "w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-white via-purple-50 to-purple-100 border-2 border-purple-300 rounded-2xl py-5 px-6 mb-6 shadow-xl",
  grid: "w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start",

  formContainer:
    "bg-white/95 backdrop-blur-sm border-2 border-purple-300 rounded-2xl overflow-hidden shadow-xl",
  previewContainer:
    "bg-white/95 backdrop-blur-sm border-2 border-purple-300 rounded-2xl overflow-hidden shadow-xl p-4",
  previewInner: "w-full max-w-[800px] mx-auto",
  modalContent:
    "w-[90vw] h-[80vh] overflow-y-auto overflow-x-hidden p-6 flex justify-center",

  pdfPreview: "w-full p-4 flex justify-center",
  hiddenThumbnail: "bg-white shadow-lg max-w-[400px] mx-auto",
}

export const buttonStyles = {
  theme:
    "flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50 transition-all duration-300",
  delete:
    "flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white font-bold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-red-400/50 transition-all duration-300",
  download:
    "flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50 transition-all duration-300",
  back: "flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-slate-600 to-gray-700 text-white font-bold rounded-xl hover:scale-105 hover:shadow-lg transition-all text-sm",
  save: "flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50 transition-all text-sm",
  next: "flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50 transition-all text-sm",
  modalAction:
    "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50 transition-all text-sm",
}

export const statusStyles = {
  completionBadge:
    "inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 border-2 border-purple-300 px-4 py-2 rounded-full text-sm font-bold text-purple-700 shadow-lg",
  modalBadge:
    "inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 px-4 py-2 rounded-full text-sm font-bold text-white shadow-xl",
  error:
    "flex items-center gap-3 text-sm font-bold text-red-800 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 px-4 py-3 rounded-xl mb-4 shadow-md",
}

export const iconStyles = {
  pulseDot: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse",
}

export const inputStyles = {
  wrapper: "mb-6 group",
  label:
    "block text-sm font-bold text-gray-800 mb-3 group-focus-within:text-purple-600 transition-colors",
  inputContainer: (focused) =>
    `relative flex items-center bg-white border-2 px-4 py-3 rounded-xl transition-all duration-300 shadow-sm ${
      focused
        ? "border-purple-500 ring-4 ring-purple-500/20 shadow-lg shadow-purple-500/10"
        : "border-gray-300 hover:border-purple-300"
    }`,
  inputField:
    "w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 font-medium",
  toggleButton:
    "text-gray-400 hover:text-purple-600 transition-colors p-1 rounded-lg hover:bg-purple-50",
}

export const photoSelectorStyles = {
  container: "flex justify-center mb-8",
  hiddenInput: "hidden",
  placeholder: (hovered) =>
    `relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 border-3 border-dashed border-purple-500 rounded-full cursor-pointer transition-all duration-300 shadow-xl ${
      hovered ? "hover:border-purple-700 hover:bg-gradient-to-br hover:from-purple-200 hover:via-purple-300 hover:to-purple-200 hover:scale-105 hover:shadow-2xl" : ""
    }`,
  cameraButton:
    "absolute -bottom-2 -right-2 w-13 h-13 flex items-center justify-center bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white rounded-full transition-all shadow-xl hover:scale-110 border-3 border-white",
  previewWrapper: "relative group",
  previewImageContainer: (hovered) =>
    `w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl transition-all duration-300 ${
      hovered ? "group-hover:border-purple-600 group-hover:shadow-2xl group-hover:shadow-purple-400/50" : ""
    }`,
  previewImage:
    "w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-300",
  overlay:
    "absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-900/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
  actionButton: (bg, hoverBg, textColor) =>
    `w-11 h-11 flex items-center justify-center bg-${bg} text-${textColor} rounded-full hover:bg-${hoverBg} transition-all shadow-xl hover:scale-110`,
}

export const titleInputStyles = {
  container: "flex items-center gap-3",
  titleText: "text-lg sm:text-xl font-bold text-gray-800",
  editButton:
    "p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all group",
  editIcon:
    "w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors",
  inputField: (focused) =>
    `text-lg sm:text-xl font-bold bg-transparent outline-none text-gray-800 border-b-2 pb-2 transition-all duration-300 ${
      focused ? "border-purple-500" : "border-gray-300"
    }`,
  confirmButton:
    "p-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white transition-all",
}

export const modalStyles = {
  overlay:
    "fixed inset-0 flex items-center justify-center w-full h-full bg-gradient-to-br from-black/70 via-purple-900/30 to-purple-900/30 backdrop-blur-lg z-50",
  container:
    "relative flex flex-col bg-white/98 backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden border-3 border-purple-300 max-w-[95vw] max-h-[95vh]",
  header:
    "flex items-center justify-between p-6 border-b-2 border-purple-300 bg-gradient-to-r from-white via-purple-50 to-purple-100",
  title: "text-2xl font-black bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-sm",
  actionButton:
    "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50 transition-all mr-12",
  closeButton:
    "absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all shadow-xl hover:scale-110 border-2 border-purple-200 hover:border-red-400 z-10",
  body: "flex-1 overflow-y-auto",
}

export const infoStyles = {
  // Progress
  progressWrapper: "w-20 h-2 rounded-full bg-gray-200",
  progressBar: (color) => `h-full rounded-full transition-all`,

  // ActionLink
  actionWrapper: "flex items-center gap-3",
  actionIconWrapper: "w-6 h-6 flex items-center justify-center rounded-full",
  actionLink:
    "text-sm font-medium underline cursor-pointer break-all text-gray-600 hover:text-emerald-600 transition-colors",

  // CertificationInfo
  certContainer: "mb-4",
  certTitle: "text-base font-semibold text-gray-900",
  certRow: "flex items-center gap-2 mt-1",
  certYear: (bgColor) => `text-xs font-bold text-white px-3 py-1 rounded-lg`,
  certIssuer: "text-sm text-gray-600 font-medium",

  // ContactInfo
  contactRow: "flex items-center gap-3 mb-3",
  contactIconWrapper: "w-8 h-8 flex items-center justify-center rounded-lg",
  contactText: "flex-1 text-sm font-medium break-all text-gray-700",

  // EducationInfo
  eduContainer: "mb-5",
  eduDegree: "text-base font-semibold pb-2 text-gray-900",
  eduInstitution: "text-sm text-gray-700 font-medium",
  eduDuration: "text-xs text-gray-500 font-medium italic mt-1",

  // Language/Skill Info
  infoRow: "flex items-center justify-between mb-3",
  infoLabel: "text-sm font-semibold text-gray-900",

  // Links
  linkRow: "flex items-center space-x-1 hover:text-blue-600",

  // ProjectInfo
  projectContainer: "mb-5",
  projectTitle: (isPreview) =>
    `${isPreview ? "text-sm" : "text-base"} font-semibold text-gray-900`,
  projectDesc: "text-sm text-gray-600 mt-1 leading-relaxed",
  projectLinks: "flex items-center gap-4 font-medium mt-3",

  // RatingInput
  ratingWrapper: "flex gap-2 cursor-pointer",
  ratingDot: "w-4 h-4 rounded transition-all hover:scale-110",

  // SkillSection
  skillGrid: "grid grid-cols-2 gap-x-6 gap-y-2 mb-5",

  // WorkExperience
  workContainer: "mb-6",
  workHeader: "flex items-start justify-between mb-2",
  workCompany: "text-base font-semibold pb-2 text-gray-900",
  workRole: "text-base font-medium text-gray-700",
  workDuration: (color) => `text-sm font-bold italic`,
  workDesc: "text-sm text-gray-600 font-medium leading-relaxed",
}
