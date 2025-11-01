import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const contactRef = useRef(null);
  const footerRef = useRef(null);

  // handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsContactVisible(true);
      });
    }, observerOptions);

    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsFooterVisible(true);
      });
    }, observerOptions);

    if (contactRef.current) contactObserver.observe(contactRef.current);
    if (footerRef.current) footerObserver.observe(footerRef.current);

    return () => {
      if (contactRef.current) contactObserver.unobserve(contactRef.current);
      if (footerRef.current) footerObserver.unobserve(footerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  // dynamic styles
  const dynamicStyles = {
    footerGrid: {
      display: 'grid',
      gap: '40px',
      gridTemplateColumns:
        windowWidth > 500 ? 'repeat(4, 1fr)' :
        windowWidth < 500 ? 'repeat(2, 1fr)' :
        '1fr',
      marginBottom: '40px',
    },
    footerColumn: { display: 'flex', flexDirection: 'column', gap: '16px' },
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        .stagger-5 { animation-delay: 0.5s; opacity: 0; }
        .stagger-6 { animation-delay: 0.6s; opacity: 0; }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #0A1D37;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
        }

        .social-icon:hover {
          transform: scale(1.1);
          background: #8b5cf6;
        }

        .footer-link:hover {
          color: #a5b4fc;
          padding-left: 4px;
        }

        .footer-social-icon:hover {
          background: #475569;
        }
      `}</style>

      {/* Contact Section */}
 <section id="contact" style={styles.contactSection} ref={contactRef}>
        <div style={styles.container}>
          <div className={isContactVisible ? 'animate-fadeInUp' : ''} style={styles.contactHeader}>
            <h1 style={styles.contactTitle}>Get In Touch</h1>
            <p style={styles.contactSubtitle}>
              Have questions about our products? We're here to help you with premium Kratom solutions.
            </p>
          </div>

          <div style={styles.contactGrid}>
            {/* Contact Info */}
            <div className={isContactVisible ? 'animate-fadeInLeft stagger-1' : ''} style={styles.contactInfo}>
              <h2 style={styles.infoTitle}>Contact Information</h2>
              <p style={styles.infoText}>
                Reach out to us through any of the following channels. Our team is ready to assist you.
              </p>

              <div style={styles.infoItems}>
                <div className={isContactVisible ? 'animate-scaleIn stagger-2' : ''} style={styles.infoItem}>
                  <div style={styles.iconCircle}>
                    <Mail size={24} color="#0A1D37" />
                  </div>
                  <div>
                    <h3 style={styles.infoItemTitle}>Email</h3>
                    <p style={styles.infoItemText}>info@velthrabio.com</p>
                    <p style={styles.infoItemText}>sales@velthrabio.com</p>
                  </div>
                </div>

                <div className={isContactVisible ? 'animate-scaleIn stagger-3' : ''} style={styles.infoItem}>
                  <div style={styles.iconCircle}>
                    <Phone size={24} color="#0A1D37" />
                  </div>
                  <div>
                    <h3 style={styles.infoItemTitle}>Phone</h3>
                    <p style={styles.infoItemText}>+62 812 3456 7890</p>
                    <p style={styles.infoItemText}>+62 813 9876 5432</p>
                  </div>
                </div>

                <div className={isContactVisible ? 'animate-scaleIn stagger-4' : ''} style={styles.infoItem}>
                  <div style={styles.iconCircle}>
                    <MapPin size={24} color="#0A1D37" />
                  </div>
                  <div>
                    <h3 style={styles.infoItemTitle}>Office</h3>
                    <p style={styles.infoItemText}>Kalimantan, Indonesia</p>
                    <p style={styles.infoItemText}>Open: Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>
              </div>

              <div className={isContactVisible ? 'animate-fadeInUp stagger-5' : ''} style={styles.socialLinks}>
                <a href="#" className="social-icon" style={styles.socialIcon}><Facebook size={20} /></a>
                <a href="#" className="social-icon" style={styles.socialIcon}><Twitter size={20} /></a>
                <a href="#" className="social-icon" style={styles.socialIcon}><Linkedin size={20} /></a>
                <a href="#" className="social-icon" style={styles.socialIcon}><Instagram size={20} /></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={isContactVisible ? 'animate-fadeInRight stagger-2' : ''} style={styles.formContainer}>
              <form onSubmit={handleSubmit} className="contact-form" style={styles.form}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder="John Doe"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Your Company"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{...styles.input, ...styles.textarea}}
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button type="submit" className="submit-button" style={styles.submitButton}>
                  <Send size={20} style={{marginRight: '8px'}} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer} ref={footerRef}>
        <div style={styles.container}>
          <div style={dynamicStyles.footerGrid}>
            {/* Company Info */}
            <div className={isFooterVisible ? 'animate-fadeInUp stagger-1' : ''} style={dynamicStyles.footerColumn}>
              <div style={styles.footerLogo}>
                <h2 style={styles.footerLogoText}>Velthrabio</h2>
                <p style={styles.footerTagline}>Science of Purity</p>
              </div>
              <p style={styles.footerDescription}>
                Your trusted supplier of premium-grade Kratom, sustainably sourced from local farmers 
                in Kalimantan, Indonesia since 2015.
              </p>
              <div style={styles.footerSocial}>
                <a href="#" className="footer-social-icon" style={styles.footerSocialIcon}><Facebook size={18} /></a>
                <a href="#" className="footer-social-icon" style={styles.footerSocialIcon}><Twitter size={18} /></a>
                <a href="#" className="footer-social-icon" style={styles.footerSocialIcon}><Linkedin size={18} /></a>
                <a href="#" className="footer-social-icon" style={styles.footerSocialIcon}><Instagram size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={isFooterVisible ? 'animate-fadeInUp stagger-2' : ''} style={dynamicStyles.footerColumn}>
              <h3 style={styles.footerTitle}>Quick Links</h3>
              <ul style={styles.footerList}>
                <li><a href="#home" className="footer-link" style={styles.footerLink}>Home</a></li>
                <li><a href="#features" className="footer-link" style={styles.footerLink}>Features</a></li>
                <li><a href="#demo" className="footer-link" style={styles.footerLink}>Products</a></li>
                <li><a href="#contact" className="footer-link" style={styles.footerLink}>Contact</a></li>
              </ul>
            </div>

            {/* Products */}
            <div className={isFooterVisible ? 'animate-fadeInUp stagger-3' : ''} style={dynamicStyles.footerColumn}>
              <h3 style={styles.footerTitle}>Products</h3>
              <ul style={styles.footerList}>
                <li><a href="#" className="footer-link" style={styles.footerLink}>Super Green Kratom</a></li>
                <li><a href="#" className="footer-link" style={styles.footerLink}>Bulk Orders</a></li>
                <li><a href="#" className="footer-link" style={styles.footerLink}>Custom Packaging</a></li>
                <li><a href="#" className="footer-link" style={styles.footerLink}>Wholesale</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className={isFooterVisible ? 'animate-fadeInUp stagger-4' : ''} style={dynamicStyles.footerColumn}>
              <h3 style={styles.footerTitle}>Legal</h3>
              <ul style={styles.footerList}>
                <li><a href="#" className="footer-link" style={styles.footerLink}>Privacy Policy</a></li>
                <li><a href="#" className="footer-link" style={styles.footerLink}>Terms of Service</a></li>
                <li><a href="#" className="footer-link" style={styles.footerLink}>Quality Assurance</a></li>
                <li><a href="#" className="footer-link" style={styles.footerLink}>Certifications</a></li>
              </ul>
            </div>
          </div>

          <div className={isFooterVisible ? 'animate-fadeInUp stagger-5' : ''} style={styles.footerBottom}>
            <p style={styles.copyright}>© 2025 Velthrabio. All rights reserved.</p>
            <p style={styles.footerNote}>Made with dedication to quality and sustainability</p>
          </div>
        </div>
      </footer>
    </>
  );
}

const styles = {
  contactSection: {
    padding: '100px 20px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  contactHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  contactTitle: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '16px',
  },
  contactSubtitle: {
    fontSize: '18px',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
  },
  contactInfo: {
    background: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  infoTitle: {
    fontSize: '28px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '12px',
  },
  infoText: {
    color: '#64748b',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  infoItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  infoItem: {
    display: 'flex',
    gap: '16px',
  },
  iconCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#eef2ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  infoItemTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '4px',
  },
  infoItemText: {
    fontSize: '14px',
    color: '#64748b',
    margin: '2px 0',
  },
  socialLinks: {
    display: 'flex',
    gap: '12px',
    marginTop: '30px',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#0A1D37',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'transform 0.3s, background 0.3s',
    cursor: 'pointer',
  },
  formContainer: {
    background: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1e293b',
  },
  input: {
    padding: '12px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '14px',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    outline: 'none',
  },
  textarea: {
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  submitButton: {
    padding: '14px 32px',
    background: 'linear-gradient(135deg, #0A1D37 0%, #8b5cf6 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  footer: {
    background: '#1e293b',
    color: 'white',
    padding: '60px 20px 30px',
  },
  // footerGrid: {
  //     display: 'grid',
  //     gap: '40px',
  //     gridTemplateColumns:
  //       windowWidth > 900
  //         ? 'repeat(4, 1fr)'
  //         : windowWidth > 500
  //         ? 'repeat(2, 1fr)'
  //         : '1fr',
  //     marginBottom: '40px',
  //   },
  //   footerColumn: { display: 'flex', flexDirection: 'column', gap: '16px' },
  // footerLogo: {
  //   marginBottom: '8px',
  // },
  footerLogoText: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '4px',
  },
  footerTagline: {
    fontSize: '14px',
    color: '#94a3b8',
    fontStyle: 'italic',
  },
  footerDescription: {
    fontSize: '14px',
    color: '#cbd5e1',
    lineHeight: '1.6',
  },
  footerSocial: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
  },
  footerSocialIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#334155',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'background 0.3s',
  },
  footerTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  footerLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s, padding-left 0.3s',
  },
  footerBottom: {
    borderTop: '1px solid #334155',
    paddingTop: '24px',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '14px',
    color: '#94a3b8',
    marginBottom: '8px',
  },
  footerNote: {
    fontSize: '12px',
    color: '#64748b',
  },
  
};