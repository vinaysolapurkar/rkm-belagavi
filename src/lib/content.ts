// Editable site content lives in src/content/*.json (the Telegram bot edits only
// those files). "Deleting" an item sets "hidden": true so it can be restored.
export function visible<T extends object>(items: T[]): T[] {
  return items.filter((item) => !(item as { hidden?: boolean }).hidden);
}
