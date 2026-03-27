# BonScan

## Status
🔴 Niet begonnen | 🟡 In progress | 🟢 Klaar

---

## Schermen & Flow

### 1. Header
- Links boven logo (Bonentje met oranje background fill)

### 2. Navigation
- Navigatie bestaat uit 3 knoppen
    - Dashboard
    - "+"
    - Bonnetjes

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
1. ⬜ Skelet — lege schermen + navigatie werkend
2. ⬜ Auth — login / register
3. ⬜ Supabase setup — tabellen + RLS + storage
4. ⬜ Scan + Bewerk — foto uploaden + handmatig opslaan
5. ⬜ Overzicht + Detail — lijst en detail tonen
6. ⬜ OCR integratie — Claude Haiku 4.5

---

## Huidige taak
> Fase 1 — Skelet aanmaken, lege schermen + navigatie
