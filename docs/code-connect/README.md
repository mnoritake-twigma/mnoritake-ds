# Code Connect coverage

Target: `KvZojcUkOfHSSBIixVHjbg` (original PULSE / mnoritake DS). Inspection date: 2026-11-03.

## Connected scope

The official SDS source has 96 component/composition templates. Every one has a matching published PULSE component. The additional PULSE **Icon Button Danger** maps to the existing React `DestructiveIconButton`, bringing this to 97. Icon templates cover 287 names × 16/20/24/32/40/48 px = 1,722 nodes.

Mappings were established from the current Figma component inventory and properties, not by substituting the Figma file key alone. Individual published-component discovery and property retrieval succeeded for all 97 UI templates. The icon inventory and six size groups were read from Figma.

## Corrections to inherited templates

- All mapped top-level enum values are explicit, including default/hover/disabled states and sizes.
- ButtonDanger has its own unique template ID and correct source component name.
- Icon swaps execute nested templates only for actual instances.
- Boolean visibility and explicit slots are mapped where the React API supports them.
- Search uses Figma's `Filled` value; pagination does not request a nonexistent `Href` property.
- Selection in Radio/Tab/TagToggle is exported as metadata and applied by the parent group.
- Card Grid Pricing now uses the actual nested cards instead of a hardcoded data-provider example.
- Source URLs point to this repository; composed layouts identify their actual `Section` implementation.

## Limits, not a claim of full design parity

[Unmapped components](unmapped-components.json) lists **20** Figma assets with no corresponding upstream template/implementation selected for this change: AI chat, calendar/date inputs, generic slot variants, and editor annotation utilities. No unrelated React component is substituted for them.

[property-limitations.json](property-limitations.json) accounts for properties without a direct public React equivalent:

- Header authentication and menu state belong to runtime state/providers.
- Responsive Header/Footer behavior comes from media queries.
- Footer's custom title/content slots and ProductInfoCard's arbitrary body slot cannot be reproduced by their fixed upstream APIs.
- Avatar overflow text is calculated from actual child count, not an arbitrary Figma number.
- Navigation link visibility is delegated to Figma's resolved slot/child content.
- Hover states belong to runtime CSS/React Aria behavior.

Images, application routes, event handlers, authentication and actual backend behavior require application-specific implementation. Upstream image placeholders and illustrative event handlers are retained where no code-ready resource exists. Figma image pixels are not exported by this task.

PULSE's color/type variables are not synchronized to `src/theme.css` by Code Connect. The imported code still uses the official SDS theme. A connection should not be interpreted as pixel-identical styling.

## Validation boundaries

- React/TypeScript production build.
- Storybook production build.
- Official Code Connect CLI parsing of every template/batch entry.
- 248 top-level Figma property checks and 100 exhaustive enum mappings.
- Source file existence, target file key, unique node IDs, six icon sizes, explicit property exceptions.

The official CLI also previews all 97 UI templates against Figma data (one representative instance per template). This does not cover every variant or pixel-level fidelity. Published records are checked through MCP; interactive behavior requires separate product testing.

Some inherited SLOT definitions resolve to unrelated nested controls or unresolved placeholders. List slots use resolved nested instances with a named-child fallback. Card/Notification/Dialog text regions deliberately use their verified text properties and named controls; arbitrary replacement content in those slots is not supported (see the property limitations).

## Publication result

All **1,819 records** were published successfully with the official CLI. MCP readback confirms actual dynamic templates (`hasTemplate: true`), including Button and the 32 px Info icon. [publication.json](publication.json) records the result.

[preview-results.json](preview-results.json) contains the final 97 representative Figma previews. All succeeded, with no unresolved-slot or missing-Code-Connect markers. These emitted snippets also type-check against the imported React implementation. CI rechecks these recorded snippets; it does not call Figma or require a token.
