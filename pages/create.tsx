import type { NextPage } from "next";
import React from "react";

import { Container, TextInput, NumberInput, Button } from "@mantine/core";

import { useForm } from "@mantine/hooks";

import invoice from "../types/invoice";
import invoiceData from "../types/invoiceData";
import { DatePicker } from "@mantine/dates";

const Create: NextPage = () => {
  const form = useForm<invoice>({
    initialValues: {
      invoiceName: "",
      img: "",
      date: new Date(),
      place: "",
      fromName: "",
      fromFirm: "",
      fromStreet: "",
      fromCity: "",
      fromPIB: "",
      fromAccount: "",
      fromEmail: "",
      toName: "",
      toAddress: "",
      toCity: "",
      toPIB: "",
      invoiceData: [],
    },
  });

  const handleFormSubmit = (values: invoice) => {
    console.log(values);
  };

  return (
    <Container>
      <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
        <TextInput
          required
          label="Invoice Name"
          placeholder="Invo"
          {...form.getInputProps("invoiceName")}
        />

        <DatePicker label="Invoice Date" {...form.getInputProps("date")} />

        <TextInput
          required
          label="Place"
          placeholder="Miami Florida"
          {...form.getInputProps("place")}
        />

        <TextInput
          required
          label="From"
          placeholder="Jack"
          {...form.getInputProps("fromName")}
        />

        <TextInput
          required
          label="Firm"
          placeholder="Firm"
          {...form.getInputProps("fromFirm")}
        />

        <TextInput
          required
          label="Street"
          placeholder="NW St 20th"
          {...form.getInputProps("fromStreet")}
        />

        <TextInput
          required
          label="City"
          placeholder="Miami"
          {...form.getInputProps("fromCity")}
        />

        <TextInput required label="PIB" {...form.getInputProps("fromPIB")} />

        <TextInput
          required
          label="Account"
          placeholder="88188752422"
          {...form.getInputProps("fromAccount")}
        />

        <TextInput
          required
          label="Email"
          placeholder="invo@me"
          {...form.getInputProps("fromEmail")}
        />

        <TextInput
          required
          label="Name"
          placeholder="John"
          {...form.getInputProps("toName")}
        />

        <TextInput
          required
          label="Address"
          placeholder="NW 77th Avenue"
          {...form.getInputProps("toAddress")}
        />

        <TextInput
          required
          label="City"
          placeholder="Miami"
          {...form.getInputProps("toCity")}
        />

        <TextInput
          required
          label="PIB"
          placeholder="11544458355"
          {...form.getInputProps("toPIB")}
        />

        <Button type="submit" size="lg">
          Create
        </Button>
      </form>
    </Container>
  );
};

export default Create;
