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
import { shippedStatus } from "../../assets/constant/status";

export default function Shipped() {
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
                We would like to inform you that the product(s) coming from
                order number 3925137 have been shipped JE-DAB-392513725-4881
              </Text>
              <div className="status flex mb-4 relative z-10">
                {/* <div className="absolute top-[22%] left-[4rem] border border-dashed border-gray w-4/5 -z-10"></div> */}
                {shippedStatus.map((status) => (
                  <div className="w-1/4 ">
                    <div className="px-4 bg-white mx-auto w-fit">
                      <div
                        className={`bg-white border-[16px] border-solid rounded-full w-4 h-4 ${
                          status.status
                            ? "bg-white border-primary "
                            : "bg-gray border-gray"
                        }`}
                      ></div>
                    </div>
                    <Text className="text-center font-bold">
                      {status.title}
                    </Text>
                  </div>
                ))}
              </div>

              <div className="p-3 border border-gray-2 border-solid rounded-xl ">
                <Text className="font-bold p-3 m-0 mb-2 bg-gray-2 rounded-md">
                  Summary of your requests:
                </Text>
                <Section>
                  <Row className="mb-4">
                    <Column width={"100px"}>
                      <Text className="m-0 text-gray-3">Product</Text>
                    </Column>
                    <Column className="w-[250px]"></Column>
                    <Column width={"65px"}>
                      <Text className="m-0 text-gray-3">Qty</Text>
                    </Column>
                    <Column>
                      <Text className="m-0 text-gray-3">price</Text>
                    </Column>
                  </Row>
                  <Row className="border border-border-gray border-solid p-2 rounded-lg mb-4">
                    <Column width={"100px"}>
                      <div className="mr-2 w-[50px] h-[50px] rounded-lg p-1">
                        <Img src="#" className="max-w-full max-h-full" />
                      </div>
                    </Column>
                    <Column className="w-[250px]">
                      <Text className="m-0  max-w-[250px]">
                        iPhone 11 Black 128GB 4G LTE (2020 - Slim Packing) -
                        Middle East Version
                      </Text>
                    </Column>
                    <Column width={"65px"}>
                      <Text className="m-0">3</Text>
                    </Column>
                    <Column>
                      <Text className="m-0">34,800 EGP</Text>
                    </Column>
                  </Row>
                </Section>
              </div>

              <div className="flex my-8  mx-auto w-fit">
                <Button
                  href="#"
                  className="rounded-full text-sm bg-primary text-white px-8 py-2 align-middle mr-2"
                >
                  Order details
                </Button>
                <Button
                  href="#"
                  className="rounded-full text-sm text-primary bg-white border border-solid border-primary px-8 py-2 align-middle"
                >
                  Tracking Order
                </Button>
              </div>

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
                      <Link href={app.link} className="mr-1">
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
