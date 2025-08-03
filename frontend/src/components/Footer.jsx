import React from 'react';
import { FaClock, FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <hr style={styles.divider} />
        
        <div style={styles.gridContainer}>
          {/* Hospital Info */}
          <div style={styles.gridItem}>
            <h3 style={styles.heading}>MedCare Hospital</h3>
            <p style={styles.text}>Providing quality healthcare services since 1995. Our mission is to deliver compassionate care.</p>
            <div style={styles.socialContainer}>
              <a href="#" style={styles.socialLink}><FaFacebook /></a>
              <a href="#" style={styles.socialLink}><FaTwitter /></a>
              <a href="#" style={styles.socialLink}><FaInstagram /></a>
              <a href="#" style={styles.socialLink}><FaLinkedin /></a>
            </div>
          </div>

          {/* Doctor Timings */}
          <div style={styles.gridItem}>
            <h3 style={styles.heading}><FaClock style={styles.icon} /> Doctor Timings</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}><strong>General Physicians:</strong> 8AM - 8PM</li>
              <li style={styles.listItem}><strong>Specialists:</strong> 10AM - 6PM</li>
              <li style={styles.listItem}><strong>Emergency:</strong> 24/7</li>
              <li style={styles.listItem}><strong>Appointments:</strong> 9AM - 5PM</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div style={styles.gridItem}>
            <h3 style={styles.heading}>Quick Links</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}><a href="#" style={styles.link}>Home</a></li>
              <li style={styles.listItem}><a href="#" style={styles.link}>Services</a></li>
              <li style={styles.listItem}><a href="#" style={styles.link}>Doctors</a></li>
              <li style={styles.listItem}><a href="#" style={styles.link}>Appointments</a></li>
              <li style={styles.listItem}><a href="#" style={styles.link}>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={styles.gridItem}>
            <h3 style={styles.heading}>Contact Us</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}><FaMapMarkerAlt style={styles.icon} /> 123 Health St, Medical City</li>
              <li style={styles.listItem}><FaPhone style={styles.icon} /> Emergency: (555) 123-4567</li>
              <li style={styles.listItem}><FaPhone style={styles.icon} /> Appointments: (555) 987-6543</li>
              <li style={styles.listItem}><FaEnvelope style={styles.icon} /> info@medcarehospital.com</li>
            </ul>
          </div>
        </div>

        <div style={styles.copyright}>
          <p style={styles.copyrightText}>© {new Date().getFullYear()} MedCare Hospital. All Rights Reserved.</p>
          <div style={styles.legalLinks}>
            <a href="#" style={styles.legalLink}>Privacy Policy</a>
            <span style={styles.separator}>|</span>
            <a href="#" style={styles.legalLink}>Terms of Service</a>
            <span style={styles.separator}>|</span>
            <a href="#" style={styles.legalLink}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    color: '#333',
    padding: '2rem 0',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #ddd',
    margin: '0 0 2rem 0'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  gridItem: {
    padding: '0 1rem'
  },
  heading: {
    color: '#2c3e50',
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  text: {
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  socialContainer: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem'
  },
  socialLink: {
    color: '#3498db',
    fontSize: '1.2rem',
    transition: 'color 0.3s',
    textDecoration: 'none',
    ':hover': {
      color: '#2980b9'
    }
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    marginBottom: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    lineHeight: '1.5'
  },
  icon: {
    color: '#3498db',
    minWidth: '20px'
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    transition: 'color 0.3s',
    ':hover': {
      color: '#2980b9',
      textDecoration: 'underline'
    }
  },
  copyright: {
    textAlign: 'center',
    paddingTop: '1.5rem',
    borderTop: '1px solid #eee',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem'
  },
  copyrightText: {
    margin: 0,
    color: '#666'
  },
  legalLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  legalLink: {
    color: '#3498db',
    textDecoration: 'none',
    transition: 'color 0.3s',
    ':hover': {
      color: '#2980b9',
      textDecoration: 'underline'
    }
  },
  separator: {
    color: '#ccc',
    userSelect: 'none'
  },
  '@media (max-width: 768px)': {
    gridContainer: {
      gridTemplateColumns: '1fr'
    },
    gridItem: {
      padding: '0',
      marginBottom: '1.5rem'
    },
    legalLinks: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }
};