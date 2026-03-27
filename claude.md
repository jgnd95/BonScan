# BonScan — AI Regels

## Project
Receipt scanner app. Gebruikers scannen bonnetjes, 
data wordt geëxtraheerd en opgeslagen.

## Tech Stack
- React Native (latest stable)
- Supabase (auth + database + storage + RLS)
- Claude API / Haiku 4.5 (OCR — laatste fase)

## Regels
- Doe ALLEEN wat gevraagd wordt
- Raak geen andere files aan dan gevraagd
- Vraag eerst bij twijfel, bouw niet op aannames
- Geen extra features toevoegen die niet in spec.md staan
- Houd components klein en leesbaar
- Geen over-engineering

## Supabase
- RLS is verplicht op alle tabellen
- Nooit de service key in de app
- API calls altijd via Edge Functions

## OCR
- Nog niet bouwen — komt in de laatste fase
- Placeholder UI mag, geen logica