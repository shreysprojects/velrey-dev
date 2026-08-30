import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LifeLayer Privacy Policy — Velrey Development",
  description: "Privacy Policy for the LifeLayer mobile application.",
};

export default function LifeLayerPrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-[#2dd4bf] border border-[#2dd4bf]/20 px-2.5 py-1 rounded-full">
              LifeLayer
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-white/30 text-sm font-mono mb-12">
            Effective Date: May 2026 · Last Updated: May 2026
          </p>

          <div className="space-y-10 text-white/50 text-sm leading-relaxed">

            <p>
              LifeLayer is owned and operated by{" "}
              <strong className="text-white/70">Velrey Development</strong>{" "}
              (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you use LifeLayer, our mobile application, website, products, and related services, including any features related to routines, fitness tracking, meal tracking, productivity sessions, social sharing, AI-generated recommendations, advertising, subscriptions, and account management.
            </p>
            <p>
              By using LifeLayer, you agree to the practices described in this Privacy Policy. If you do not agree with this Privacy Policy, you should not use LifeLayer.
            </p>
            <p>
              This Privacy Policy is intended to be clear and transparent. It does not replace any rights you may have under applicable privacy laws.
            </p>

            <hr className="border-white/5" />

            {/* 1. Information We Collect */}
            <section className="space-y-8">
              <h2 className="text-white text-xl font-bold">1. Information We Collect</h2>
              <p>We collect information in several ways: information you provide directly, information generated through your use of LifeLayer, information collected automatically, and information received from third-party services you choose to use with the app.</p>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.1 Account Information</h3>
                <p className="mb-3">When you create an account or use certain features, we may collect:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Name or display name</li>
                  <li>Email address</li>
                  <li>Username</li>
                  <li>Password or authentication credentials</li>
                  <li>Profile photo, avatar, or other profile details</li>
                  <li>Age or date of birth</li>
                  <li>Country, region, or general location</li>
                  <li>User ID or account identifier</li>
                  <li>Account settings and preferences</li>
                </ul>
                <p>We may also use third-party authentication providers, such as Apple, Google, or other login services. If you sign in through a third-party provider, we may receive basic account information from that provider, such as your name, email address, and profile image, depending on your privacy settings with that provider.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.2 Routine and Productivity Data</h3>
                <p className="mb-3">When you use routine, habit, productivity, or scheduling features, we may collect:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Routines you create</li>
                  <li>Tasks, habits, goals, and checklists</li>
                  <li>Completion history</li>
                  <li>Streaks and progress data</li>
                  <li>Productivity session goals</li>
                  <li>Productivity session duration</li>
                  <li>Productivity ratings or scores</li>
                  <li>Notes, journal entries, reflections, or session summaries</li>
                  <li>Calendar-style routine history</li>
                  <li>Reminders, notifications, and preferences</li>
                </ul>
                <p>This information is used to provide app functionality, track your progress, personalize your experience, and help you understand your habits over time.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.3 Fitness and Activity Data</h3>
                <p className="mb-3">If you use fitness-related features, we may collect information such as:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Workout routines</li>
                  <li>Exercise selections</li>
                  <li>Sets, reps, weights, duration, rest times, and workout notes</li>
                  <li>Fitness goals</li>
                  <li>Body measurements you choose to enter</li>
                  <li>Progress logs</li>
                  <li>Stretching routines</li>
                  <li>Exercise completion history</li>
                  <li>Personal preferences related to training</li>
                </ul>
                <p>We do not collect this information unless you choose to enter it or use a feature that requires it.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.4 Meal, Nutrition, and Food Tracking Data</h3>
                <p className="mb-3">If you use meal tracking or nutrition features, we may collect:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Foods and meals you log</li>
                  <li>Calories, macronutrients, and micronutrients</li>
                  <li>Meal times</li>
                  <li>Dietary preferences</li>
                  <li>Food search history within the app</li>
                  <li>Barcode scan results</li>
                  <li>Saved foods, recipes, and meals</li>
                  <li>Nutrition goals</li>
                  <li>Water intake or other wellness-related tracking information you choose to enter</li>
                </ul>
                <p>If barcode scanning is available, LifeLayer may access your device camera only when you choose to scan a barcode. We do not use your camera for meal tracking unless you actively use that feature.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.5 Health, Wellness, and Sensitive Information</h3>
                <p className="mb-3">Some information you choose to enter may be considered health, wellness, or sensitive information under certain laws. This may include fitness goals, nutrition goals, body measurements, dietary preferences, wellness routines, progress photos, or other personal tracking data.</p>
                <p className="mb-3">We only collect this type of information when you choose to provide it. You are not required to enter sensitive information to use every part of LifeLayer.</p>
                <p>LifeLayer is not a medical device, healthcare provider, dietitian, personal trainer, or substitute for professional medical advice. Any suggestions, summaries, routines, nutrition estimates, or AI-generated recommendations are for general informational and wellness purposes only.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.6 Social, Explore, and Community Data</h3>
                <p className="mb-3">If LifeLayer includes social, friend, or Explore features, we may collect:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Public routine posts</li>
                  <li>Shared productivity sessions</li>
                  <li>Public profile information</li>
                  <li>Profile pictures or avatars</li>
                  <li>Friend codes</li>
                  <li>Friend connections</li>
                  <li>Likes, saves, follows, comments, or other interactions</li>
                  <li>Reports, moderation flags, or safety-related information</li>
                  <li>Content you upload, post, share, or make visible to others</li>
                </ul>
                <p className="mb-3">Some information you choose to share may be visible to other users. For example, if you post a routine to Explore, other users may be able to view, save, copy, or interact with that routine depending on the features available.</p>
                <p>You should not post private, sensitive, identifying, unsafe, or confidential information in public areas of LifeLayer.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.7 Photos, Camera, and Uploaded Images</h3>
                <p className="mb-3">If LifeLayer allows profile pictures, food photos, progress photos, skincare photos, or other image-based features, we may collect images you choose to upload.</p>
                <p className="mb-3">We may use uploaded images to:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Display your profile photo</li>
                  <li>Analyze an image if you request an AI-based feature</li>
                  <li>Save content to your account</li>
                  <li>Moderate unsafe or inappropriate content</li>
                  <li>Improve app functionality and user experience</li>
                </ul>
                <p className="mb-3">We do not access your photo library or camera unless you give permission through your device settings or actively choose to upload or capture an image.</p>
                <p>You can manage camera and photo permissions through your device settings.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.8 AI Feature Data</h3>
                <p className="mb-3">If LifeLayer includes AI-powered features, such as routine suggestions, meal suggestions, productivity feedback, skincare guidance, fitness recommendations, or image analysis, we may process the information you provide to generate responses.</p>
                <p className="mb-3">This may include:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Text prompts</li>
                  <li>Survey answers</li>
                  <li>Uploaded images</li>
                  <li>Routine data</li>
                  <li>Fitness data</li>
                  <li>Meal data</li>
                  <li>Productivity session data</li>
                  <li>User preferences</li>
                </ul>
                <p className="mb-3">AI-generated results may be inaccurate, incomplete, or not suitable for your personal situation. You should review AI-generated content carefully and use your own judgment.</p>
                <p>We may use third-party AI service providers to process AI requests. When we do, we only send the information needed to provide the feature, subject to the provider&apos;s terms, privacy practices, and security measures.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.9 Device, Usage, and Technical Information</h3>
                <p className="mb-3">When you use LifeLayer, we may automatically collect technical and usage information, including:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Device type</li>
                  <li>Operating system</li>
                  <li>App version</li>
                  <li>Browser type, if applicable</li>
                  <li>IP address</li>
                  <li>Device identifiers</li>
                  <li>Language settings</li>
                  <li>Time zone</li>
                  <li>Crash logs</li>
                  <li>Diagnostic data</li>
                  <li>Performance data</li>
                  <li>Pages or screens viewed</li>
                  <li>Buttons clicked</li>
                  <li>Features used</li>
                  <li>Session duration</li>
                  <li>Error logs</li>
                </ul>
                <p>This information helps us operate, secure, debug, and improve LifeLayer.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.10 Payment and Subscription Information</h3>
                <p className="mb-3">If LifeLayer offers paid features, subscriptions, or in-app purchases, payments may be processed by third-party platforms such as Apple App Store, Google Play, Stripe, RevenueCat, or another payment processor.</p>
                <p className="mb-3">We may receive limited information about your purchase, such as:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Subscription status</li>
                  <li>Purchase date</li>
                  <li>Renewal status</li>
                  <li>Product purchased</li>
                  <li>Transaction identifier</li>
                  <li>App store region</li>
                  <li>Refund or cancellation status</li>
                </ul>
                <p>We generally do not receive or store your full credit card number when purchases are processed by third-party payment providers.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-3">1.11 Communications With Us</h3>
                <p className="mb-3">If you contact us for support, feedback, bug reports, business inquiries, privacy requests, or other reasons, we may collect:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Message content</li>
                  <li>Screenshots or files you provide</li>
                  <li>Information about your account or issue</li>
                  <li>Communication history</li>
                </ul>
                <p>We use this information to respond to you, troubleshoot issues, improve LifeLayer, and maintain records.</p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* 2. How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">2. How We Use Your Information</h2>
              <p>We use your information to provide, maintain, personalize, improve, and protect LifeLayer.</p>
              <p>Specifically, we may use your information to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Create and manage your account</li>
                <li>Provide routine, habit, fitness, productivity, and meal tracking features</li>
                <li>Save your preferences and progress</li>
                <li>Display your routines, goals, history, and analytics</li>
                <li>Generate productivity scores, charts, streaks, and summaries</li>
                <li>Provide personalized recommendations</li>
                <li>Enable barcode scanning, food search, and meal logging</li>
                <li>Enable social features, Explore posts, friend codes, and public sharing</li>
                <li>Process subscriptions, purchases, refunds, or billing issues</li>
                <li>Send notifications, reminders, and account-related messages</li>
                <li>Send marketing or promotional communications, where permitted</li>
                <li>Respond to support requests</li>
                <li>Detect, prevent, and address bugs, fraud, abuse, security risks, and policy violations</li>
                <li>Moderate content and enforce community guidelines</li>
                <li>Improve app performance and user experience</li>
                <li>Analyze usage trends and feature popularity</li>
                <li>Display, measure, or personalize advertisements</li>
                <li>Comply with legal obligations</li>
                <li>Protect the rights, safety, and property of users, Velrey Development, and others</li>
              </ul>
              <p>We do not sell your personal information in the traditional sense. However, some advertising or analytics activities may be considered &quot;sharing,&quot; &quot;targeted advertising,&quot; or &quot;sale&quot; under certain privacy laws. Where required, we will provide choices or consent options for these activities.</p>
            </section>

            <hr className="border-white/5" />

            {/* 3. Legal Bases for Processing */}
            <section className="space-y-6">
              <h2 className="text-white text-xl font-bold">3. Legal Bases for Processing</h2>
              <p>Depending on where you live, privacy laws may require us to explain the legal bases for processing your information.</p>
              <p>We may process your information based on:</p>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">3.1 Performance of a Contract</h3>
                <p>We process information when it is necessary to provide LifeLayer and its features, such as creating an account, saving routines, tracking meals, recording workouts, and managing subscriptions.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">3.2 Consent</h3>
                <p>We may process information based on your consent, such as when you allow camera access, upload photos, enable notifications, use optional AI features, allow personalized advertising, or connect certain third-party services.</p>
                <p className="mt-2">You may withdraw consent where applicable, but doing so may limit your ability to use certain features.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">3.3 Legitimate Interests</h3>
                <p>We may process information for legitimate business purposes, such as improving LifeLayer, preventing abuse, securing our systems, analyzing usage, providing support, and developing new features.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">3.4 Legal Obligations</h3>
                <p>We may process information when necessary to comply with laws, legal requests, tax obligations, consumer protection rules, or regulatory requirements.</p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* 4. How We Share Information */}
            <section className="space-y-6">
              <h2 className="text-white text-xl font-bold">4. How We Share Information</h2>
              <p>We may share information in limited circumstances described below.</p>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">4.1 With Service Providers</h3>
                <p className="mb-3">We may share information with trusted third-party service providers that help us operate LifeLayer, such as:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Cloud hosting providers</li>
                  <li>Database providers</li>
                  <li>Authentication providers</li>
                  <li>Analytics providers</li>
                  <li>Crash reporting tools</li>
                  <li>Payment processors</li>
                  <li>Subscription management tools</li>
                  <li>Email and notification providers</li>
                  <li>AI service providers</li>
                  <li>Customer support tools</li>
                  <li>Content moderation tools</li>
                  <li>Advertising partners</li>
                </ul>
                <p>These providers are only authorized to use information as needed to provide services to us, unless otherwise permitted by law or their own terms.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">4.2 With Other Users</h3>
                <p className="mb-3">If you use public or social features, certain information may be visible to other users, such as:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Display name</li>
                  <li>Username</li>
                  <li>Profile photo</li>
                  <li>Public routines</li>
                  <li>Shared productivity sessions</li>
                  <li>Public posts</li>
                  <li>Comments, likes, saves, or other interactions</li>
                  <li>Friend-related information you choose to share</li>
                </ul>
                <p>You control what you choose to post or share. Please be careful when sharing information publicly.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">4.3 With App Stores and Payment Platforms</h3>
                <p>If you purchase a subscription or paid feature, information may be processed by Apple, Google, Stripe, RevenueCat, or another payment provider, depending on the payment method used.</p>
                <p className="mt-2">Your payment information is handled according to the relevant provider&apos;s privacy policy and payment terms.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">4.4 With Advertising and Analytics Partners</h3>
                <p className="mb-3">LifeLayer may display advertisements and work with advertising or analytics partners. These partners may collect or receive information such as:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40 mb-3">
                  <li>Device identifiers</li>
                  <li>Advertising identifiers</li>
                  <li>App usage data</li>
                  <li>Approximate location</li>
                  <li>Ad interaction data</li>
                  <li>Device and browser information</li>
                  <li>Performance and analytics data</li>
                </ul>
                <p className="mb-3">This information may be used to show advertisements, measure ad performance, prevent fraud, understand app usage, and, where permitted, personalize ads.</p>
                <p>Where required by law, we will request your consent before using information for personalized advertising. You may also be able to limit ad tracking through your device settings.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">4.5 For Legal, Safety, and Security Reasons</h3>
                <p className="mb-3">We may disclose information if we believe it is necessary to:</p>
                <ul className="list-disc list-inside space-y-1.5 text-white/40">
                  <li>Comply with applicable law</li>
                  <li>Respond to lawful requests, subpoenas, court orders, or legal processes</li>
                  <li>Protect the safety of users or the public</li>
                  <li>Investigate fraud, abuse, security threats, or technical issues</li>
                  <li>Enforce our Terms of Service or Community Guidelines</li>
                  <li>Protect our rights, property, and business interests</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">4.6 Business Transfers</h3>
                <p>If Velrey Development is involved in a merger, acquisition, financing, reorganization, sale of assets, bankruptcy, or similar business transaction, your information may be transferred as part of that transaction. We will take reasonable steps to ensure your information remains protected.</p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* 5. Third-Party Services */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">5. Third-Party Services</h2>
              <p>LifeLayer may use third-party services to support app functionality. These may include, but are not limited to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Cloud hosting, database, and backend providers</li>
                <li>Authentication providers</li>
                <li>Payment and subscription providers</li>
                <li>Analytics and crash reporting providers</li>
                <li>AI service providers</li>
                <li>Email, notification, and messaging providers</li>
                <li>Nutrition, barcode, food, exercise, or fitness content providers</li>
                <li>Advertising networks and measurement partners</li>
              </ul>
              <p>These third parties may collect, process, or store information according to their own privacy policies. We encourage you to review their privacy practices.</p>
              <p>We are not responsible for the privacy practices of third-party websites, services, platforms, or providers that we do not control.</p>
            </section>

            <hr className="border-white/5" />

            {/* 6. Cookies, Local Storage, SDKs, and Similar Technologies */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">6. Cookies, Local Storage, SDKs, and Similar Technologies</h2>
              <p>If LifeLayer includes a website, web app, or browser-based services, we may use cookies, local storage, pixels, SDKs, or similar technologies to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Keep you signed in</li>
                <li>Remember your preferences</li>
                <li>Understand usage patterns</li>
                <li>Improve performance</li>
                <li>Prevent fraud or abuse</li>
                <li>Measure marketing or referral effectiveness</li>
                <li>Provide analytics</li>
                <li>Support advertising and ad measurement</li>
              </ul>
              <p>You may be able to manage cookies through your browser settings. Disabling cookies may affect certain features.</p>
              <p>Mobile apps may use software development kits, device storage, advertising identifiers, and similar technologies for analytics, crash reporting, login, notifications, advertising, and app functionality.</p>
            </section>

            <hr className="border-white/5" />

            {/* 7. Push Notifications and Reminders */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">7. Push Notifications and Reminders</h2>
              <p>With your permission, we may send push notifications, reminders, or in-app alerts related to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Routine reminders</li>
                <li>Meal reminders</li>
                <li>Workout reminders</li>
                <li>Productivity sessions</li>
                <li>Streaks and progress</li>
                <li>Account updates</li>
                <li>Friend activity</li>
                <li>App updates</li>
                <li>Important announcements</li>
                <li>Promotional messages, where permitted</li>
              </ul>
              <p>You can manage push notifications through LifeLayer settings or your device settings.</p>
            </section>

            <hr className="border-white/5" />

            {/* 8. Data Retention */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">8. Data Retention</h2>
              <p>We retain personal information for as long as necessary to provide LifeLayer, maintain your account, comply with legal obligations, resolve disputes, enforce agreements, prevent abuse, and improve our services.</p>
              <p>Retention periods may vary depending on the type of information.</p>
              <p>For example:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Account information is generally retained while your account is active.</li>
                <li>Routine, meal, workout, and productivity data may be retained until you delete it or delete your account.</li>
                <li>Public content may remain visible until deleted or removed.</li>
                <li>Support messages may be retained for a reasonable period to handle follow-up issues.</li>
                <li>Transaction records may be retained as required for financial, tax, fraud prevention, or legal purposes.</li>
                <li>Backup copies may remain for a limited period after deletion before being securely removed.</li>
              </ul>
              <p>When we no longer need your information, we will delete, anonymize, or securely retain it as required by law.</p>
            </section>

            <hr className="border-white/5" />

            {/* 9. Your Privacy Choices and Rights */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">9. Your Privacy Choices and Rights</h2>
              <p>Depending on where you live, you may have rights regarding your personal information. These may include the right to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Delete your information</li>
                <li>Export or receive a copy of your information</li>
                <li>Object to certain processing</li>
                <li>Restrict certain processing</li>
                <li>Withdraw consent</li>
                <li>Opt out of certain analytics, advertising, or marketing communications</li>
                <li>Delete your account</li>
              </ul>
              <p>To make a privacy request, contact us at:</p>
              <p>
                <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                  privacy@velrey.dev
                </a>
              </p>
              <p>We may need to verify your identity before fulfilling certain requests.</p>
              <p>Some information may not be deleted immediately if we need to retain it for legal, security, fraud prevention, billing, or legitimate business reasons.</p>
            </section>

            <hr className="border-white/5" />

            {/* 10. Account Deletion */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">10. Account Deletion</h2>
              <p>You may request deletion of your account by:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Using the account deletion option in LifeLayer, if available; or</li>
                <li>
                  Contacting us at{" "}
                  <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                    privacy@velrey.dev
                  </a>
                </li>
              </ul>
              <p>When your account is deleted, we will delete or anonymize personal information associated with your account, unless we are required or permitted to retain certain information by law.</p>
              <p>Deleting your account may permanently remove routines, workouts, meal logs, productivity sessions, posts, friends, progress history, account settings, and other account data.</p>
              <p>If you purchased a subscription through Apple or Google, deleting your LifeLayer account may not automatically cancel your subscription. You may need to cancel your subscription through your Apple App Store or Google Play account settings.</p>
            </section>

            <hr className="border-white/5" />

            {/* 11. Public Content and Social Features */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">11. Public Content and Social Features</h2>
              <p>If you post content publicly, such as routines, productivity sessions, comments, or profile information, that content may be visible to other users.</p>
              <p>Other users may be able to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>View your public content</li>
                <li>Save or copy routines you share</li>
                <li>Interact with your posts</li>
                <li>Report content</li>
                <li>See your display name, username, or profile image</li>
              </ul>
              <p>You should not post:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Private personal information</li>
                <li>Sensitive health information</li>
                <li>Financial information</li>
                <li>Passwords or security details</li>
                <li>Someone else&apos;s personal information</li>
                <li>Content that violates our Terms of Service or Community Guidelines</li>
              </ul>
              <p>We may remove content, restrict accounts, or take other moderation actions if content violates our policies or creates safety concerns.</p>
            </section>

            <hr className="border-white/5" />

            {/* 12. Children and Teen Users */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">12. Children and Teen Users</h2>
              <p>LifeLayer is not intended for children under the age of 13.</p>
              <p>Users must be at least 13 years old to create an account or use LifeLayer. If we learn that we have collected personal information from a child under 13 without appropriate consent, we will take steps to delete that information.</p>
              <p>For users under the age of majority in their region, certain features may be limited, restricted, or moderated for safety. This may include restrictions on public posting, social media sharing, direct messaging, profile visibility, or other community features.</p>
              <p>Users under 13 are not allowed to create accounts, post public routines, share social media information, use friend discovery features, or upload public profile content.</p>
              <p>Parents or guardians who believe their child has provided personal information to us may contact us at:</p>
              <p>
                <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                  privacy@velrey.dev
                </a>
              </p>
              <p>We will review the request and take appropriate action.</p>
            </section>

            <hr className="border-white/5" />

            {/* 13. AI, Recommendations, and Automated Features */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">13. AI, Recommendations, and Automated Features</h2>
              <p>LifeLayer may provide AI-generated or algorithmic recommendations related to routines, productivity, fitness, meals, habits, skincare, wellness, or other personal goals.</p>
              <p>These recommendations may be based on:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Information you enter</li>
                <li>Your app activity</li>
                <li>Your preferences</li>
                <li>Your goals</li>
                <li>Your uploaded images, if you choose to use image-based features</li>
                <li>Your previous routines, workouts, meals, or productivity sessions</li>
              </ul>
              <p>AI-generated content is not guaranteed to be accurate, complete, safe, or appropriate for every user. It should not be treated as professional medical, nutritional, fitness, psychological, financial, or legal advice.</p>
              <p>You are responsible for deciding whether to follow any recommendation. You should consult a qualified professional before making major health, fitness, nutrition, or lifestyle changes.</p>
              <p>We may monitor AI features to improve safety, prevent abuse, and improve the quality of app responses.</p>
            </section>

            <hr className="border-white/5" />

            {/* 14. Health and Fitness Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">14. Health and Fitness Disclaimer</h2>
              <p>LifeLayer may include fitness, nutrition, wellness, habit, and productivity features. These features are provided for general informational purposes only.</p>
              <p>LifeLayer does not provide medical advice, diagnosis, treatment, or emergency services.</p>
              <p>Before starting a new workout plan, diet, supplement routine, or major lifestyle change, you should consider consulting a qualified healthcare professional, especially if you have any medical condition, injury, dietary restriction, or health concern.</p>
              <p>Nutrition information, calorie estimates, barcode results, exercise data, and AI recommendations may be incomplete or inaccurate. You are responsible for verifying information before relying on it.</p>
            </section>

            <hr className="border-white/5" />

            {/* 15. Advertising */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">15. Advertising</h2>
              <p>LifeLayer displays advertisements and may work with advertising partners. These partners may collect or receive information such as device identifiers, advertising identifiers, app usage data, approximate location, and ad interaction data to show, measure, or personalize ads.</p>
              <p>Advertising partners may use this information to:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Display ads in LifeLayer</li>
                <li>Measure ad performance</li>
                <li>Prevent ad fraud</li>
                <li>Understand how users interact with ads</li>
                <li>Personalize ads, where permitted by law</li>
                <li>Limit the number of times you see the same ad</li>
              </ul>
              <p>Where required by law, we will request your consent before using information for personalized advertising.</p>
              <p>You may be able to limit ad tracking or reset your advertising identifier through your device settings.</p>
            </section>

            <hr className="border-white/5" />

            {/* 16. Data Security */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">16. Data Security</h2>
              <p>We use reasonable technical, administrative, and organizational measures to protect your information from unauthorized access, loss, misuse, alteration, and disclosure.</p>
              <p>These measures may include:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Encryption in transit</li>
                <li>Secure cloud storage</li>
                <li>Authentication controls</li>
                <li>Access restrictions</li>
                <li>Monitoring and logging</li>
                <li>Secure development practices</li>
                <li>Regular testing and updates</li>
                <li>Limited employee or contractor access where applicable</li>
              </ul>
              <p>However, no method of transmission or storage is completely secure. We cannot guarantee absolute security.</p>
              <p>You are responsible for keeping your account credentials safe and for notifying us if you believe your account has been compromised.</p>
            </section>

            <hr className="border-white/5" />

            {/* 17. International Data Transfers */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">17. International Data Transfers</h2>
              <p>Your information may be processed and stored in countries other than where you live. These countries may have privacy laws that differ from those in your region.</p>
              <p>When we transfer personal information internationally, we take steps designed to protect your information according to applicable privacy laws.</p>
              <p>By using LifeLayer, you understand that your information may be transferred, processed, and stored outside your province, state, or country.</p>
            </section>

            <hr className="border-white/5" />

            {/* 18. Marketing and Promotional Communications */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">18. Marketing and Promotional Communications</h2>
              <p>We may send you marketing or promotional communications if you choose to receive them or where permitted by law.</p>
              <p>
                You can opt out of marketing emails by using the unsubscribe link in the email or contacting us at{" "}
                <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                  privacy@velrey.dev
                </a>
                .
              </p>
              <p>Even if you opt out of marketing messages, we may still send important service-related messages, such as account notices, security alerts, subscription updates, or policy changes.</p>
            </section>

            <hr className="border-white/5" />

            {/* 19. Analytics and App Improvement */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">19. Analytics and App Improvement</h2>
              <p>We may use analytics tools to understand how users interact with LifeLayer. This helps us improve performance, fix bugs, develop new features, and understand which features are useful.</p>
              <p>Analytics data may include:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Screens viewed</li>
                <li>Features used</li>
                <li>Session duration</li>
                <li>App version</li>
                <li>Device type</li>
                <li>Approximate region</li>
                <li>Crash reports</li>
                <li>Performance data</li>
              </ul>
              <p>Where possible, we use aggregated or de-identified analytics data.</p>
            </section>

            <hr className="border-white/5" />

            {/* 20. Do Not Track and Global Privacy Controls */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">20. Do Not Track and Global Privacy Controls</h2>
              <p>Some browsers or devices may send &quot;Do Not Track&quot; or similar signals. Because there is no universal standard for how these signals should be interpreted, we may not respond to all such signals unless required by law.</p>
              <p>Where legally required, we will honor applicable privacy preference signals.</p>
            </section>

            <hr className="border-white/5" />

            {/* 21. Data Accuracy */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">21. Data Accuracy</h2>
              <p>We try to keep information accurate and up to date, but we rely on you to provide accurate information.</p>
              <p>You can update certain account details, preferences, routines, logs, and profile information through LifeLayer.</p>
              <p>
                If you believe information we hold about you is inaccurate, you may contact us at{" "}
                <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                  privacy@velrey.dev
                </a>
                .
              </p>
            </section>

            <hr className="border-white/5" />

            {/* 22. User Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">22. User Responsibilities</h2>
              <p>You agree not to upload, post, or share information that:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>You do not have permission to share</li>
                <li>Violates another person&apos;s privacy</li>
                <li>Includes another person&apos;s personal information without consent</li>
                <li>Is false, misleading, harmful, abusive, or illegal</li>
                <li>Violates our Terms of Service or Community Guidelines</li>
              </ul>
              <p>You are responsible for the content you create, upload, or share through LifeLayer.</p>
            </section>

            <hr className="border-white/5" />

            {/* 23. Changes to This Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">23. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time.</p>
              <p>If we make material changes, we may notify you by:</p>
              <ul className="list-disc list-inside space-y-1.5 text-white/40">
                <li>Updating the &quot;Last Updated&quot; date</li>
                <li>Sending an email</li>
                <li>Showing an in-app notice</li>
                <li>Posting a notice on our website</li>
              </ul>
              <p>Your continued use of LifeLayer after the updated Privacy Policy becomes effective means you accept the updated policy.</p>
              <p>If you do not agree with the updated Privacy Policy, you should stop using LifeLayer and may request account deletion.</p>
            </section>

            <hr className="border-white/5" />

            {/* 24. Contact Us */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">24. Contact Us</h2>
              <p>If you have questions, concerns, or requests about this Privacy Policy or your personal information, you can contact us at:</p>
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 space-y-2">
                <p><strong className="text-white/70">Velrey Development</strong></p>
                <p>
                  <strong className="text-white/60">Privacy Email:</strong>{" "}
                  <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                    privacy@velrey.dev
                  </a>
                </p>
                <p><strong className="text-white/60">Website:</strong> velrey.dev</p>
                <p className="mt-2 text-white/30">
                  <strong className="text-white/50">Business Address:</strong><br />
                  2160 Hwy 7<br />
                  Ste 6 #421<br />
                  Vaughan, ON<br />
                  Canada L4K 1W6
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* 25. Region-Specific Privacy Rights */}
            <section className="space-y-6">
              <h2 className="text-white text-xl font-bold">25. Region-Specific Privacy Rights</h2>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">25.1 Canada</h3>
                <p>If you are located in Canada, you may have rights under Canadian privacy laws, including the right to access and request correction of your personal information, subject to certain exceptions.</p>
                <p className="mt-2">
                  You may contact us at{" "}
                  <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                    privacy@velrey.dev
                  </a>{" "}
                  to make a request.
                </p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">25.2 European Economic Area, United Kingdom, and Switzerland</h3>
                <p>If you are located in the European Economic Area, United Kingdom, or Switzerland, you may have additional rights, including the right to access, correct, delete, restrict, object to processing, data portability, and withdraw consent.</p>
                <p className="mt-2">You may also have the right to lodge a complaint with your local data protection authority.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">25.3 United States</h3>
                <p>If you are located in the United States, you may have privacy rights depending on your state of residence. These may include the right to access, delete, correct, or opt out of certain uses of personal information.</p>
                <p className="mt-2">We do not knowingly sell personal information of users under 16.</p>
              </div>

              <div>
                <h3 className="text-white/80 font-semibold mb-2">25.4 California</h3>
                <p>If you are a California resident, you may have rights under California privacy laws, including the right to know what personal information we collect, use, disclose, or share, the right to request deletion, the right to correct inaccurate information, and the right to opt out of certain sharing or selling of personal information.</p>
                <p className="mt-2">
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                    privacy@velrey.dev
                  </a>
                  .
                </p>
              </div>
            </section>

            <hr className="border-white/5" />

            {/* 26. Summary of Key Points */}
            <section className="space-y-4">
              <h2 className="text-white text-xl font-bold">26. Summary of Key Points</h2>
              <ul className="list-disc list-inside space-y-2 text-white/40">
                <li>LifeLayer collects information needed to provide routines, productivity tracking, fitness tracking, meal tracking, AI features, social features, subscriptions, advertisements, and account services.</li>
                <li>Some information you enter may be personal, health-related, or sensitive.</li>
                <li>Public posts and Explore content may be visible to other users.</li>
                <li>LifeLayer is not intended for children under 13.</li>
                <li>AI recommendations are informational only and should not replace professional advice.</li>
                <li>Advertising partners may collect limited information to show, measure, or personalize ads.</li>
                <li>
                  You can request access, correction, deletion, or export of your information by contacting{" "}
                  <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                    privacy@velrey.dev
                  </a>
                  .
                </li>
                <li>
                  You can contact Velrey Development at{" "}
                  <a href="mailto:privacy@velrey.dev" className="text-[#818cf8] hover:text-white transition-colors">
                    privacy@velrey.dev
                  </a>{" "}
                  for privacy questions or requests.
                </li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
