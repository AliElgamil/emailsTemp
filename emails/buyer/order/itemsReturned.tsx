import {
  Body,
  Container,
  Head,
  Html,
  Text,
  Section,
  Tailwind,
  Img,
  Link,
  Row,
  Column,
  Button,
} from "@react-email/components";
import React from "react";
import { tailwindConfig } from "../../assets/constant";
import {
  contactUs,
  downloadApp,
  socialMedia,
} from "../../assets/constant/footer";

export default function ItemsReturned() {
  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className="bg-body-bg font-sans px-2 py-4">
          <Container className="bg-white rounded-lg p-[40px] max-w-[660px] w-[660px] text-black">
            {/* Logo */}
            <Section className="mb-8">
              <Img
                src="https://kraftsstorage.s3.eu-central-1.amazonaws.com/static/mail_icons/krafttopia/krafttopia.png"
                alt="krafttopia logo"
                className="w-[180px] mx-auto"
              />
            </Section>
            {/* Logo */}

            {/* Content */}
            <Section>
              <Text className="text-xl">Mohamed Ali,</Text>
              <Text>
                Heads up! An item in your cart has a new price See the details
                below ⬇️
              </Text>
              <Row className="border border-border-gray border-solid p-2 rounded-lg mb-4">
                <Column>
                  <div className="mr-2 w-[50px] h-[50px] rounded-lg p-1">
                    <Img src="#" className="max-w-full max-h-full" />
                  </div>
                </Column>
                <Column>
                  <Text className="m-0 mr-auto max-w-[250px]">
                    iPhone 11 Black 128GB 4G LTE (2020 - Slim Packing) - Middle
                    East Version
                  </Text>
                </Column>
                <Column>
                  <div className="ml-auto w-fit flex">
                    <Text className="m-0">34,800 EGP</Text>
                    <Img src="" alt="arrow" className="w-6 mx-2" />
                    <Text className="m-0">35,000 EGP</Text>
                  </div>
                </Column>
              </Row>
              <Text>
                If you would like to proceed with your order,
                <Link href="#" className="text-primary">
                  please contact us.
                </Link>
              </Text>
              <Button
                href="#"
                className="rounded-full bg-primary text-white px-8 py-4 leading-4 mr-2"
              >
                see your cart
              </Button>

              <Text className="font-bold text-xl m-0 mt-8 mb-4 leading-4">
                Thank you for using Krafttopia!
              </Text>
            </Section>
            {/* Content */}

            {/* Footer */}
            <Section className="mt-4 bg-primary text-white px-4 pt-8 pb-6 rounded-xl">
              <Row>
                <Column>
                  {contactUs.map((contactUs) => (
                    <div className="flex mb-2">
                      <div className="icon mr-2">
                        <Img
                          src={contactUs.icon}
                          className="w-5 object-contain"
                        />
                      </div>
                      <div className="text">
                        <Text className="font-bold m-0 text-[14px]">
                          {contactUs.title}
                        </Text>
                        <Link
                          href={contactUs.link}
                          className="text-[14px] m-0 text-white"
                        >
                          {contactUs.content}
                        </Link>
                      </div>
                    </div>
                  ))}
                </Column>

                <Column width={"50%"}>
                  <Text className="font-bold capitalize m-0 mb-2">
                    Follow us
                  </Text>
                  <div className="flex mb-4">
                    {socialMedia.map((social) => (
                      <Link href={social.link} className="w-10 h-10 mr-1 ">
                        <Img src={social.icon} className="w-10 h-10" />
                      </Link>
                    ))}
                  </div>
                  <Text className="font-bold capitalize m-0 mb-2">
                    Download App
                  </Text>
                  <div className="flex">
                    {downloadApp.map((app) => (
                      <Link href={app.link} className="mr-1 w-1/3">
                        <Img
                          src={app.img}
                          className="w-full aspect-[8.5/2.5] max-w-[90px]  object-contain mr-1"
                        />
                      </Link>
                    ))}
                  </div>
                </Column>
              </Row>
            </Section>

            <Section className="mt-8">
              <Text className="text-center font-bold m-0">
                @2024 krafttopia all rights reserved
              </Text>
              <Text className="text-center m-0">
                Don't like these emails?{" "}
                <Link href="#" className="text-black">
                  Unsubscribe
                </Link>
                .
              </Text>
            </Section>
            {/* Footer */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
