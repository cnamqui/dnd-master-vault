const processFrontmatter = async (path = '', cb) => {
  const tfile = app.vault.getFileByPath(path)
  if (!tfile) throw 'not found'
  await app.fileManager.processFrontMatter(tfile, cb)
  return
}

return {
  processFrontmatter,
}
