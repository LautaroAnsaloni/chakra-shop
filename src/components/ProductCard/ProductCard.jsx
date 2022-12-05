import { Card, CardHeader, CardBody, CardFooter, Divider, Text, Heading, Stack, Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from 'react-bootstrap';

const ProductCard = ({ title, images, description, price}) => {
    return (
        <Card maxW='sm'>
        <CardBody>
          <Image
            src={images}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>
              {description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  };
  
  export default ProductCard;


  
