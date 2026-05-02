"use client";

import Image from "next/image";
import {
    Section,
    Heading,
    Bold,
    CardWrapper,
    Card,
    IconCircle,
    IconWrapper,
    CardTitle,
    CardText,
    Label,
} from "./WhyChooseUs.style";

const WhyChooseUs = () => {
    return (
        <Section>
            <Label>
                <span>WHY CHOOSE US</span>
            </Label>


            <Heading>
                <>
                    Through visionary design and <Bold>thoughtful planning</Bold>, we&nbsp;
                </>
                <br />
                <>
                    create <Bold>homes and spaces</Bold> that resonate with life itself.
                </>
            </Heading>


            <CardWrapper>
                <Card>
                    <IconCircle>
                        <IconWrapper>
                            <Image
                                src="/images/design.svg"
                                alt="Thoughtful Design"
                                fill
                            />
                        </IconWrapper>
                    </IconCircle>

                    <CardTitle>Thoughtful Design</CardTitle>
                    <CardText>
                       Every space is carefully planned using modern architecture house plans and architectural floor plan drawings, ensuring functional, elegant, and inspiring environments that reflect your lifestyle and personality.
                    </CardText>
                </Card>

                <Card>
                    <IconCircle>
                        <IconWrapper>
                            <Image
                                src="/images/client.svg"
                                alt="Client Focus"
                                fill
                            />
                        </IconWrapper>
                    </IconCircle>

                    <CardTitle>Client-Focused Approach</CardTitle>
                    <CardText>
                       By listening and understanding your lifestyle and needs, we create spaces that feel truly personal, fostering trust through a clear and Thoughtful Architect plans for house process.
                    </CardText>
                </Card>

                <Card>
                    <IconCircle>
                        <IconWrapper>
                            <Image
                                src="/images/timeless.svg"
                                alt="Timeless Aesthetics"
                                fill
                            />
                        </IconWrapper>
                    </IconCircle>

                    <CardTitle>Timeless Aesthetics</CardTitle>
                    <CardText>
                        We move beyond trends to create modern architectural home designs and architectural design home plans that stay relevant, timeless, and true to our design philosophy.
                    </CardText>
                </Card>
            </CardWrapper>
        </Section>
    );
};

export default WhyChooseUs;
