---
sidebar_label: "What do the status badges on profiles mean?"
title: "What do the status badges on profiles mean?"
description: "Understand what the different colored status badges on creator profile cards represent and how they help with collaboration planning."
---

export const PlaneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>;

export const Badge = ({color, children}) => <span style={{display: 'inline-flex', alignItems: 'center', gap: '5px', background: color, color: 'white', fontSize: '14px', fontWeight: 600, borderRadius: '9999px', padding: '4px 12px', lineHeight: 1.2}}><PlaneIcon />{children}</span>;

# What do the status badges on profiles mean?

The **status badges** are small colored indicators with an airplane icon that appear in the **top-right corner** of creator profile cards. They show a creator's current location status relative to the city you're browsing.

## Badge Types

<Badge color="#22c55e">Here now</Badge> — Creator is currently visiting this city

<Badge color="#3b82f6">Soon</Badge> — Creator will be visiting this city soon

<Badge color="#eab308">Partial</Badge> — Creator has partial availability in this city on your dates

<Badge color="#eab308">Away</Badge> — Creator is currently traveling somewhere else

<Badge color="#ef4444">Away</Badge> — Creator is fully away traveling, limited availability

**No badge** means the creator is at their home base in this city — available for collaboration as usual.
