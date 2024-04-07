import {
  Section,
  Container,
  BlogCard,
  Heading,
  Statistics,
  CryptoHistory,
  ForbesList,
} from 'components';

import data from './data/stats.json';

import article from 'data/article.json';

import forbes from 'data/forbes.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          userName={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />
        ;
        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" data={data} />
        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList forbes={forbes} />
        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
