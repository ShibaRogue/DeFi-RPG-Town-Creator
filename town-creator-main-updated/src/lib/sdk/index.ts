// NOTE: This is an example class so that the import works when we copy/paste into the "interface" project
// nothing needs to change. If the class is updated in Interface this class might need to change.
export class Token {
  chainId: number;
  address: string;
  decimals: number;
  symbol: string;
  name: string;

  constructor(chainId: number, address: string, decimals: number, symbol: string, name: string) {
    this.chainId = chainId;
    this.address = address;
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }
}
