export default {
  getPaymentInstructions: () => {
    return `
      <div style="font-family: 'Times New Roman', serif; font-size: 14px; line-height: 1.3;">
Kindly arrange for the transfer of the amount to our bank account with the Capital Bank of Jordan with the following particulars :
        <div style="white-space: pre-line; font-weight: normal; margin-top: 10px;">
				
<b>ACCOUNT NAME : ALI SHARIF ZU'BI ADVOCATES & LEGAL CONSULTANTS</b>
<b>ACCOUNT NO. : 02103/224332/00</b>
CAPITAL BANK OF JORDAN
SWIFT CODE : EFBKJOAM

<div style="margin-left: 20px;">
<b>CORRESPONDING BANK :</b>

BANK OF NEW YORK
HEAD OFFICE
48 WALL STREET
NEW YORK, NEW YORK 10286
ACC. NO. 8900331305
Swift Code: IRVTUS3N
ABA No. 021000018
</div>

<b>(PLEASE INSERT COMPANY NAME AND INVOICE NUMBER FOR IDENTIFICATION PURPOSES)</b>
        </div>
      </div>
    `;
  }
}
