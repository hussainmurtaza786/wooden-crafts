import { notFound } from "next/navigation";
import { Box, Container, Heading, Text, VStack, List, ListItem } from "@chakra-ui/react";

const blogs = {
    "future-of-shariq-traders": {
        title: "The Future of Shariq Traders: Innovation, Growth, and Trust",
        content: (
            <>
                <Text>
                    At <strong>Shariq Traders</strong>, we believe the future of trading lies in innovation, transparency, and long-term value creation.
                    The global marketplace is evolving rapidly, and businesses need partners who can adapt, deliver, and lead with vision.
                </Text>

                <Heading size="lg" mt={6}>🌍 Embracing Global Trade Trends</Heading>
                <Text>
                    From digital transformation to sustainable sourcing, international trade is entering a new era.
                    Shariq Traders is committed to integrating modern technologies such as <strong>data-driven insights, automation, and AI</strong> into our workflows.
                    This ensures our clients remain ahead of competitors while benefiting from cost efficiency and transparency.
                </Text>

                <Heading size="lg" mt={6}>⚡ Innovation at the Core</Heading>
                <Text>
                    The future belongs to businesses that innovate. Whether it's smarter supply chain management or adopting green solutions,
                    our focus is on creating <strong>sustainable growth opportunities</strong> for businesses in multiple sectors.
                </Text>

                <Heading size="lg" mt={6}>🤝 Building Stronger Partnerships</Heading>
                <Text>
                    Trust remains our foundation. The future of Shariq Traders is not just about expanding our reach, but also about
                    strengthening relationships with clients. We aim to become a <strong>trusted global trading partner</strong> that
                    empowers businesses of all sizes.
                </Text>

                <Heading size="lg" mt={6}>📈 Looking Ahead</Heading>
                <Text>
                    With a clear vision and customer-focused strategy, Shariq Traders is ready to shape the future of trading.
                    Businesses that partner with us will gain access to <strong>innovative solutions, ethical practices, and global opportunities</strong>.
                </Text>
            </>
        ),
    },

    "smart-investments": {
        title: "5 Tips for Smarter Investments with Shariq Traders",
        content: (
            <>
                <Text>
                    Smart investments are the backbone of business growth. At <strong>Shariq Traders</strong>, we help companies
                    identify opportunities that are both profitable and sustainable. If you want to maximize returns while minimizing risks,
                    here are <strong>5 investment strategies</strong> every business should consider.
                </Text>

                <Heading size="lg" mt={6}>1️⃣ Diversify Your Portfolio</Heading>
                <Text>
                    Putting all your resources into a single channel is risky. Instead, diversify across different industries and regions.
                    This spreads risk and increases potential for long-term stability.
                </Text>

                <Heading size="lg" mt={6}>2️⃣ Focus on Sustainable Opportunities</Heading>
                <Text>
                    Modern consumers and businesses prefer eco-friendly and ethical solutions. Investing in <strong>sustainable trading practices</strong>
                    not only enhances brand reputation but also ensures compliance with global standards.
                </Text>

                <Heading size="lg" mt={6}>3️⃣ Stay Informed with Market Insights</Heading>
                <Text>
                    Successful investments depend on knowledge. At Shariq Traders, we provide <strong>data-driven reports and insights</strong>
                    so our clients can make confident financial decisions.
                </Text>

                <Heading size="lg" mt={6}>4️⃣ Manage Risk Effectively</Heading>
                <Text>
                    Every investment carries risk. The key is to identify potential threats early and put mitigation strategies in place.
                    Our team helps businesses minimize exposure while maximizing returns.
                </Text>

                <Heading size="lg" mt={6}>5️⃣ Build Long-Term Strategies</Heading>
                <Text>
                    Quick gains can be tempting, but the smartest investments focus on <strong>long-term growth</strong>.
                    By aligning with Shariq Traders, businesses benefit from strategies that ensure steady progress over years, not just months.
                </Text>

                <Heading size="lg" mt={6}>📌 Conclusion</Heading>
                <Text>
                    Smarter investments are about balance, sustainability, and foresight. With Shariq Traders as your partner,
                    you’ll have access to <strong>expert strategies, reliable data, and ethical trading practices</strong>.
                </Text>
            </>
        ),
    },

    "long-term-partnerships": {
        title: "Building Long-Term Partnerships: The Shariq Traders Way",
        content: (
            <>
                <Text>
                    In today’s competitive business world, success is no longer about one-time transactions.
                    At <strong>Shariq Traders</strong>, we believe in building <strong>long-term partnerships</strong> that create mutual growth, trust, and reliability.
                </Text>

                <Heading size="lg" mt={6}>💡 Why Long-Term Partnerships Matter</Heading>
                <Text>
                    Strong relationships are the foundation of global business. They lead to better communication, smoother negotiations,
                    and more profitable outcomes. At Shariq Traders, we prioritize collaboration over short-term profit.
                </Text>

                <Heading size="lg" mt={6}>🤝 Trust and Transparency</Heading>
                <Text>
                    Our philosophy is simple: <strong>business thrives on trust</strong>. We maintain transparency in pricing, sourcing,
                    and delivery so our clients always know what they are getting. This commitment ensures repeat business and loyalty.
                </Text>

                <Heading size="lg" mt={6}>🌱 Shared Growth Opportunities</Heading>
                <Text>
                    Long-term partnerships create shared success. By understanding our clients’ goals, we align our strategies
                    to deliver growth that benefits both sides.
                </Text>

                <Heading size="lg" mt={6}>📊 Case Example</Heading>
                <Text>
                    Over the years, we’ve worked with businesses across industries. Many started small but grew into
                    industry leaders through <strong>consistent collaboration with Shariq Traders</strong>.
                </Text>

                <Heading size="lg" mt={6}>🚀 Looking Forward</Heading>
                <Text>
                    The future of trade depends on lasting connections. Shariq Traders is committed to being a <strong>reliable partner</strong>
                    for businesses worldwide, offering not just services, but relationships that stand the test of time.
                </Text>
            </>
        ),
    },
};

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
    const blog = blogs[params.slug as keyof typeof blogs];

    if (!blog) return notFound();

    return (
        <Container mx='auto' maxW="4xl" py={10}>
            <VStack align="start">
                <Heading size="2xl" mb={6}>{blog.title}</Heading>
                <Box>{blog.content}</Box>
            </VStack>
        </Container>
    );
}
