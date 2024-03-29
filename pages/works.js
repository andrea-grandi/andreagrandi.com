import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTikTok from '../public/images/works/tiktok.png'
import thumbSignGloves from '../public/images/works/signgloves.png'
import thumb2DGame from '../public/images/works/2d_game.png'
import thumbDocumentSearch from '../public/images/works/sorl.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="Sign Gloves" 
            title="Sign Gloves" 
            thumbnail={thumbSignGloves}
          >
            Glove that convert LIS signs into speach
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Document Searching Application"
            title="Document Searching Application"
            thumbnail={thumbDocumentSearch}
          >
            Web Application that index documents in storage with the use of Apache Solr
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Tik Tok Live Scaper"
            title="Tik Tok Live Scarper"
            thumbnail={thumbTikTok}
          >
            Application written in C# with Unity engine
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
            id="2D Game" 
            thumbnail={thumb2DGame} 
            title="2D Game"
          >
            2D Game written in Java
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
