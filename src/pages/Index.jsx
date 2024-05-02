// Complete the Index page component for the apple farm website
import { Box, Container, Flex, Heading, Image, Link, Text, VStack, SimpleGrid, Input, Textarea, Button } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center">
        <Image src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGZhcm0lMjBOb3J3YXl8ZW58MHx8fHwxNzE0NjgwODQyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Apple Farm" boxSize="100%" objectFit="cover" />
        <Heading as="h1" size="2xl" mt={5}>
          Welcome to Our Apple Farm
        </Heading>
        <Text fontSize="xl" mt={2}>
          Experience the taste of Norway's finest apples.
        </Text>
      </Flex>

      <Container maxW="container.xl" mt={10}>
        <VStack spacing={8}>
          <Box as="section" id="about-us">
            <Heading as="h2" size="xl">
              About Us
            </Heading>
            <Text>Nestled in the heart of Norway, our apple farm has been a family-owned establishment since 1950. With a commitment to sustainable farming, we produce some of the finest apple varieties known for their crisp texture and rich flavors.</Text>
          </Box>

          <Box as="section" id="our-apples">
            <Heading as="h2" size="xl">
              Our Apples
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              <Box>
                <Image src="https://images.unsplash.com/photo-1700174542238-a2d686476b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxIb25leWNyaXNwJTIwYXBwbGVzfGVufDB8fHx8MTcxNDY4Mjk5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Honeycrisp Apples" />
                <Text mt={2}>Honeycrisp: Sweet and crisp, perfect for a fresh snack.</Text>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1480525560316-45061b85b605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHcmFubnklMjBTbWl0aCUyMGFwcGxlc3xlbnwwfHx8fDE3MTQ2ODI5OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Granny Smith Apples" />
                <Text mt={2}>Granny Smith: Tart and tangy, ideal for pies.</Text>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1602693874812-408fc283f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxGdWppJTIwYXBwbGVzfGVufDB8fHx8MTcxNDY4Mjk5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Fuji Apples" />
                <Text mt={2}>Fuji: Juicy and sweet, great for salads and sauces.</Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box as="section" id="gallery">
            <Heading as="h2" size="xl">
              Gallery
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              <Image src="https://images.unsplash.com/photo-1607358049845-4360f06be5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMG9yY2hhcmR8ZW58MHx8fHwxNzE0NjgwODQyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Apple Orchard" />
              <Image src="https://images.unsplash.com/photo-1617235178117-a1f5fecb72bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGhhcnZlc3R8ZW58MHx8fHwxNzE0NjgwODQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Apple Harvest" />
              <Image src="https://images.unsplash.com/photo-1634429001369-9bba712fffe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGZhcm0lMjBzY2VuaWN8ZW58MHx8fHwxNzE0NjgwODQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Scenic Apple Farm" />
            </SimpleGrid>
          </Box>

          <Box as="section" id="contact-us">
            <Heading as="h2" size="xl">
              Contact Us
            </Heading>
            <VStack spacing={3} mt={4}>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button colorScheme="green">Send Message</Button>
            </VStack>
            <Flex align="center" justify="space-between" mt={4}>
              <Link href="mailto:info@applefarm.no" isExternal>
                <FaEnvelope /> info@applefarm.no
              </Link>
              <Link href="tel:+4701234567" isExternal>
                <FaPhone /> +47 012 345 67
              </Link>
              <Link href="https://facebook.com" isExternal>
                <FaFacebook /> Facebook
              </Link>
              <Link href="https://instagram.com" isExternal>
                <FaInstagram /> Instagram
              </Link>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
