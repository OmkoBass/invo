import React, { useEffect } from "react";

import dynamic from "next/dynamic";

import Separator from "../Separator";

import { Document, Page, View, Text, StyleSheet, Font } from "@react-pdf/renderer";

// I have to import it like this
// because it uses a webapi
// and next will try to render it
// on the server side
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((pdf) => pdf.PDFViewer),
  { ssr: false }
);

import dayjs from "dayjs";

// interface Props {
//   invoice: Invoice;
// }

const styles = StyleSheet.create({
  invoiceTitle: {
    fontWeight: "bold",
    fontSize: 32,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  text: {
    color: "#101113",
    fontSize: 14,
  },
  page: {
    fontFamily: "Poppins",
    backgroundColor: "white",
  },
  flexRow: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "0 1cm",
    textAlign: "left",
  },
});

// THE STYLING IS BAD BECAUSE IT WON'T WORK ANY OTHER WAY
export const PDF = ({ invoice }) => {
  useEffect(() => {
    Font.register({
      family: "Poppins",
      src: "https://fonts.googleapis.com/css?family=Poppins",
    });
  }, []);

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page className={styles.page} style={{ padding: "1cm" }}>
          <View>
            <Text style={styles.invoiceTitle}>{invoice.invoiceName}</Text>
          </View>

          <Separator color={"black"} borderWidth={2} style={{ marginBottom: 6 }} />

          <View style={styles.flexRow}>
            <Text style={styles.title}>From:</Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.text}>
              Date: {dayjs(invoice.date).format("DD.MM.YYYY")}
            </Text>
            <Text style={styles.text}>Place: {invoice.place}</Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.text}>From: {invoice.fromName}</Text>
            <Text style={styles.text}>Firm: {invoice.fromFirm}</Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.text}>Street: {invoice.fromStreet}</Text>
            <Text style={styles.text}>City: {invoice.fromCity}</Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.text}>PIB: {invoice.fromPIB}</Text>
            <Text style={styles.text}>Account: {invoice.fromAccount}</Text>
          </View>

          <Separator style={{ margin: "8 1cm" }} />

          <View style={styles.flexRow}>
            <Text style={styles.title}>To:</Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.text}>Email: {invoice.toEmail}</Text>
            <Text style={styles.text}>Name: {invoice.toName}</Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.text}>Address: {invoice.toAddress}</Text>
            <Text style={styles.text}>City: {invoice.toCity}</Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.text}>PIB: {invoice.toPIB}</Text>
            <Text style={styles.text}>Account: {invoice.toAccount}</Text>
          </View>

          <View style={{ marginTop: "1cm" }}>
            <View style={styles.flexRow}>
              <Text style={[styles.text, { flexBasis: "20%" }]}> Service Type</Text>
              <Text style={[styles.text, { flexBasis: "20%" }]}> Unit </Text>
              <Text style={[styles.text, { flexBasis: "20%" }]}>Amount</Text>
              <Text style={[styles.text, { flexBasis: "20%" }]}> Price </Text>
              <Text style={[styles.text, { flexBasis: "20%" }]}> Total </Text>
            </View>
          </View>

          <Separator color={"#141517"} borderWidth={1} style={{ margin: "0 1cm" }} />

          <View>
            {invoice.invoiceData.map((data, index) => {
              return (
                <View key={index} wrap={false}>
                  <View style={styles.flexRow}>
                    <Text style={[styles.text, { flexBasis: "20%" }]}>
                      {data.serviceType}
                    </Text>
                    <Text style={[styles.text, { flexBasis: "20%" }]}> {data.unit}</Text>
                    <Text style={[styles.text, { flexBasis: "20%" }]}>{data.amount}</Text>
                    <Text style={[styles.text, { flexBasis: "20%" }]}> {data.price}</Text>
                    <Text style={[styles.text, { flexBasis: "20%" }]}> {data.total}</Text>
                  </View>
                  <Separator
                    color={"#141517"}
                    borderWidth={1}
                    style={{ margin: "0 1cm" }}
                  />
                </View>
              );
            })}
          </View>

          <View style={{ display: "flex", alignSelf: "flex-end", margin: "1cm" }}>
            <Text style={styles.title}>
              Total:{" "}
              {invoice.invoiceData.reduce((sum, value) => {
                return sum + value.total;
              }, 0)}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
