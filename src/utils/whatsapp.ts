import { businessConfig } from "../config/business";

/**
 * Helper to build proper wa.me link with encoded text
 */
function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${businessConfig.whatsappInternational}?text=${encoded}`;
}

/**
 * Generates WhatsApp URL for ordering a specific product
 */
export function getProductOrderUrl(productName: string, price?: number | string): string {
  const priceInfo = price ? ` (₹${price})` : "";
  const message = `Hi SS Home Bakes, I would like to order the ${productName}${priceInfo}. Please share the availability and ordering details.`;
  return createWhatsAppUrl(message);
}

/**
 * Generates WhatsApp URL for custom cake or event orders
 */
export interface CustomOrderData {
  occasion?: string;
  cakeType?: string;
  flavour?: string;
  approxSize?: string;
  requiredDate?: string;
  notes?: string;
}

export function getCustomOrderUrl(data?: CustomOrderData): string {
  if (!data || (!data.occasion && !data.requiredDate && !data.flavour)) {
    const defaultMsg = `Hi SS Home Bakes, I would like to enquire about a custom cake/order. My occasion is [Occasion] and I need it on [Date]. Please let me know what options are available!`;
    return createWhatsAppUrl(defaultMsg);
  }

  let message = `Hi SS Home Bakes! I would like to request a custom order:\n\n`;
  if (data.occasion) message += `• Occasion: ${data.occasion}\n`;
  if (data.cakeType) message += `• Cake / Treat Type: ${data.cakeType}\n`;
  if (data.flavour) message += `• Preferred Flavour: ${data.flavour}\n`;
  if (data.approxSize) message += `• Approximate Size / Quantity: ${data.approxSize}\n`;
  if (data.requiredDate) message += `• Required Date: ${data.requiredDate}\n`;
  if (data.notes) message += `• Design / Ideas: ${data.notes}\n`;
  message += `\nPlease share availability and estimated quotation. Thank you!`;

  return createWhatsAppUrl(message);
}

/**
 * Generates WhatsApp URL for general enquiries
 */
export function getGeneralEnquiryUrl(): string {
  const message = `Hi SS Home Bakes, I found your website and would like to know more about your products and availability.`;
  return createWhatsAppUrl(message);
}

/**
 * Helper to trigger WhatsApp in a new window cleanly
 */
export function openWhatsApp(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}
