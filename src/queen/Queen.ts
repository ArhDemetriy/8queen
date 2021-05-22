class Queen{
  constructor() {
    this.table = Array(8).fill(-1) as Queen['table']
    this.horizontals = Array(8).fill(false) as Queen['horizontals']
    this.leftDiagonals = Array(15).fill(false) as Queen['leftDiagonals']
    this.rightDiagonals = Array(15).fill(false) as Queen['rightDiagonals']

    this.run()
  }

  getQueens() {
    return this.results
  }
  private run() {
    for (let i = 0; i < this.DSC; i++) {
      this.searchSpace(i)
    }
  }
  private readonly DSC = 8
  private table: [number, number, number, number, number, number, number, number]
  private horizontals: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]
  private leftDiagonals: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]
  private rightDiagonals: Queen['leftDiagonals']

  private searchSpace(i: number) {
    for (let j = 0; j < this.DSC; j++) {
      if (this.horizontals[j]
        || this.leftDiagonals[i + j]
        || this.rightDiagonals[i - j + this.DSC - 1]
        ) { continue }
        // save queen positions
        this.table[i] = j
        // save warning rows
        this.horizontals[j]
        = this.leftDiagonals[i + j]
        = this.rightDiagonals[i - j + this.DSC - 1]
        = true

      if (i >= this.DSC - 1) {
        this.save()
      } else {
        this.searchSpace(i + 1)
      }

      this.table[i] = -1

      this.horizontals[j]
      = this.leftDiagonals[i + j]
      = this.rightDiagonals[i - j + this.DSC - 1]
      = false
    }
  }

  private readonly results: Queen['table'][] = []
  private save() {
    const newResult = ([] as any).concat(this.table) as Queen['table']
    this.results.push(newResult)
  }
}
export default Queen
