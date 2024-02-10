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

type SenderEmailProps = {
  name: string;
  contents: string;
};

export const SenderEmail = ({ name, contents }: SenderEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body style={main}>
        <Container className="25px 48px m-0 mx-auto px-6 py-10">
          <Heading className="mt-12 text-3xl font-bold">
            🪄 Thanks for reaching out!
          </Heading>
          <Text className="mt-8 text-xl font-medium">Hey, {name}!</Text>
          <Section>
            <Text className="text-base leading-7">
              This email is to confirm that I have received your message and
              I&apos;ll get back to you as soon as possible.
            </Text>
            <Section>
              <Text className="text-sm leading-7">
                Right below is a copy of the message
              </Text>
              <Text className="rounded-lg border border-solid border-neutral-300 px-4 py-2">
                {contents}
              </Text>
            </Section>
            <Text className="text-sm leading-7">
              Best regards,
              <br />
              Luca from infs.world
            </Text>
          </Section>
          <Hr className="mb-6" />
          <Text className="text-xs text-neutral-500">
            Luca Kuiper @{" "}
            <Link className="text-purple-500" href="https://infs.world">
              infs.world
            </Link>
          </Text>
          <Text className="text-xs text-neutral-500">
            If you didn&apos;t reach out to me, please ignore this email.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

SenderEmail.defaultProps = {
  name: "Luca",
  contents: "Hello, world!",
};

export default SenderEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};
