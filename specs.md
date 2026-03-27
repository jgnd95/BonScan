# BonScan

## Status
🔴 Niet begonnen | 🟡 In progress | 🟢 Klaar

---

## Schermen

### 1. Header
- Links logo + naam, rechts settings button 
-> Zie: design-screenshots/header.png

### 2. Navigation
- Navigatie bestaat uit 3 knoppen
    - Dashboard
    - "Camera button" -> steek een beetje boven uit de navigatie
    - Bonnetjes
-> Zie: design-screenshots/nav.png

### 1. 🔐 Auth Scherm 🔴
- Email + wachtwoord login 🔴
- Register optie 🔴
- Supabase auth 🔴
- → naar: Overzicht (bij success) 🔴

### 2. 📋 Overzicht Scherm 🔴
- Lijst van alle bonnetjes (datum, winkel, bedrag) 🔴
- Lege state als er nog niks is 🔴
- FAB knop rechtsonder → naar: Scan Scherm 🔴
- → naar: Detail Scherm (bij klikken op bonnetje) 🔴

### 3. 📸 Scan Scherm 🔴
- Camera knop🔴 
- Galerij knop🔴
- [OCR PLACEHOLDER — nog niet bouwen]🔴
- → naar: Bewerk Scherm (met foto)🔴

### 4. ✏️ Bewerk Scherm 🔴
- Thumbnail van foto🔴
- Velden: winkel, bedrag, datum, categorie🔴
- Handmatig invulbaar (OCR vult dit later automatisch🔴
- Opslaan knop → Supabase + → naar: Overzicht🔴
- Annuleer knop → terug naar: Overzicht🔴

### 5. 🔍 Detail Scherm 🔴
- Grote foto van bonnetje🔴
- Alle opgeslagen velden🔴
- Bewerk knop → naar: Bewerk Scherm🔴
- Verwijder knop (met bevestiging)🔴
- → terug naar: Overzicht🔴

---

## Database (Supabase)
- Tabel: receipts
  - id, user_id, image_url, winkel, bedrag, datum, categorie, created_at
- RLS: gebruiker ziet alleen eigen bonnetjes
- Storage: bonnetje foto's per user_id

---

## Fases
1. ⬜ Skelet - Opzetten React Native Project 🟢 
2. ⬜ Toevoegen navigatie + header inclusief (Zie schermen uitleg) + dashboard page (leeg) en receipts page (leeg). 🟢 
3. Camera 

-- Nog te wijzigen:
3. ⬜ Skelet — lege schermen + navigatie werkend
4. ⬜ Auth — login / register
5. ⬜ Supabase setup — tabellen + RLS + storage
6. ⬜ Scan + Bewerk — foto uploaden + handmatig opslaan
7. ⬜ Overzicht + Detail — lijst en detail tonen
8. ⬜ OCR integratie — Claude Haiku 4.5

---

## Huidige taak
> Fase 1 — Skelet - Opzetten React Native Project
