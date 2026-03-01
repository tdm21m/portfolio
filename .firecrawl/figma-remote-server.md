[Skip to main content](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#__docusaurus_skipToContent_fallback)

[**Developers**](https://developers.figma.com/)

Dev Mode

Code in Figma

Extensions

Integrations

[Compare APIs](https://developers.figma.com/compare-apis/)

[My Apps](https://www.figma.com/developers/apps)

Search`` `K`

- Figma MCP Server

  - [Introduction](https://developers.figma.com/docs/figma-mcp-server/)
  - [Installation & setup](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#)

    - [Remote server](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/)
    - [Desktop server (using desktop app)](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/)
  - [Core server features](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#)

    - [Tools and prompts](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/)
    - [Resources (Make → MCP)](https://developers.figma.com/docs/figma-mcp-server/bringing-make-context-to-your-agent/)
    - [Code Connect integration](https://developers.figma.com/docs/figma-mcp-server/code-connect-integration/)
  - [How to get the best output](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#)

    - [Structure your Figma file for better code](https://developers.figma.com/docs/figma-mcp-server/structure-figma-file/)
    - [Write effective prompts to guide the AI](https://developers.figma.com/docs/figma-mcp-server/write-effective-prompts/)
    - [Trigger specific tools when needed](https://developers.figma.com/docs/figma-mcp-server/trigger-specific-tools/)
    - [Add custom rules and instructions](https://developers.figma.com/docs/figma-mcp-server/add-custom-rules/)
    - [Avoid selecting large, heavy frames](https://developers.figma.com/docs/figma-mcp-server/avoid-large-frames/)
  - [Q&A](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#)

    - [The server keeps returning web/react code](https://developers.figma.com/docs/figma-mcp-server/server-returning-web-code/)
    - [What the MCP sends vs. what the agent does](https://developers.figma.com/docs/figma-mcp-server/mcp-vs-agent/)
    - [Tools aren't loading or connection lost](https://developers.figma.com/docs/figma-mcp-server/tools-not-loading/)
    - [It's stuck or too slow](https://developers.figma.com/docs/figma-mcp-server/stuck-or-slow/)
    - [Tried to fetch variables, but got code instead](https://developers.figma.com/docs/figma-mcp-server/variables-vs-code/)
    - [I'm getting a 500 error](https://developers.figma.com/docs/figma-mcp-server/getting-500-error/)
    - [Known issues with MCP clients](https://developers.figma.com/docs/figma-mcp-server/mcp-clients-issues/)
    - [Images have stopped loading](https://developers.figma.com/docs/figma-mcp-server/images-stopped-loading/)
    - [Plans, access, and permissions](https://developers.figma.com/docs/figma-mcp-server/plans-access-and-permissions/)

- [Home page](https://developers.figma.com/)
- Figma MCP Server
- Installation & setup
- Remote server

On this page

# Remote server

note

**Note:** You must use a code editor or application that supports MCP servers (i.e. VS Code, Cursor, Claude Code)

The MCP Server brings Figma directly into your workflow by providing important design information and context to AI agents generating code from Figma design files.

MCP Servers are part of a standardized interface for AI agents to interact with data sources using the [Model Context Protocol](https://modelcontextprotocol.io/).

Figma's remote MCP server makes it possible to connect directly to your Figma files without needing to install Figma's desktop app. With just a valid Figma link, you can bring design context into your workflow wherever you're working.

With the server enabled, you can:

- **Generate code from selected frames**: Select a Figma frame and turn it into code. Great for product teams building new flows or iterating on app features.
- **Extract design context**: Pull in variables, components, and layout data directly into your IDE. This is especially useful for design systems and component-based workflows.
- **Retrieve Make resources**: [Gather code resources from Make files](https://developers.figma.com/docs/figma-mcp-server/bringing-make-context-to-your-agent/) and provide them to the LLM as context. This can help as you move from prototype to production application.
- **Keep your design system components consistent with Code Connect**: Boost output quality by reusing your actual components. Code Connect keeps your generated code consistent with your codebase.

To use this server, you'll need to sign in through Figma's OAuth authentication flow. Once set up, the remote server gives you a seamless way to access Figma data and integrate it with your tools.

## Enabling the remote MCP server [​](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/\#enabling-the-remote-mcp-server "Direct link to Enabling the remote MCP server")

### VS Code [​](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/\#vs-code "Direct link to VS Code")

1. Use the shortcut ⌘ Shift P, and then:


   - Select **MCP: Open User Configuration** to use the Figma MCP server globally.
   - Select **MCP: Open Workspace Folder MCP Configuration** to use the Figma MCP server just inside your current workspace.

note

**Note:** If it doesn't exist already, you're prompted to create an `mcp.json` file.

2. In the `mcp.json` file, paste the following code:


```
{
      "inputs": [],
      "servers": {
        "figma": {
          "url": "https://mcp.figma.com/mcp",
          "type": "http"
        }
      }
    }
```

3. Click on Start (above the MCP server name).
![VS Code MCP start](https://developers.figma.com/assets/images/vscode-remote-mcp-json-8ec911dc2049f86332e9e9fc4c28270e.png)

4. **Allow Access**.

![VS Code MCP allow access](https://developers.figma.com/assets/images/vscode-remote-mcp-allow-access-dcb8e8a66c134c66452d047e6f6d95fe.png)

5. Start prompting!


### Cursor [​](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/\#cursor "Direct link to Cursor")

1. Click the [Figma MCP server deep link](cursor://anysphere.cursor-deeplink/mcp/install?name=Figma&config=eyJ1cmwiOiJodHRwczovL21jcC5maWdtYS5jb20vbWNwIn0%3D). This will open the MCP configuration in Cursor.
2. Click **Install** under 'Install MCP Server?'
![Cursor MCP configuration](https://developers.figma.com/assets/images/cursor-mcp-config-b4ae0da52e3434f342093ad56192b7e7.png)
3. Click **Connect** next to Figma to begin the authentication process.
4. Click **Open**.
![Cursor MCP open dialog](https://developers.figma.com/assets/images/cursor-mcp-open-43cde8cf5984e7d563c69c383fa525e7.png)
5. **Allow access**![Cursor allow access dialog](https://developers.figma.com/assets/images/cursor-allow-access-f6386dba3a7e7a2ef1508d9948f624e3.png)
6. Start prompting!

### Claude Code [​](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/\#claude-code "Direct link to Claude Code")

1. Run the following command in your terminal to add the Figma MCP to Claude Code: `claude mcp add --transport http figma https://mcp.figma.com/mcp`
2. Type `/mcp` in Claude to manage your MCP Servers and select **figma**.
![Claude remote MCP manage](https://developers.figma.com/assets/images/claude-remote-mcp-manage-9159bd35956998870502ea6e580190ff.png)
3. Select **Authenticate**.
![Select authenticate in Claude](https://developers.figma.com/assets/images/claude-remote-mcp-select-authenticate-683c3f070213a992c78012127c4dec96.png)
4. Click **Allow Access**.
![Claude remote MCP login](https://developers.figma.com/assets/images/claude-remote-mcp-login-78b7506e239e20e9160e8cc35df53a13.png)
5. Back in Claude code, you should see: `Authentication successful. Connected to figma`
6. Confirm your MCP Server is connected using `/mcp` command in Claude Code.
![Claude remote MCP confirm](https://developers.figma.com/assets/images/claude-remote-mcp-confirm-79e4962fbbc8212cb08cd32323fcf0e7.png)
7. Start prompting!

## Using the MCP server [​](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/\#using-the-mcp-server "Direct link to Using the MCP server")

The MCP server introduces a set of tools that help LLMs translate designs in Figma. Once connected, you can prompt your MCP client to access a specific design node.

The remote server is link-based. To use it:

1. Copy the link to a frame or layer in Figma

2. Prompt your client to help you implement the design at the selected URL

![MCP client with link-based prompt](https://developers.figma.com/assets/images/mcp-client-link-prompt-9d423d7411aa6f368abb1e71ad9fd93c.png)


note

**Note:** Your client won't be able to navigate to the selected URL, but it will extract the node-id that is required for the MCP server to identify which object to return information about.

## Improving the MCP server output [​](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/\#improving-the-mcp-server-output "Direct link to Improving the MCP server output")

For the best output, we recommend setting up rules to guide the agent. To get you started, we have some [helpful example rules](https://developers.figma.com/docs/figma-mcp-server/add-custom-rules/#rules-to-ensure-consistently-good-output).

[Previous\\
\\
Introduction](https://developers.figma.com/docs/figma-mcp-server/) [Next\\
\\
Desktop server (using desktop app)](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/)

- [Enabling the remote MCP server](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#enabling-the-remote-mcp-server)
  - [VS Code](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#vs-code)
  - [Cursor](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#cursor)
  - [Claude Code](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#claude-code)
- [Using the MCP server](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#using-the-mcp-server)
- [Improving the MCP server output](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#improving-the-mcp-server-output)

Was this page helpful?

[Leave us feedback](https://form.asana.com/?k=6r2Tos6p01DyVKGLeYJByg&d=10497086658021)

* * *

- [Community Forum](https://forum.figma.com/)
- [Discord Server](https://discord.gg/xzQhe2Vcvx)
- [GitHub Samples](https://github.com/figma/widget-samples)

[FigJam](https://www.figma.com/figjam/)· [Enterprise](https://www.figma.com/enterprise/)· [Learn](https://help.figma.com/)· [Education](https://www.figma.com/education/)· [Careers](https://www.figma.com/careers/)· [Pricing](https://www.figma.com/pricing/)· [Developers](https://www.figma.com/developers)· [Blog](https://www.figma.com/blog/)· [Downloads](https://www.figma.com/downloads/)· [Releases](https://www.figma.com/release-notes/)· [Security](https://www.figma.com/security/)· [Legal](https://www.figma.com/legal)· [Contact](https://www.figma.com/contact/)