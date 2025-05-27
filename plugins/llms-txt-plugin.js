const fs = require('fs');
const path = require('path');

module.exports = function llmsTxtPlugin(context, options) {
  return {
    name: 'llms-txt-plugin',
    async postBuild({siteDir, routesPaths, outDir}) {
      // Generate llms.txt content
      const baseUrl = context.siteConfig.url + context.siteConfig.baseUrl.replace(/\/$/, '');
      const siteName = context.siteConfig.title;
      const tagline = context.siteConfig.tagline;
      
      // Filter only FAQ pages (exclude search, homepage, etc.)
      // Since we're using routeBasePath: '/', the routes don't have /docs/ prefix
      const faqPages = routesPaths.filter(route => 
        route.includes('getting-started/') ||
        route.includes('profiles-discovery/') ||
        route.includes('safety-privacy/') ||
        route.includes('technical-support/')
      ).filter(route => 
        // Exclude non-content pages
        !route.includes('/search') && 
        !route.includes('/markdown-page') &&
        route !== '/'
      );

      const llmsTxtContent = `# ${siteName} - FAQ Documentation

> ${tagline}

This is the FAQ documentation for JustCollabs, a platform for adult content creators to find collaboration opportunities.

## About JustCollabs

JustCollabs is a professional networking platform designed specifically for adult content creators. Our platform helps creators connect, collaborate, and grow their businesses safely and professionally.

## FAQ Sections

### Getting Started
Learn the basics about JustCollabs, how to sign up, verification process, and setting up your profile.

### Profiles & Discovery  
Understand how to create an effective profile, use location-based discovery, manage privacy settings, and start collaborations.

### Safety & Privacy
Important information about safety measures, data protection, privacy controls, and best practices for meeting collaborators.

### Technical Support
Get help with account issues, platform features, troubleshooting, and contacting support.

## All FAQ Pages

${faqPages.map(route => `- ${context.siteConfig.url}${route}`).join('\n')}

## Contact

For additional questions not covered in this FAQ, contact our support team at admin@justcollabs.com

---

Last updated: ${new Date().toISOString().split('T')[0]}
Generated automatically from our FAQ documentation.
`;

      // Write llms.txt to the output directory
      const llmsTxtPath = path.join(outDir, 'llms.txt');
      fs.writeFileSync(llmsTxtPath, llmsTxtContent, 'utf8');
      
      console.log(`✅ Generated llms.txt with ${faqPages.length} FAQ pages`);
      console.log(`   Available routes: ${routesPaths.slice(0, 5).join(', ')}...`);
    },
  };
}; 