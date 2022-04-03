import React from "react";

import Invoice from "../../types/invoice";

interface Props {
  invoice: Invoice;
}

export const PDF: React.FC<Props> = ({ invoice }) => {
  return <div>Works</div>;
};
