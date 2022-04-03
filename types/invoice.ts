import InvoiceData from "./invoiceData";

export default interface Invoice {
  invoiceName: string;
  img: string;
  date: Date | string;
  place: string;
  fromName: string;
  fromFirm: string;
  fromStreet: string;
  fromCity: string;
  fromPIB: string;
  fromAccount: string;
  fromEmail: string;
  toName: string;
  toAddress: string;
  toCity: string;
  toPIB: string;
  invoiceData: InvoiceData[];
}
