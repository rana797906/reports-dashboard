// lib/accounts.js
export const AD_ACCOUNTS = [
  {
    id: 'house-of-books',
    name: 'House of Books',
    emoji: '📚',
    color: '#6c63ff',
    pubUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR7DNcTpu1UqouhsKbAoeH9DMPXCyHZYp5kQsvJRbl9Z-SB_9wm4Loc-zOZFIpTvH9C3r9rWuwqaPzX/pub?output=csv',
  },
  {
    id: 'murder-mystery',
    name: 'Murder Mystery',
    emoji: '🔍',
    color: '#e05c5c',
    pubUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSIskKsE-aTD4O1xSDJ_dNgCZGFzY8fFzrcN5ZCYLzI1VDUOkCXCzRBt2r5_CdTI4xSxDcs87EtGbWD/pub?output=csv',
  },
  {
    id: 'utopia-jewellery',
    name: 'Utopia Jewellery',
    emoji: '💎',
    color: '#22c9b0',
    pubUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQc5iF6hGeSVATAemDOdE9h_e6aSVEmnOk14eTT8-Ciu3Y0YMM370grXwEAf2sum6lDUyfTPIdUNxTj/pub?output=csv',
  },
  {
    id: 'cubiq',
    name: 'Cubiq',
    emoji: '🟦',
    color: '#f5a623',
    pubUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0uhcx680duDrAuFs2eZegkqQ4vwrIeYRRfmLtAAEZzSqnTLv28a9c-nQgYqUHXQ6ch2dcQrFn8PqJ/pub?output=csv',
  },
  {
    id: 'beauty-botanics',
    name: 'Beauty Botanics',
    emoji: '🌿',
    color: '#22c98a',
    pubUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTfeMLR8GYVAmcDl3hyg6ccWx1DRaDhsZmUMf3C2VYMB29sLgjLQ4U4zalk-RFpzd72-lVSEL51l0cu/pub?output=csv',
  },
]

export function getAccount(id) {
  return AD_ACCOUNTS.find(a => a.id === id) || AD_ACCOUNTS[0]
}
