import { query } from '../config/database.js';

class Inquiry {
  // Create inquiries table if not exists
  static async createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS inquiries (
        id INT PRIMARY KEY AUTO_INCREMENT,
        full_name VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20) NOT NULL,
        email_address VARCHAR(255),
        service_required VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;
    await query(sql);
    console.log('✅ Inquiries table verified/created');
  }

  // Create new inquiry
  static async create(data) {
    const sql = `
      INSERT INTO inquiries 
      (full_name, phone_number, email_address, service_required, message) 
      VALUES (?, ?, ?, ?, ?)
    `;
    const params = [
      data.full_name,
      data.phone_number,
      data.email_address || null,
      data.service_required || null,
      data.message || null
    ];
    
    const result = await query(sql, params);
    return result;
  }

  // Get all inquiries (for admin purposes)
  static async findAll() {
    const sql = 'SELECT * FROM inquiries ORDER BY created_at DESC';
    return await query(sql);
  }

  // Get inquiry by ID
  static async findById(id) {
    const sql = 'SELECT * FROM inquiries WHERE id = ?';
    const rows = await query(sql, [id]);
    return rows[0] || null;
  }
}

export default Inquiry;