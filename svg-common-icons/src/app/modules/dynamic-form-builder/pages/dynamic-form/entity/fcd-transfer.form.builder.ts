
export class TransferFCD {
    transferType: TransferType  ;
    note: string;
    sender: Account;
    transferDetails: TransferDetails;
   constructor(transferType: TransferType,  note: string, sender: Account, transferDetails: TransferDetails) {
     this.transferType = transferType;
     this.note  = note;
     this.sender =  sender;
     this.transferDetails = transferDetails;
   }
}
export class TransferDetails {
   accountCurrency: string;
   transferAmount: number;
   fxDetails: FxDetails[]
  constructor(  
     accountCurrency: string,
     transferAmount: number,
     fxDetails: FxDetails[]) {
      this.accountCurrency = accountCurrency;
      this.transferAmount = transferAmount ;
      this.fxDetails = fxDetails;
  }
}
export class FxDetails {
  fxReferenceNo: string;
  fxRate: number;
  amountToUtilize: number;
  constructor( 
    fxReferenceNo: string,
    fxRate: number,
    amountToUtilize: number
      ) {
      this.amountToUtilize = amountToUtilize;
      this.fxRate = fxRate ;
      this.fxReferenceNo =fxReferenceNo;
    }
}
export class Account {
   accountName: string;
   accountNo: string;
   currency: string;
  constructor(accountName: string, accountNo: string, currency: string) {
    this.accountName = accountName;
    this.accountNo = accountNo;
    this.currency = currency;
  }
}
export enum TransferType {
   FCD_TO_THB = 'FCD_TO_THB',
   THB_TO_FCD = 'THB_TO_FCD',
   FCD_TO_FCD = 'FCD_TO_FCD'
}