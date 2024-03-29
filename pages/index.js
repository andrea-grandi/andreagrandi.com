import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
//import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
//import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
       <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" align="center">
            Andrea Grandi
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
        Hello! I'm Andrea Grandi, a passionate and driven individual with a background in computer science and a focus on artificial intelligence. I completed my high school education at Enrico Fermi in Modena in 2019 and went on to earn my bachelor's degree in Computer Engineering from the University of Modena and Reggio Emilia (UniMoRe).

        Currently, I am pursuing my master's degree in Artificial Intelligence Engineering at UniMoRe, where I continue to explore and deepen my knowledge in this rapidly evolving field. My academic journey has equipped me with a solid foundation, and I am excited to apply my skills and expertise to real-world challenges.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Modena, Italy.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          High school degree at I.T.I.S Enrico Fermi, Modena.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          BSc in Computer Engineering at UniMoRe.
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          MSc in Artificial Intelligence Engineering at UniMoRe.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Basketball, Motor Racing, Gymnastics
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/andrea-grandi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @andrea-grandi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Andrea Grandi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/andre_g00" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @andre_g00
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
