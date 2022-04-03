import React from "react";

import { createStyles, Container, Group, ActionIcon, Text, Box } from "@mantine/core";

import { MarkGithubIcon } from "@primer/octicons-react";

interface Props {
  height: number;
}

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export const MyFooter: React.FC<Props> = ({ height }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Box>
          <Text color="blue" size="xl" weight={700} style={{ fontSize: 48 }}>
            Invo
          </Text>
          <Text>Create invoices easily.</Text>
          <Text>Check out my github for similar stuff.</Text>
        </Box>

        <Group spacing={0} className={classes.links} position="right" noWrap>
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
    </div>
  );
};
