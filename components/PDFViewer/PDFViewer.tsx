import dynamic from "next/dynamic";

// I have to import it like this
// because it uses a webapi
// and next will try to render it
// on the server side
const PDFViewer = dynamic(
  (): any => import("@react-pdf/renderer").then((pdf) => pdf.PDFViewer),
  { ssr: false }
);

export default PDFViewer;
