[Skip to main content](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#__docusaurus_skipToContent_fallback)

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
  - [Installation & setup](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#)

    - [Remote server](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/)
    - [Desktop server (using desktop app)](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/)
  - [Core server features](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#)

    - [Tools and prompts](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/)
    - [Resources (Make → MCP)](https://developers.figma.com/docs/figma-mcp-server/bringing-make-context-to-your-agent/)
    - [Code Connect integration](https://developers.figma.com/docs/figma-mcp-server/code-connect-integration/)
  - [How to get the best output](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#)

    - [Structure your Figma file for better code](https://developers.figma.com/docs/figma-mcp-server/structure-figma-file/)
    - [Write effective prompts to guide the AI](https://developers.figma.com/docs/figma-mcp-server/write-effective-prompts/)
    - [Trigger specific tools when needed](https://developers.figma.com/docs/figma-mcp-server/trigger-specific-tools/)
    - [Add custom rules and instructions](https://developers.figma.com/docs/figma-mcp-server/add-custom-rules/)
    - [Avoid selecting large, heavy frames](https://developers.figma.com/docs/figma-mcp-server/avoid-large-frames/)
  - [Q&A](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#)

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
- Core server features
- Tools and prompts

On this page

# Tools and prompts

The Figma MCP server provides the following tools:

- [`get_design_context`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_design_context): Get the design context for a layer or selection
- [`get_variable_defs`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_variable_defs): Returns the variables and styles used in your Figma selection
- [`get_code_connect_map`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_code_connect_map): Retrieves a mapping between Figma node IDs and their corresponding code components in your codebase
- [`add_code_connect_map`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#add_code_connect_map): Adds a mapping between a Figma node ID and its corresponding code component in your codebase
- [`get_screenshot`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_screenshot): Allows the agent to take a screenshot of your selection
- [`create_design_system_rules`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#create_design_system_rules): Creates a rule file that provide agents with the right context to translate designs into frontend code
- [`get_metadata`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_metadata): Returns a sparse XML representation of your selection that contains basic properties such as layer IDs, names, types, position and sizes
- [`get_figjam`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_figjam): Converts FigJam diagrams (such as app architecture workflows) to XML
- [`generate_diagram`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#generate_diagram): Generates a FigJam diagram from Mermaid syntax
- [`whoami`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#whoami-remote-only) (remote only): Returns the identity of the user that's authenticated to Figma
- [`get_code_connect_suggestions`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_code_connect_suggestions): A Figma-prompted tool call to find suggestions for mapping Figma node IDs to their corresponding code components in your codebase using Code Connect
- [`send_code_connect_mappings`](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#send_code_connect_mappings): A Figma-prompted tool used after calling `get_code_connect_suggestions` to confirm the suggested Code Connect mappings

## get\_design\_context [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#get_design_context "Direct link to get_design_context")

**Supported file types:** Figma Design, Figma Make

Use the MCP server to get the [design context](https://developers.figma.com/docs/figma-mcp-server/server-returning-web-code/#about-the-get_design_context-tool) for a layer or your selection in Figma. By default, the output is **React + Tailwind**, but you can customize it through your prompt.

**Suggested prompts:**

- **Change the framework**
  - `generate my Figma selection in Vue`
  - `generate my Figma selection in plain HTML + CSS`
  - `generate my Figma selection in iOS`
- **Use your components**
  - `generate my Figma selection using components from src/components/ui`
  - \*Tip: set up Code Connect for best code reuse results. Code Connect lets you set up multiple connections per Figma Library. You can map, for example, both your React and SwiftUI code to your Figma components. The Desktop MCP server will use the Code Connect mapping you have selected in Dev Mode. To control which Code Connect mappings are sent via the Remote MCP Server, instruct your agent to set the `clientFrameworks` tool call paramater to the exact Code Connect label you have set up for your mappings, e.g.. `React`, `SwiftUI`.
- **Combine both**
  - `generate my Figma selection using components from src/ui and style with Tailwind`

note

**Note:** Selection-based prompting only works with the desktop MCP server. The remote server requires a link to a frame or layer to extract context.

## get\_variable\_defs [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#get_variable_defs "Direct link to get_variable_defs")

**Supported file types:** Figma Design

Returns the variables and styles used in your Figma selection (such as colors, spacing, typography).

**You can ask it to:**

- **List all tokens used**
  - `get the variables used in my Figma selection`
- **Focus on a specific type**
  - `what color and spacing variables are used in my Figma selection?`
- **Get both names and values**
  - `list the variable names and their values used in my Figma selection`

## get\_code\_connect\_map [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#get_code_connect_map "Direct link to get_code_connect_map")

**Supported file types:** Figma Design

Retrieves a mapping between Figma node IDs and their corresponding code components in your codebase. Specifically, it returns an object where each key is a Figma node ID, and the value contains:

- `codeConnectSrc`: The location of the component in your codebase (e.g., a file path or URL).
- `codeConnectName`: The name of the component in your codebase.

This mapping is used to connect Figma design elements directly to their React (or other framework) implementations, enabling seamless design-to-code workflows and ensuring that the correct components are used for each part of the design. If a Figma node is connected to a code component, this function helps you identify and use the exact component in your project.

## add\_code\_connect\_map [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#add_code_connect_map "Direct link to add_code_connect_map")

**Supported file types:** Figma Design

Adds a mapping between a Figma node ID and its corresponding code component in your codebase. Setting up these mappings will improve the output quality of design-to-code worksflows and help you identify and use the exact component in your project.

## get\_screenshot [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#get_screenshot "Direct link to get_screenshot")

**Supported file types:** Figma Design, FigJam

Allows the agent to take a screenshot of your selection. This helps preserve layout fidelity in the generated code. Recommended to keep on (only turn off if you're concerned about token limits).

## create\_design\_system\_rules [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#create_design_system_rules "Direct link to create_design_system_rules")

**Supported file types:** No file context required

A tool for creating a rule file that provide agents with the right context to translate designs into high-quality, codebase-aware frontend code. It helps ensure alignment with your design system and tech stack, improving the relevance and accuracy of generated output.

Run this tool and make sure the result is saved to the correct `rules/` or `instructions/` path so your agent can access it during code generation.

## get\_metadata [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#get_metadata "Direct link to get_metadata")

**Supported file types:** Figma Design

Returns a sparse XML representation of your selection containing just basic properties such as the layer IDs, names, types, position and sizes. This is an outline that your Agent can then break down and call `get_design_context` on to retrieve only the styling information of the design it needs. Useful for very large designs where `get_design_context` produces output with a large context size. It also works with multiple selections or the whole page if you don't select anything.

## get\_figjam [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#get_figjam "Direct link to get_figjam")

**Supported file types:** FigJam

This tool returns metadata for FigJam diagrams in XML format, similar to `get_metadata`. In addition to returning basic properties like layer IDs, names, types, positions, and sizes, it also includes screenshots of the nodes.

## generate\_diagram [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#generate_diagram "Direct link to generate_diagram")

**Supported file types:** No file context required

Generates a FigJam diagram from Mermaid syntax. This tool accepts Mermaid diagram definitions and converts them into interactive FigJam diagrams that can be edited and shared.

You do not have to provide Mermaid syntax yourself. Instead, you can prompt the agent to create diagrams by describing the desired diagram in natural language. The agent will then generate the appropriate Mermaid syntax and use the generate\_diagram tool to create the FigJam diagram.

To ensure that the agent uses the Figma MCP `generate_diagram` tool, you can include the directive "Use the Figma MCP generate\_diagram tool" in your prompt. However, the agent will likely use the tool automatically when it determines that a diagram is needed based on your request.

**Supported diagram types:**

- Flowchart
- Gantt chart
- State diagram
- Sequence diagram

**Suggested prompts:**

- **Generate a diagram from a description**
  - `create a flowchart for the user authentication flow using the Figma MCP generate_diagram tool`
  - `generate a gantt chart for the project timeline using the Figma MCP generate_diagram tool`
  - `generate a sequence diagram for the payment processing system using the Figma MCP generate_diagram tool`
- **Convert existing Mermaid syntax**
  - `create a diagram from this mermaid syntax: ...`

## whoami (remote only) [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#whoami-remote-only "Direct link to whoami (remote only)")

**Supported file types:** No file context required

This tool returns the identity of the user that's authenticated to Figma, including:

- The user's email address
- All of the plans the user belongs to
- The seat type the user has on each plan

## get\_code\_connect\_suggestions [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#get_code_connect_suggestions "Direct link to get_code_connect_suggestions")

**Supported file types:** Figma Design

A tool call prompted by Figma to detect and suggest mappings of Figma components to code components in your codebase using Code Connect.

## send\_code\_connect\_mappings [​](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/\#send_code_connect_mappings "Direct link to send_code_connect_mappings")

**Supported file types:** Figma Design

A tool call prompted by Figma to confirm the Code Connect mappings after calling `get_code_connect_suggestions`.

[Previous\\
\\
Desktop server (using desktop app)](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/) [Next\\
\\
Resources (Make → MCP)](https://developers.figma.com/docs/figma-mcp-server/bringing-make-context-to-your-agent/)

- [get\_design\_context](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_design_context)
- [get\_variable\_defs](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_variable_defs)
- [get\_code\_connect\_map](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_code_connect_map)
- [add\_code\_connect\_map](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#add_code_connect_map)
- [get\_screenshot](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_screenshot)
- [create\_design\_system\_rules](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#create_design_system_rules)
- [get\_metadata](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_metadata)
- [get\_figjam](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_figjam)
- [generate\_diagram](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#generate_diagram)
- [whoami (remote only)](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#whoami-remote-only)
- [get\_code\_connect\_suggestions](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#get_code_connect_suggestions)
- [send\_code\_connect\_mappings](https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/#send_code_connect_mappings)

Was this page helpful?

[Leave us feedback](https://form.asana.com/?k=6r2Tos6p01DyVKGLeYJByg&d=10497086658021)

* * *

- [Community Forum](https://forum.figma.com/)
- [Discord Server](https://discord.gg/xzQhe2Vcvx)
- [GitHub Samples](https://github.com/figma/widget-samples)

[FigJam](https://www.figma.com/figjam/)· [Enterprise](https://www.figma.com/enterprise/)· [Learn](https://help.figma.com/)· [Education](https://www.figma.com/education/)· [Careers](https://www.figma.com/careers/)· [Pricing](https://www.figma.com/pricing/)· [Developers](https://www.figma.com/developers)· [Blog](https://www.figma.com/blog/)· [Downloads](https://www.figma.com/downloads/)· [Releases](https://www.figma.com/release-notes/)· [Security](https://www.figma.com/security/)· [Legal](https://www.figma.com/legal)· [Contact](https://www.figma.com/contact/)