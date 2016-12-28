/* eslint-disable */

function s2ab(s) {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)
  for (let i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF

  return buf
}

function Workbook() {
  if(!(this instanceof Workbook)) {
    return new Workbook()
  }

  this.SheetNames = []
  this.Sheets = {}
}

export const exportToXlsx = async (data, fields, name) => {
  const [XLSX, FileSaver] = await Promise.all([System.import('xlsx'), System.import('file-saver')])

  const ws = {}
  const range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } }

  data.forEach((item, r) => {
    fields.forEach((field, c) => {
      if(range.s.r > r) range.s.r = r
      if(range.s.c > c) range.s.c = c
      if(range.e.r < r) range.e.r = r
      if(range.e.c < c) range.e.c = c

      const cellRef = XLSX.utils.encode_cell({ c, r })

      ws[cellRef] = { v: item[field], t: 's' }
    })
  })

  ws['!ref'] = XLSX.utils.encode_range(range)

  const workbook = new Workbook()

  workbook.SheetNames.push(name)
  workbook.Sheets[name] = ws

  const wb = XLSX.write(workbook, { bookType:'xlsx', bookSST: false, type: 'binary' })
    
  FileSaver.saveAs(new Blob([s2ab(wb)],{ type: 'application/octet-stream' }), `${name}.xlsx`)
}
