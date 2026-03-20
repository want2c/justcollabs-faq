import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/what-is-justcollabs',
        'getting-started/who-is-justcollabs-for',
        'getting-started/is-justcollabs-only-for-creators',
        'getting-started/how-to-sign-up',
        'getting-started/how-onboarding-works',
        'getting-started/is-it-free',
        'getting-started/how-to-setup-profile',
        'getting-started/can-new-creators-join',
        'getting-started/how-verification-works',
        'getting-started/what-content-can-i-upload',
        'getting-started/what-can-i-do-before-verification',
        'getting-started/how-dm-requests-work',
      ],
    },
    {
      type: 'category',
      label: 'Profiles & Discovery',
      items: [
        'profiles-discovery/how-to-make-profile-stand-out',
        'profiles-discovery/what-links-can-i-include',
        'profiles-discovery/bluesky-gallery',
        'profiles-discovery/can-i-showcase-nsfw',
        'profiles-discovery/how-location-discovery-works',
        'profiles-discovery/nearby-creators-discovery',
        'profiles-discovery/distance-badges-meaning',
        'profiles-discovery/profile-status-badges',
        'profiles-discovery/what-is-roles-page',
        'profiles-discovery/how-travel-plans-work',
        'profiles-discovery/can-i-hide-profile',
        'profiles-discovery/search-creators-niche',
        'profiles-discovery/how-collaborations-start',
        'profiles-discovery/how-connections-work',
        'profiles-discovery/how-to-start-chatting',
      ],
    },
    {
      type: 'category',
      label: 'DM Requests & Messaging',
      items: [
        'dm-requests/what-are-dm-requests',
        'dm-requests/sharing-dm-request-link',
      ],
    },
    {
      type: 'category',
      label: 'Safety & Privacy',
      items: [
        'safety-privacy/is-justcollabs-safe',
        'safety-privacy/how-data-protected',
        'safety-privacy/block-report-users',
        'safety-privacy/use-stage-name',
        'safety-privacy/who-can-see-profile',
        'safety-privacy/share-information-platforms',
        'safety-privacy/encounter-harassment',
        'safety-privacy/safety-tips-collaborators',
        'safety-privacy/delete-account',
      ],
    },
    {
      type: 'category',
      label: 'Technical Support',
      items: [
        'technical-support/confirmation-link',
        'technical-support/change-email',
        'technical-support/reset-password',
        'technical-support/mobile-access',
        'technical-support/install-as-app',
        'technical-support/how-to-contact-support',
        'technical-support/request-features',
        'technical-support/platform-rules',
        'technical-support/inappropriate-content',
        'technical-support/preferences-settings',
        'technical-support/notification-settings',
      ],
    },
  ],
};

export default sidebars;
