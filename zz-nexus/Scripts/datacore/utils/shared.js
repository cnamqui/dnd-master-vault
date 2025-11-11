const slugify = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')

// preload frontmatter util promise
const fmPromise = await dc.require('zz-nexus/Scripts/datacore/utils/frontmatter.js')

async function getFrontmatter() {
  return await fmPromise
}

async function saveToFrontmatter(fileName, fieldName, value) {
  if (!fileName || !fieldName) return
  const fm = await getFrontmatter()
  // fm.processFrontmatter expects (path, cb)
  await fm.processFrontmatter(fileName, (frontmatter) => {
    frontmatter[fieldName] = value
  })
}

async function loadField(fileName, fieldName) {
  if (!fileName || !fieldName) return undefined
  const fm = await getFrontmatter()
  let result = undefined
  await fm.processFrontmatter(fileName, (frontmatter) => {
    result = frontmatter[fieldName]
  })
  return result
}

const getActiveFile = app.workspace.getActiveFile
const getFileByPath = app.vault.getFileByPath

const languages = [
    'Common',
    'Common Sign Language',
    'Draconic',
    'Dwarvish',
    'Elvish',
    'Giant',
    'Gnomish',
    'Goblin',
    'Halfling',
    'Orc',
    'Abyssal',
    'Celestial',
    'Deep Speech',
    'Druidic',
    'Infernal',
    'Primordial - Auran',
    'Primordial - Aqua',
    'Primordial - Ignan',
    'Primordial - Terran',
    'Sylvan',
    'Thieves Cant',
    'Undercommon'
]


return {
  slugify,
  getFrontmatter,
  saveToFrontmatter,
  loadField,
  getActiveFile,
  getFileByPath,
  languages,
}
