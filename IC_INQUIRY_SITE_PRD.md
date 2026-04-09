# IC Inquiry Site: Implementation Blueprint (PRD)

## 1. Core Target & Value Proposition
- **Target**: Foreign SME manufacturers sourcing hard-to-find/obsolete ICs from Huaqiangbei.
- **Value**: Reliable stock (QC verified), 1-hour quotation, no MOQ, BOM optimization service.

## 2. Page Structure & Essential Fields

### A. Search Result Page (PLP)
Designed for efficiency. A table-based view is preferred over grid-based for IC parts.
- **PN (Part Number)**: Main identifier. Bold. Link to PDP.
- **Manufacturer**: Brand name/logo.
- **Description**: Technical short description (e.g. "MCU 8BIT 32KB FLASH 32TQFP").
- **Case/Package**: e.g., TQFP-32, SOT-23.
- **Availability Status**: "In Stock", "Call for Quote", "2-3 Days Lead Time".
- **Action**: "Add to Quote Cart" (Bulk select supported).

### B. Product Detail Page (PDP)
- **Header**: Part Number, Brand, Category.
- **Technical Specs Table**: Operating Temp, Voltage, Current, Speed, etc.
- **Datasheet Section**: "View PDF" or "Download Datasheet" button.
- **Huaqiangbei Quality Badge**: "QC Inspection Passed", "Original New Guaranteed".
- **Real Photos**: Multi-angle photos of the chip marking, label, and packaging (Tray/Tube/Tape).
- **Alternative/Cross-Reference**: "Recommended Replacements" for obsolete parts.
- **RFQ Sidebar**: Small form for (Quantity, Target Price, Delivery Date).

### C. BOM Upload Page (Key Feature)
- **User Action 1**: File upload (Excel/CSV/PDF).
- **User Action 2**: Quick Paste (PN, QTY) textarea.
- **Submission Form**: 
    - Name/Company (Mandatory)
    - Email/WhatsApp (Mandatory)
    - Project Type (Prototype / Production)
    - Urgent Level (Low/Medium/High)

## 3. Trust-Building Section: QC Center
- **Equipment Showcase**: Digital microscope, X-ray inspection (if available), Solderability testing.
- **Sample Reports**: Provide a downloadable "Sample Inspection Report" PDF.
- **Process Diagram**: From "Huaqiangbei Sourcing" -> "Internal QC" -> "Safe Packing" -> "Global Shipping (DHL/FedEx)".

## 4. Product Data Schema (for Shopify Metafields)
To make the search and technical specs work, the following data points must be mapped:
1. `part_number` (String)
2. `brand` (String)
3. `package` (String)
4. `datasheet_url` (URL)
5. `is_obsolete` (Boolean)
6. `qc_images` (Media)
7. `cross_ref_parts` (Text/Links)
8. `date_code` (String, e.g. "23+")

## 5. Inquiry Conversion Flow
1. User searches for PN -> Adds to Quote Cart -> Submits RFQ.
2. User uploads BOM -> Submits RFQ.
3. System (Shopify Flow) -> Notifies Admin (Email/WhatsApp).
4. Admin replies with Quote (PDF via Shopify Draft Order or CRM).
5. User confirms -> Payment via PayPal/Bank Transfer.
