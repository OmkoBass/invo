import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { CheckCircleIcon } from "@primer/octicons-react";

import {
  Container,
  Text,
  Title,
  List,
  ThemeIcon,
  Group,
  createStyles,
  Button,
} from "@mantine/core";

import hero from "../assets/hero.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.45)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <div>
      <Head>
        <title>Invo</title>
        <meta name="description" content="Generated invoices easily." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span className={classes.highlight}>No Sign Up or Ads</span> Create <br />{" "}
              invoices easily with{" "}
              <Text component="span" inherit color="blue">
                Invo
              </Text>
            </Title>
            <Text color="dimmed" mt="md">
              Easily create basic invoices, generate them on the page and save them
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={32} radius="xl">
                  <CheckCircleIcon size={24} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b> Easy to use </b> - generate invoices as soon as you fill in the fields
                you want.
              </List.Item>
              <List.Item>
                <b> Instant Generation </b> - Invoice will be created instantly on the
                spot for you to save.
              </List.Item>
              <List.Item>
                <b>No ads or sign ups</b> - Use it forever for free without any waiting
                time.
              </List.Item>
            </List>

            <Group mt={30}>
              <Link href="/create" passHref>
                <Button radius="xl" fullWidth size="xl" className={classes.control}>
                  Create Invoice
                </Button>
              </Link>
            </Group>
          </div>

          <Image src={hero} alt="hero" className={classes.image} />
        </div>
      </Container>
    </div>
  );
};

export default Home;
