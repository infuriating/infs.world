import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Text,
  Link,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

type RecipientEmailProps = {
  name: string;
  email: string;
  contents: string;
};

export const RecipientEmail = ({
  name,
  email,
  contents,
}: RecipientEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body style={main}>
        <Container className="25px 48px m-0 mx-auto px-6 py-10">
          <Text className="text-xs text-neutral-500">
            Return mail to: {email}
          </Text>
          <Heading className="mt-12 text-3xl font-bold">
            🪄 {name} left you a message!
          </Heading>
          <Section>
            <Text className="text-base leading-7">
              Here is {name}&apos;s message:
            </Text>
            <Text className="rounded-lg border border-solid border-neutral-300 px-4 py-2">
              {contents}
            </Text>
          </Section>
          <Hr className="mb-6" />
          <Text className="text-xs text-neutral-500">
            Luca Kuiper @{" "}
            <Link className="text-purple-500" href="https://infs.world">
              infs.world
            </Link>
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

RecipientEmail.defaultProps = {
  name: "Luca",
  contents: "Hello, world!",
};

export default RecipientEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};
