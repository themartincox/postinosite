export type MegaItem = { label: string; path: string };
export type MegaColumn = { title: string; items: MegaItem[] };

type LinkItem = { type: 'link'; label: string; path: string };
type MegaItemDef = { type: 'mega'; label: 'Services'; id: 'services'; columns: MegaColumn[] };

export interface NavConfig {
  primary: [MegaItemDef, LinkItem, LinkItem, LinkItem, LinkItem]; // exactly 5
  cta: {
    primary: { label: string; path: string };
    secondary?: { label: string; path: string };
  };
}

const nav: NavConfig = {
  primary: [
    {
      type: 'mega',
      label: 'Services',
      id: 'services',
      columns: [
        {
          title: 'Growth Marketing',
          items: [
            { label: 'SEO Strategy & Implementation', path: '/services/growth-marketing/seo' },
            { label: 'Content Strategy & Creation', path: '/services/growth-marketing/content' },
            { label: 'Email Marketing Automation', path: '/services/growth-marketing/email-marketing-automation' },
            { label: 'Social Media Management', path: '/services/growth-marketing/social-media' },
            { label: 'Branding & Creative', path: '/services/growth-marketing/branding-creative' },
            { label: 'Conversion Rate Optimisation (CRO)', path: '/services/growth-marketing/cro' },
            { label: 'Strategy & Consulting', path: '/services/growth-marketing/strategy-consulting' }
          ]
        },
        {
          title: 'AI & Automation',
          items: [
            { label: 'Process Automation', path: '/services/ai-automation/process-automation' },
            { label: 'Intelligence & CRM', path: '/services/ai-automation/intelligence-crm' },
            { label: 'Predictive Analytics', path: '/services/ai-automation/intelligence-crm/predictive-analytics' },
            { label: 'Segmentation', path: '/services/ai-automation/intelligence-crm/segmentation' },
            { label: 'Personalised Outreach', path: '/services/ai-automation/intelligence-crm/personalised-outreach' },
            { label: 'Custom AI Solutions', path: '/services/ai-automation/custom-ai' },
            { label: 'Intelligent Chatbots', path: '/services/ai-automation/custom-ai/intelligent-chatbots' },
            { label: 'Automated Lead Routing', path: '/services/ai-automation/custom-ai/automated-lead-routing' },
            { label: 'Document Processing', path: '/services/ai-automation/custom-ai/document-processing' }
          ]
        }
      ]
    },
    { type: 'link', label: 'Industries', path: '/industries' },
    { type: 'link', label: 'Resources', path: '/resources' },
    { type: 'link', label: 'About', path: '/about' },
    { type: 'link', label: 'Case Studies', path: '/case-studies' } // ← intentionally last
  ],
  cta: {
    primary: { label: 'Get Strategy Session', path: '/contact' },
    secondary: { label: 'Automation Demo', path: '/contact' }
  }
};
export default nav;

