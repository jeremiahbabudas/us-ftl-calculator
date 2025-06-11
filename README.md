# 🚛 US FTL Rate Calculator

This is a Google Sheets-based tool developed at **Xhipment** to automate the calculation of Full Truckload (FTL) freight rates within the United States, using vendor-provided rate cards.

👉 **View or make a copy of the live project here:**  
[Port of Discharge Estimator – Google Sheet](https://docs.google.com/spreadsheets/d/10_1qE0pMnhLjszeMOwGOySFXNiJ8njFLRWPW_WeS7Vs/edit?usp=sharing)

## 📌 Overview

The tool enables the **Customer Success** team to quickly generate accurate FTL shipping quotes by entering shipment details like pallet count, volume, weight, and ZIP codes for pickup and delivery. The system uses Google Apps Script to calculate distance and apply vendor-specific pricing rules.


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
    
- 🗂️ **Quote Archiving Script**:
  - A **"Save Quote" button** triggers a script that copies the completed sheet
  - The sheet is saved to a **repository folder** on the company Google Drive
  - The saved sheet is automatically named using the **Opportunity ID** entered by the user
  - Ensures quotes are archived for future reference and internal tracking
 
## 📁 Files

- `distanceCalculator.gs` – Google Apps Script code containing core distance and caching functions
- `scrapePorts.gs` – Google Apps Script code that scrapes port data from Wikipedia and populates a Google Sheet with port rankings, names, states, and trade statistics.


## 🧰 Tech Stack

- Google Sheets
- Google Apps Script
- Google Maps API (for distance)
- Internal rate card database (Google Sheets)


## 🎯 Impact

- Reduced quote generation time from **minutes to seconds**
- Improved efficiency for the **Customer Success** team
- Enabled standardized and scalable pricing calculations

---
