

import { Background, ContentWrapper, Text} from './NoNewsItem.styled'
import { useSearchParams } from 'react-router-dom';


export const NoNewsItem = () => {
      const [searchParams] = useSearchParams();

    const topic = searchParams.get("search")
    
    return (
        <Background>
            <ContentWrapper>
                <Text sx={{ textAlign: 'center', mb: '40px' }} variant="h3">
                    SORRY!
                </Text>
                 <Text sx={{ textAlign: 'center', mb: '40px' }} variant="h3">
                    But we don't have news about {topic} 
                </Text>
            </ContentWrapper>
        </Background>
);
}