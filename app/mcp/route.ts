import { baseURL } from "@/baseUrl";
import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const getAppsSdkCompatibleHtml = async (baseUrl: string, path: string) => {
  const result = await fetch(`${baseUrl}${path}`);
  return await result.text();
};

type ContentWidget = {
  id: string;
  title: string;
  templateUri: string;
  invoking: string;
  invoked: string;
  html: string;
  description: string;
  widgetDomain: string;
};

function widgetMeta(widget: ContentWidget) {
  return {
    "openai/outputTemplate": widget.templateUri,
    "openai/toolInvocation/invoking": widget.invoking,
    "openai/toolInvocation/invoked": widget.invoked,
    "openai/widgetAccessible": false,
    "openai/resultCanProduceWidget": true,
  } as const;
}

const handler = createMcpHandler(async (server) => {
  const html = await getAppsSdkCompatibleHtml(baseURL, "/");

  // Widget for get_quote tool
  const quoteWidget: ContentWidget = {
    id: "get_quote",
    title: "Get Quote",
    templateUri: "ui://widget/quote-template.html",
    invoking: "Preparing quote...",
    invoked: "Quote ready",
    html: html,
    description: "Get a service quote from TVG Automation",
    widgetDomain: "https://tvgautomation.com",
  };

  // Widget for show_phone_number tool
  const phoneWidget: ContentWidget = {
    id: "show_phone_number",
    title: "Show Phone Number",
    templateUri: "ui://widget/phone-template.html",
    invoking: "Loading contact info...",
    invoked: "Contact info loaded",
    html: html,
    description: "Display TVG Automation phone number and contact options",
    widgetDomain: "https://tvgautomation.com",
  };

  // Register resources for both widgets
  server.registerResource(
    "quote-widget",
    quoteWidget.templateUri,
    {
      title: quoteWidget.title,
      description: quoteWidget.description,
      mimeType: "text/html+skybridge",
      _meta: {
        "openai/widgetDescription": quoteWidget.description,
        "openai/widgetPrefersBorder": true,
      },
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/html+skybridge",
          text: `<html>${quoteWidget.html}</html>`,
          _meta: {
            "openai/widgetDescription": quoteWidget.description,
            "openai/widgetPrefersBorder": true,
            "openai/widgetDomain": quoteWidget.widgetDomain,
          },
        },
      ],
    })
  );

  server.registerResource(
    "phone-widget",
    phoneWidget.templateUri,
    {
      title: phoneWidget.title,
      description: phoneWidget.description,
      mimeType: "text/html+skybridge",
      _meta: {
        "openai/widgetDescription": phoneWidget.description,
        "openai/widgetPrefersBorder": true,
      },
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/html+skybridge",
          text: `<html>${phoneWidget.html}</html>`,
          _meta: {
            "openai/widgetDescription": phoneWidget.description,
            "openai/widgetPrefersBorder": true,
            "openai/widgetDomain": phoneWidget.widgetDomain,
          },
        },
      ],
    })
  );

  // Register get_quote tool
  server.registerTool(
    quoteWidget.id,
    {
      title: quoteWidget.title,
      description:
        "Get a service quote from TVG Automation. Use this when users ask about pricing, costs, or want to request a quote.",
      inputSchema: {
        customerName: z.string().optional().describe("Name of the customer requesting the quote"),
      },
      _meta: widgetMeta(quoteWidget),
    },
    async ({ customerName }) => {
      return {
        content: [
          {
            type: "text",
            text: `Quote request${customerName ? ` for ${customerName}` : ''}`,
          },
        ],
        structuredContent: {
          toolType: "get_quote",
          customerName: customerName,
          timestamp: new Date().toISOString(),
        },
        _meta: widgetMeta(quoteWidget),
      };
    }
  );

  // Register show_phone_number tool
  server.registerTool(
    phoneWidget.id,
    {
      title: phoneWidget.title,
      description:
        "Display TVG Automation's phone number and contact information. Use this when users want to call or need contact details.",
      inputSchema: {},
      _meta: widgetMeta(phoneWidget),
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: `TVG Automation contact information`,
          },
        ],
        structuredContent: {
          toolType: "show_phone_number",
          timestamp: new Date().toISOString(),
        },
        _meta: widgetMeta(phoneWidget),
      };
    }
  );
});

export const GET = handler;
export const POST = handler;
