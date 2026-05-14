import '../src/styles/globals.css'
import FloatingButtons from '../src/components/FloatingButtons'
import Popup from '../src/components/Popup'
import EnquiryModal from '../src/components/EnquiryModal'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const [siteConfig, setSiteConfig] = useState(null)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [enquiryService, setEnquiryService] = useState('')
  const router = useRouter()
  const isAdmin = router.pathname.startsWith('/admin')

  useEffect(() => {
    // Load popup config from static data
    try {
      const config = {
        enabled: true,
        badge: 'Limited Time Offer',
        headline: 'Complete Hotel Technology Suite',
        subtext: 'Get Channel Manager, PMS, Booking Engine, Website & Hosting — all in one powerful bundle at a special price.',
        ctaText: 'Claim This Offer',
        ctaLink: '/offer'
      }
      setSiteConfig(config)
    } catch(e) {}
  }, [])

  // Auto popup for non-homepage after 12s
  useEffect(() => {
    if (isAdmin || router.pathname === '/') return;
    const seen = sessionStorage.getItem('quote-popup-seen');
    if (seen) return;
    
    const t = setTimeout(() => {
      setEnquiryService('General Enquiry');
      setEnquiryOpen(true);
      sessionStorage.setItem('quote-popup-seen', '1');
    }, 12000);
    return () => clearTimeout(t);
  }, [router.pathname, isAdmin]);

  // Global event listener to open enquiry
  useEffect(() => {
    function handleOpen(e) {
      setEnquiryService(e.detail?.service || '');
      setEnquiryOpen(true);
    }
    window.addEventListener('open-enquiry-modal', handleOpen);
    return () => window.removeEventListener('open-enquiry-modal', handleOpen);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {!isAdmin && <FloatingButtons />}
      {!isAdmin && router.pathname === '/' && siteConfig && <Popup config={siteConfig} />}
      {!isAdmin && (
        <EnquiryModal 
          open={enquiryOpen} 
          onClose={() => setEnquiryOpen(false)} 
          defaultService={enquiryService} 
        />
      )}
    </>
  )
}
