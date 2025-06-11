# 🚛 US FTL Rate Calculator

This is a Google Sheets-based tool developed at **Xhipment** to automate the calculation of Full Truckload (FTL) freight rates within the United States, using vendor-provided rate cards.

---

## 📌 Overview

The tool enables the **Customer Success** team to quickly generate accurate FTL shipping quotes by entering shipment details like pallet count, volume, weight, and ZIP codes for pickup and delivery. The system uses Google Apps Script to calculate distance and apply vendor-specific pricing rules.

---

## ✨ Features

- 🔽 **Dynamic Unit Selector**: Choose from:
  - Pallet
  - Volume (CBM)
  - Weight (kg)
  
- ⚙️ **Customizable Defaults**:
  - Default volume per pallet: **1.5 CBM**
  - Default weight per pallet: **300 kg**
  - Both can be overridden by the user

- 📍 **Distance Calculation**:
  - Pickup and drop ZIP codes
  - Distance computed using **Google Apps Script** + **Google Maps API**

- 💰 **Automated Pricing Logic**:
  - Uses pre-configured **vendor rate cards**
  - Calculates total cost based on shipment size and distance

---

## 🧰 Tech Stack

- Google Sheets
- Google Apps Script
- Google Maps API (for distance)
- Internal rate card database (Google Sheets)

---

## 🎯 Impact

- Reduced quote generation time from **minutes to seconds**
- Improved efficiency for the **Customer Success** team
- Enabled standardized and scalable pricing calculations

---
