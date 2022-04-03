import type { NextPage } from "next";
import { useState } from "react";

import {
  Container,
  TextInput,
  Button,
  SimpleGrid,
  Title,
  Text,
  Divider,
  Box,
} from "@mantine/core";

import { useForm } from "@mantine/hooks";

import Invoice from "../types/invoice";
import { DatePicker } from "@mantine/dates";
import PDF from "../components/PDF";

const Create: NextPage = () => {
  const [pdfData, setPdfData] = useState<Invoice>({
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
  });

  const form = useForm<Invoice>({
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

  const handleFormSubmit = (values: Invoice) => {
    setPdfData(values);
  };

  return (
    <Container size="md">
      <Title> Crete your invoice here </Title>
      <Text color="gray">
        Just fill out these fields and the invoice will be created below. You can leave
        any field empty and it will still work. You can create whatever you want.
      </Text>

      <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
        <Box my={12}>
          <Title order={2}>Who is sending the invoice.</Title>
          <Divider />
        </Box>

        <TextInput
          label="Invoice Name"
          placeholder="Invo"
          {...form.getInputProps("invoiceName")}
        />

        <SimpleGrid
          cols={2}
          my={12}
          spacing="lg"
          breakpoints={[
            { maxWidth: 755, cols: 2, spacing: "md" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          <DatePicker label="Invoice Date" {...form.getInputProps("date")} />

          <TextInput
            label="Place"
            placeholder="Miami Florida"
            {...form.getInputProps("place")}
          />

          <TextInput
            label="From"
            placeholder="Jack"
            {...form.getInputProps("fromName")}
          />

          <TextInput
            label="Firm"
            placeholder="Firm"
            {...form.getInputProps("fromFirm")}
          />

          <TextInput
            label="Street"
            placeholder="NW St 20th"
            {...form.getInputProps("fromStreet")}
          />

          <TextInput
            label="City"
            placeholder="Miami"
            {...form.getInputProps("fromCity")}
          />

          <TextInput
            label="PIB"
            placeholder="69969888684"
            {...form.getInputProps("fromPIB")}
          />

          <TextInput
            label="Account"
            placeholder="88188752422"
            {...form.getInputProps("fromAccount")}
          />
        </SimpleGrid>

        <Box my={12}>
          <Title order={2}>Who the invoice is for.</Title>
          <Divider />
        </Box>

        <SimpleGrid
          cols={2}
          my={12}
          spacing="lg"
          breakpoints={[
            { maxWidth: 755, cols: 2, spacing: "md" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          <TextInput
            label="Email"
            placeholder="invo@me"
            {...form.getInputProps("fromEmail")}
          />

          <TextInput label="Name" placeholder="John" {...form.getInputProps("toName")} />

          <TextInput
            label="Address"
            placeholder="NW 77th Avenue"
            {...form.getInputProps("toAddress")}
          />

          <TextInput label="City" placeholder="Miami" {...form.getInputProps("toCity")} />

          <TextInput
            label="PIB"
            placeholder="11544458355"
            {...form.getInputProps("toPIB")}
          />
        </SimpleGrid>

        <Button type="submit" size="lg" my={18}>
          Create
        </Button>
      </form>

      {pdfData && <PDF invoice={pdfData} />}
    </Container>
  );
};

export default Create;
