# Datacore UI components

This small component library provides form controls that persist to Obsidian frontmatter by calling `processFrontmatter(fileName, cb)` from `utils/frontmatter`.

Available components

- `InputText` — text input that saves on blur.
- `NumberInput` — numeric input that saves on blur.
- `Dropdown` — single-select dropdown that saves on change.
- `MultiSelect` — multi-select list that saves on change (array of values).
- `ActionButton` — button that saves on click. Accepts a static `value` or a `valueGenerator` function `(current, fm) => newValue`.
- `TableForm` — editable table of rows (array of objects). Cells save on blur; Add/Delete save on click.

Basic props

- `fileName` (string) — path to the file whose frontmatter will be updated.
- `fieldName` (string) — the frontmatter key to set.
- `initialValue` — optional initial value for inputs.
- `options` — for Dropdown/MultiSelect, an array of strings or `{value,label}` objects.

Saving behavior

Each component uses `utils/frontmatter.processFrontmatter(fileName, cb)` and mutates `fm[fieldName] = <new value>` inside the callback.

Notes

- These components assume the Obsidian environment provides `app.processFrontmatter` as used by `utils/frontmatter`.
- Example usage is in `ExampleUsage.jsx`.
