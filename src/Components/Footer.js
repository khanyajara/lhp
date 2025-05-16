import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#2e7d32',
      color: '#fff',
      padding: '40px 20px',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '40px'
      }}>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h3 style={{ marginBottom: '16px' }}>Contact Us</h3>
          <p>Galeshewe SMME Village, Unit 9<br />C/o Tyala & Hulana Street<br />Galeshewe, Kimberley 8345</p>
          <p><strong>Cell:</strong> 083 313 4316</p>
          <p><strong>Office:</strong> 087 310 5273</p>
          <p><strong>Fax:</strong> 086 527 5636</p>
          <p><strong>Email:</strong> <a href="mailto:info@lh-products.co.za" style={{ color: '#fff', textDecoration: 'underline' }}>info@lh-products.co.za</a></p>
        </div>

        <div style={{ flex: 1, minWidth: '250px' }}>
          <h3 style={{ marginBottom: '16px' }}>Products</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>Bleach</li>
            <li>Pine Gel</li>
            <li>Dish Wash</li>
            <li>Deo Blocks</li>
            <li>Bubble Bath</li>
            <li>Handy Cream</li>
            <li>Oven Cleaner</li>
            <li>Floor Cleaner</li>
          </ul>
        </div>

        <div style={{ flex: 1, minWidth: '250px' }}>
          <h3 style={{ marginBottom: '16px' }}>Services</h3>
          <p>• Manufacturing of Cleaning Detergents</p>
          <p>• Cleaning & Gardening Services</p>
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Product Catalogue available on request</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.9rem' }}>
        © 2025 LHP Detergents. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
