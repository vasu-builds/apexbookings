import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-body">
        <div>
          <img src="/images/logo-white.png" alt="Apex Bookings" style={{height:'48px',width:'auto',display:'block',objectFit:'contain'}}/>
          <p className="footer-tagline">India's leading hotel revenue management &amp; technology company. Established 2017.</p>
          <div style={{display:'flex',flexDirection:'column',gap:4}}>
            <span className="footer-contact-item">Phartyal's Annexe, Anupam Vihar, Haldwani — 263139</span>
            <span className="footer-contact-item" style={{ fontSize: '1.4rem', fontWeight: '900', color: '#fff', margin: '14px 0 8px' }}>+91 81718 71902</span>
            <span className="footer-contact-item" style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 'bold' }}>info@apexbookings.in</span>
          </div>
        </div>
        {[
          {h:'Products',links:[['Booking Engine','/booking-engine'],['Channel Manager','/channel-manager'],['Cloud PMS','/cloud-pms'],['Cloud POS','/cloud-pos'],['Google Hotel Ads','/google-hotel-ads']]},
          {h:'Services',links:[['Revenue Management','/revenue-management'],['OTA Listing','/ota-listing'],['Digital Marketing','/digital-marketing'],['Website Development','/website-development'],['Payment Gateway','/payment-gateway']]},
          {h:'Company',links:[['Home','/'],['About Us','/about'],['Blog','/blog'],['Contact','/contact'],['Get Pricing Quote','#quote']]},
        ].map(({h,links}) => (
          <div key={h}>
            <p className="footer-col-h">{h}</p>
            {links.map(([label,href]) => 
              href === '#quote' ? (
                <a key={href} href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-enquiry-modal', {detail: {service: 'Pricing Quote'}})) }} className="footer-link">{label}</a>
              ) : (
                <Link key={href} href={href} className="footer-link">{label}</Link>
              )
            )}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Apex Bookings. All rights reserved.</span>
      </div>
    </footer>
  )
}
