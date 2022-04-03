import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import {
  Header,
  Text,
  createStyles,
  Container,
  Group,
  ActionIcon,
  Button,
} from "@mantine/core";

import { MarkGithubIcon } from "@primer/octicons-react";

interface Props {
  height: number;
  p: string;
}

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}));

export const MyHeader: React.FC<Props> = ({ height, p }) => {
  const router = useRouter();
  const { classes } = useStyles();

  return (
    <Header height={height} p={p}>
      <Container className={classes.inner}>
        <Group className={classes.links} spacing={8}>
          <Link href="/" passHref>
            <Button
              size="lg"
              component="a"
              variant={router.pathname === "/" ? "filled" : "subtle"}
            >
              Home
            </Button>
          </Link>
          <Link href="/create" passHref>
            <Button
              size="lg"
              component="a"
              variant={router.pathname.includes("create") === true ? "filled" : "subtle"}
            >
              Create
            </Button>
          </Link>
        </Group>

        <Text color="blue" size="xl" weight={700} style={{ fontSize: 48 }}>
          Invo
        </Text>
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            size="lg"
            component="a"
            href="https://github.com/OmkoBass"
            target="_blank"
          >
            <MarkGithubIcon size={24} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
};

export default MyHeader;
