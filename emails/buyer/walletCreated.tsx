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
} from "@react-email/components";
import React from "react";
import { tailwindConfig } from "../assets/constant";
import { contactUs, downloadApp, socialMedia } from "../assets/constant/footer";

export default function WalletCreated() {
  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className="bg-body-bg font-sans px-2 py-4">
          <Container className="bg-white rounded-lg p-[40px] max-w-[660px] text-black">
            {/* Content */}
            <Section>
              <Img
                src="https://kraftsstorage.s3.eu-central-1.amazonaws.com/static/mail_icons/krafttopia/wallet.png"
                className="block w-[180px] mx-auto"
              />
              <Text className="text-2xl text-center font-bold m-0 mt-4">
                {" "}
                Hi Mohamed,{" "}
              </Text>
              <Text className="text-2xl text-center font-bold m-0 mb-4 ">
                Welcome back to{" "}
                <Link href="#" className="text-primary">
                  Krafftopia!
                </Link>
              </Text>
              <Text className="text-base max-w-[400px] m-0 mx-auto mb-9 text-center">
                Your wallet has been successfully created! You can now use it
                for transactions 😊
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
                      <Link href={social.link} className="w-10 h-10 mr-1 grid">
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
