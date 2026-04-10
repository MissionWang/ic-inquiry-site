# IC Inquiry to PI: Operational SOP (Accio Managed)

## Step 1: Receiving the Inquiry (The Notification)
- **Source**: You will receive an email from **EmailJS** (to the address in `config.js`).
- **Content**: Usually contains: Name, Company, Part Number(s), Quantity, and an optional BOM file.

## Step 2: AI Parsing (The "Brain" Phase)
**Action**: Copy the inquiry content (or upload the BOM file) to Accio.
**Prompt you give me**: *"Help me parse this BOM/Inquiry from a customer."*
- **What I (Accio) will do**:
    1.  Extract all **Part Numbers (PN)** and **Quantities**.
    2.  Identify the **Brand** (ST, TI, etc.) and **Package** (SOP-8, LQFP-48).
    3.  Flag any **Obsolete/Hard-to-find** parts (these have higher margins).
    4.  Translate any non-technical requirements into a "Huaqiangbei Sourcing List" for you.

## Step 3: Sourcing (Your Role in HQB)
**Action**: Send the "Sourcing List" to your familiar suppliers in Huaqiangbei.
- **Goal**: Get the **Spot Price (现货价)** and **Lead Time (交期)**.
- **Tip**: Ask for "Date Code (DC)" and "Original New (原装新货)" confirmation.

## Step 4: Quoting (Generating the PI)
**Action**: Tell me your cost and target margin.
**Prompt you give me**: *"The cost for STM32F103 is $1.2, I want 20% margin. Draft a PI for the customer."*
- **What I (Accio) will do**: 
    1. Generate a professional **Proforma Invoice (PI)** in PDF/Markdown.
    2. Draft a **Response Email** in formal English, highlighting:
        - "Direct Stock from Shenzhen Hub"
        - "QC Inspection Included"
        - "Express Shipping via DHL/FedEx"

## Step 5: Follow-up & Closing
- **Payment**: Direct the customer to your PayPal or Bank Transfer (SWIFT).
- **Logistics**: Once paid, buy the stock from HQB, pack it safely (using ESD bags), and ship.
- **Confirmation**: I will draft the "Shipping Advice" email with the Tracking Number.

---

### Proforma Invoice (PI) Template (Key Fields)
1. **Seller Information**: Your Company Name & Address.
2. **Buyer Information**: Customer's details from the inquiry.
3. **Product Table**: Part Number, Brand, DC, Qty, Unit Price, Total.
4. **Terms & Conditions**:
    - Payment: 100% T/T in advance.
    - Shipping: EXW Shenzhen.
    - Warranty: 90-Day Functional Guarantee.
